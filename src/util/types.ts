// ――――――――

type UnboxArray<Ts> = Ts extends Array<infer T> ? T : never;

// usages
type Unbox<Ts> = UnboxArray<Ts>; // T
type Strings = string[];
const something: Strings = [];
type FromArray = UnboxArray<typeof something>; // string

// ――――――――

interface MapableConstructor extends Function {
  new (_value: any): IMapable;
}

interface IMapable {
  ['fantasy-land/map']: any;
}

export type { FromArray, IMapable, MapableConstructor, Unbox };
