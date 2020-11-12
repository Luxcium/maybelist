export function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = value;
    void target;
    void propertyKey;
  };
}

export const beNotEnumerable = enumerable(false);
export const beEnumerable = enumerable(true);

export function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.configurable = value;
    void target;
    void propertyKey;
  };
}

export const beNotConfigurable = configurable(false);
export const beConfigurable = configurable(true);

export function writable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.writable = value;
    void target;
    void propertyKey;
  };
}

export const beNotWritable = writable(false);
export const beWritable = writable(true);
