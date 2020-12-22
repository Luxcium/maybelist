import {
  Clonable,
  Clone,
  Constructor,
  Fork,
  Forkable,
  ToString,
  Value,
  ValueOf,
  WithValue,
} from './typesmixin';

function WithValueBaseConstructorMixin<T>(Base: Constructor) {
  return class ShortBaseClass extends Base implements Value<T> {
    public _value!: T;

    // constructor |-···―――――――――――――――――――――――――――――――――――···-| Base() |-···――― ~
    constructor(value: T) {
      super();
      this._value = value;
      void this._value;
    }
  };
}

function ForkableMixin<T, TBase extends WithValue<T>>(Base: TBase) {
  return class extends Base implements Fork<T> {
    // get |-···―――――――――――――――――――――――――――――――――――――――――――――···-| fork |-···――― ~
    public get fork(): T {
      return this._value;
    }
  };
}

function ClonableMixin<T, TBase extends Forkable<T>>(Base: TBase) {
  return class extends Base implements Clone<T> {
    // get |-···――――――――――――――――――――――――――――――――――――――――――――···-| clone |-···――― ~
    public get clone(): T {
      return JSON.parse(JSON.stringify(this.fork)) as T;
    }
  };
}

function ValuableMixin<T, TBase extends Clonable<T>>(Base: TBase) {
  return class extends Base implements ValueOf<T> {
    // public |-···―――――――――――――――――――――――――――――――――――――···-| toValue() |-···――― ~
    public valueOf(): T {
      return this.clone;
    }
  };
}

function StringifyableMixin<T, TBase extends Forkable<T>>(Base: TBase) {
  return class extends Base implements ToString {
    // public |-···――――――――――――――――――――――――――――――――――――···-| toString() |-···――― ~
    public toString(): string {
      return JSON.stringify(this.fork);
    }
  };
}

const StartBaseClass = WithValueBaseConstructorMixin(class {});
const ForkableClass = ForkableMixin(StartBaseClass);
const ClonableClass = ClonableMixin(ForkableClass);
const ValuableClass = ValuableMixin(ClonableClass);
const BaseClass = StringifyableMixin(ValuableClass);

export {
  BaseClass,
  ClonableClass,
  ClonableMixin,
  ForkableClass,
  ForkableMixin,
  StartBaseClass,
  ValuableClass,
  WithValueBaseConstructorMixin,
};

// 🌹 ✨
