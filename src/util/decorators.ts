function enumerable(value: boolean) {
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

const beNotEnumerable = enumerable(false);
const beEnumerable = enumerable(true);

function configurable(value: boolean) {
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

const beNotConfigurable = configurable(false);
const beConfigurable = configurable(true);

function writable(value: boolean) {
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

const beNotWritable = writable(false);
const beWritable = writable(true);

export {
  beConfigurable,
  beEnumerable,
  beNotConfigurable,
  beNotEnumerable,
  beNotWritable,
  beWritable,
  configurable,
  enumerable,
  writable,
};
