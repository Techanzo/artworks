/**
 * transforms first character of string to uppercase, does not touch rest of the characters
 * @param str string to transform
 * @returns Capitalized string
 */
export function capitalize<Str extends string>(str: Str): Capitalize<Str> {
  return `${str[0].toUpperCase()}${str.slice(1)}` as Capitalize<Str>;
}

/**
 * transforms first character of string to lowercase, does not touch rest of the characters
 * @param str string to transform
 * @returns Uncapitalized string
 */
export function uncapitalize<Str extends string>(str: Str): Uncapitalize<Str> {
  return `${str[0].toLowerCase()}${str.slice(1)}` as Uncapitalize<Str>;
}

/** @credits - https://stackoverflow.com/a/67301712/2284240 */
type TitleCase<Str extends string, Delimiter extends string = ' '> = string extends Str
  ? never
  : Str extends `${infer Word}${Delimiter}${infer Rest}`
  ? `${Capitalize<Word>}${Delimiter}${TitleCase<Rest, Delimiter>}`
  : Capitalize<Str>;

/**
 * transforms first letter of each word in string to uppercase, does not touch rest of the characters
 * @param str string to transform
 * @param str optional - delimiter to use for uppercasing
 * @returns TitleCased string
 */
export function toTitleCase<Str extends string>(str: Str): TitleCase<Str>;
export function toTitleCase<Str extends string, Delimiter extends string = ' '>(
  str: Str,
  delimiter: Delimiter
): TitleCase<Str, Delimiter>;
export function toTitleCase(str: string, delimiter = ' ') {
  return str
    .split(delimiter)
    .map((word) => capitalize(word))
    .join(delimiter);
}

export type Replace<
  Str extends string,
  Search extends string,
  Replacement extends string,
> = Str extends `${infer Prefix}${Search}${infer Suffix}` ? `${Prefix}${Replacement}${Suffix}` : Str;

/**
 * replace first instance of search term with replacement string
 * @param str string to operate on
 * @param search character or string to replace
 * @param replacement character or string to replace with
 * @returns original string with replaced characters or substring
 */
export function replace<Str extends string, Search extends string, Replacement extends string>(
  str: Str,
  search: Search,
  replacement: Replacement
): Replace<Str, Search, Replacement> {
  return str.replace(search, replacement) as Replace<Str, Search, Replacement>;
}

/** @credits - https://www.totaltypescript.com/writing-string-replace-in-typescript */
type ReplaceAll<
  Str extends string,
  Search extends string,
  Replacement extends string,
> = Str extends `${infer Prefix}${Search}${infer Suffix}`
  ? `${Prefix}${Replacement}${ReplaceAll<Suffix, Search, Replacement>}`
  : Str;

/**
 * replace all instances of search term with replacement string
 * @param str string to operate on
 * @param search character or string to replace
 * @param replacement character or string to replace with
 * @returns original string with replaced characters or substring
 */
export function replaceAll<Str extends string, Search extends string, Replacement extends string>(
  str: Str,
  search: Search,
  replacement: Replacement
): ReplaceAll<Str, Search, Replacement> {
  return str.split(search).join(replacement) as ReplaceAll<Str, Search, Replacement>;
}

type Kebab2CamelCase<Str extends string> = ReplaceAll<TitleCase<Str, '-'>, '-', ''>;
export type KebabToCamelCase<
  Str extends string,
  IsFirstLetterUpperCase extends boolean = false,
> = IsFirstLetterUpperCase extends true
  ? Capitalize<Kebab2CamelCase<Str>>
  : Uncapitalize<Kebab2CamelCase<Str>>;

/**
 * capitalize first letter of each hyphen('-') separated word and remove all instances of kebab-separator('-')
 * @param str string to operate on
 * @param boolean (default: false) - is first letter of camelized string capital
 * @returns string transformed to camelCase
 */
export function kebabToCamelCase<Str extends string>(str: Str): KebabToCamelCase<Str>;
export function kebabToCamelCase<Str extends string, IsFirstLetterUpperCase extends boolean>(
  str: Str,
  isFirstLetterUppercase: IsFirstLetterUpperCase
): KebabToCamelCase<Str, IsFirstLetterUpperCase>;
export function kebabToCamelCase(str: string, isFirstLetterUppercase = false) {
  const camelizedString = replaceAll(toTitleCase(str, '-'), '-', '');
  return isFirstLetterUppercase ? capitalize(camelizedString) : uncapitalize(camelizedString);
}

type Snake2CamelCase<Str extends string> = ReplaceAll<TitleCase<Str, '_'>, '_', ''>;
export type SnakeToCamelCase<
  Str extends string,
  IsFirstLetterUpperCase extends boolean = false,
> = IsFirstLetterUpperCase extends true
  ? Capitalize<Snake2CamelCase<Str>>
  : Uncapitalize<Snake2CamelCase<Str>>;

/**
 * capitalize first letter of each underscore('_') separated word and remove all instances of snake-separator('_')
 * @param str string to operate on
 * @param boolean (default: false) - is first letter of camelized string capital
 * @returns string transformed to camelCase
 */
export function snakeToCamelCase<Str extends string>(str: Str): SnakeToCamelCase<Str>;
export function snakeToCamelCase<Str extends string, IsFirstLetterUpperCase extends boolean>(
  str: Str,
  isFirstLetterUppercase: IsFirstLetterUpperCase
): SnakeToCamelCase<Str, IsFirstLetterUpperCase>;
export function snakeToCamelCase(str: string, isFirstLetterUppercase = false) {
  const camelizedString = replaceAll(toTitleCase(str, '_'), '_', '');
  return isFirstLetterUppercase ? capitalize(camelizedString) : uncapitalize(camelizedString);
}

type RemoveUnderscoreFirstLetter<Str extends string> = Str extends `${infer FirstLetter}${infer Rest}`
  ? `${FirstLetter extends '_' ? Rest : `${FirstLetter}${Rest}`}`
  : Str;
// FIXME: if string starts with capital letter, then an extra underscore is prepended
export type CamelToSnakeCase<Str extends string> = Str extends `${infer FirstLetter}${infer Rest}`
  ? `${FirstLetter extends Capitalize<FirstLetter> ? '_' : ''}${RemoveUnderscoreFirstLetter<
      Lowercase<FirstLetter>
    >}${CamelToSnakeCase<Rest>}`
  : Str;

/**
 * transform each capital letter to a combination of underscore('_') and lower cased version of the letter.
 * Note: if first letter of string is capital, then it is transformed to its lower cased version, but it does not start with underscore('_')
 * @param str string to operate on
 * @returns string transformed to snakeCase
 */
export function camelToSnakeCase<Str extends string>(str: Str): CamelToSnakeCase<Str> {
  const firstChar = str[0];
  const rest = str.slice(1);

  let snaked = firstChar.toLowerCase();

  for (let char of rest) {
    const isAlphabet = char.toLowerCase() !== char.toUpperCase();
    const upperCasedChar = char.toUpperCase();

    if (isAlphabet && char === upperCasedChar) {
      snaked += `_${char.toLowerCase()}`;
      continue;
    }

    snaked += char;
  }

  return snaked as CamelToSnakeCase<Str>;
}

/**
 * Generates a random string of provided length
 * @param length length of string to be generated
 * @returns random string
 */
export function randomStr(length = 8) {
  var allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array(length)
    .join()
    .split(',')
    .map(() => allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length)))
    .join('');
}
