export function generateClasses<T extends string>(componentName: string, classes: T[]) {
  return classes.reduce(
    (acc, cls) => {
      acc[cls] = `Artworks${componentName}-${cls}`;
      return acc;
    },
    {} as Record<T, string>
  );
}
