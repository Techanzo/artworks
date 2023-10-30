import { CamelToSnakeCase, camelToSnakeCase, SnakeToCamelCase, snakeToCamelCase } from './string';

export type EmptyObject = {
  [K in string | number]: never;
};

export function pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const entries = keys.map((key) => [key, obj[key]]);
  return Object.fromEntries(entries);
}

/**
 * removes specified keys from object
 *
 * @see https://stackoverflow.com/a/67434028/2284240
 */
export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]) {
  const returnVal = { ...obj };

  for (const key of keys) {
    delete returnVal[key];
  }
  return returnVal as unknown as DistributiveOmit<T, K>;
}

export type DeepSnakeKeysToCamelCase<Input> = Input extends Array<any>
  ? { [Index in keyof Input]: DeepSnakeKeysToCamelCase<Input[Index]> }
  : Input extends object
  ? {
      [Key in keyof Input as Key extends string ? SnakeToCamelCase<Key> : Key]: DeepSnakeKeysToCamelCase<
        Input[Key]
      >;
    }
  : Input;

/**
 * transforms keys of object at any level from snake case to camel case
 * @param input string | number | boolean | array | object
 * @returns
 *  - When input is string | number | boolean, it returns input.
 *  - When input is array, it returns the same array, but all keys of any object at any level inside array are transformed to camel case.
 *  - When input is object, it returns the same object, but all keys of any object at any level inside this object are transformed to camel case.
 */
export function deepSnakeKeysToCamelCase<Input extends {}>(input: Input): DeepSnakeKeysToCamelCase<Input>;
export function deepSnakeKeysToCamelCase<Input extends {}>(input: Input): any {
  if (typeof input === 'object' && Array.isArray(input)) {
    return input.map((item: any) => deepSnakeKeysToCamelCase(item));
  }

  if (input && typeof input === 'object') {
    return Object.keys(input).reduce((acc, key) => {
      const transformedKey = snakeToCamelCase(key);
      // @ts-ignore
      acc[transformedKey] = deepSnakeKeysToCamelCase(input[key]);
      return acc;
    }, {});
  }

  return input;
}

export type SnakeKeysToCamelCase<
  Obj extends Record<string, any>,
  ConvertNested extends boolean = true,
> = ConvertNested extends true
  ? DeepSnakeKeysToCamelCase<Obj>
  : {
      [Key in keyof Obj as Key extends string ? SnakeToCamelCase<Key & string> : Key]: Obj[Key];
    };

/**
 * transforms keys of object from snake case to camel case
 * @param obj object
 * @returns input object with transformed camel cased keys to camel cased keys
 */
export function snakeKeysToCamelCase<Obj extends Record<string, any>, ConvertNested extends boolean = true>(
  obj: Obj,
  convertNested?: ConvertNested
): SnakeKeysToCamelCase<Obj, ConvertNested>;
export function snakeKeysToCamelCase<Obj extends Record<string, any>>(
  obj: Obj,
  convertNested = true
): SnakeKeysToCamelCase<Obj> {
  if (convertNested) return deepSnakeKeysToCamelCase(obj);

  return Object.keys(obj).reduce((acc, key) => {
    const modifiedKey = snakeToCamelCase(key) as keyof SnakeKeysToCamelCase<Obj>;
    acc[modifiedKey] = obj[key];
    return acc;
  }, {} as SnakeKeysToCamelCase<Obj>);
}

export type DeepCamelKeysToSnakeCase<Input> = Input extends Array<any>
  ? { [Index in keyof Input]: DeepCamelKeysToSnakeCase<Input[Index]> }
  : Input extends object
  ? {
      [Key in keyof Input as Key extends string ? CamelToSnakeCase<Key> : Key]: DeepCamelKeysToSnakeCase<
        Input[Key]
      >;
    }
  : Input;

/**
 * transforms keys of object at any level from camel case to snake case
 * @param input string | number | boolean | array | object
 * @returns
 *  - When input is string | number | boolean, it returns input.
 *  - When input is array, it returns the same array, but all keys of any object at any level inside array are transformed to snake case.
 *  - When input is object, it returns the same object, but all keys of any object at any level inside this object are transformed to snake case.
 */
export function deepCamelKeysToSnakeCase<Input extends {}>(input: Input): DeepCamelKeysToSnakeCase<Input>;
export function deepCamelKeysToSnakeCase<Input extends {}>(input: Input): any {
  if (typeof input === 'object' && Array.isArray(input)) {
    return input.map((item: any) => deepCamelKeysToSnakeCase(item));
  }

  if (typeof input === 'object') {
    return Object.keys(input).reduce((acc, key) => {
      const transformedKey = camelToSnakeCase(key);
      // @ts-ignore
      acc[transformedKey] = deepCamelKeysToSnakeCase(input[key]);
      return acc;
    }, {});
  }

  return input;
}

export type CamelKeysToSnakeCase<
  Obj extends Record<string, any>,
  ConvertNested extends boolean = true,
> = ConvertNested extends true
  ? DeepCamelKeysToSnakeCase<Obj>
  : {
      [Key in keyof Obj as Key extends string ? CamelToSnakeCase<Key & string> : Key]: Obj[Key];
    };

/**
 * transforms keys of object from camel case to snake case
 * @param obj object
 * @returns input object with transformed camel cased keys to snake cased keys
 */
export function camelKeysToSnakeCase<Obj extends Record<string, any>, ConvertNested extends boolean = true>(
  obj: Obj,
  convertNested?: ConvertNested
): CamelKeysToSnakeCase<Obj, ConvertNested>;
export function camelKeysToSnakeCase<Obj extends Record<string, any>>(
  obj: Obj,
  convertNested = true
): CamelKeysToSnakeCase<Obj> {
  if (convertNested) return deepCamelKeysToSnakeCase(obj);

  return Object.keys(obj).reduce((acc, key) => {
    const modifiedKey = camelToSnakeCase(key) as keyof CamelKeysToSnakeCase<Obj>;
    acc[modifiedKey] = obj[key];
    return acc;
  }, {} as CamelKeysToSnakeCase<Obj>);
}
