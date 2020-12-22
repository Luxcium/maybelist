// !! NOTICE !!
// https://www.youtube.com/watch?v=JNmqxEcJjr4
// https://creativecommons.org/licenses/by/4.0/
//+ Original unmodified code:
// https://gist.github.com/basarat/61860d3b035ead022af3dff67df91a8b
//† Used with permission & under license:
type License = ('«If it’s from me use freely 🌹❤️»' & 'CC BY 4.0') | never;
//+ © 2020 Basarat Ali 🌹

type Class = new (...args: any[]) => any;
// type ClassWithType<T> = new (arg: T, ...args: any[]) => any;

function DisposableMixin<Base extends Class>(BaseClass: Base) {
  return class extends BaseClass {
    isDisposed: boolean = false;
    dispose() {
      this.isDisposed = true;
    }
  };
}

function ActivatableMixin<Base extends Class>(BaseClass: Base) {
  return class extends BaseClass {
    isActive: boolean = false;
    activate() {
      this.isActive = true;
    }
    deactivate() {
      this.isActive = false;
    }
  };
}

class Example extends DisposableMixin(ActivatableMixin(class {})) {
  member = 123;
  constructor() {
    super();
  }
}
const example: Example = new Example();
void example;

export { ActivatableMixin, DisposableMixin };
export type { Class, /* ClassWithType, */ License as MixinLicense };
