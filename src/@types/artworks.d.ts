/**
 * Distributes the Omit across a union.
 * @see [this question](https://stackoverflow.com/questions/57103834/typescript-omit-a-property-from-all-interfaces-in-a-union-but-keep-the-union-s) on stack-overflow.
 */
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
