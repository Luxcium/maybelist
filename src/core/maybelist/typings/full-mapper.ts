type FMapper<T, R> = (val: T, index: number, array: T[]) => R;
type FullFMapperThen<T, R> = (val: T, index: number, array: T[]) => Promise<R>;

export type { FMapper, FullFMapperThen };
