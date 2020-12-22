// !! NOTICE !!
// https://gist.github.com/basarat/61860d3b035ead022af3dff67df91a8b
// https://www.youtube.com/watch?v=JNmqxEcJjr4
// https://creativecommons.org/licenses/by/4.0/
//† Used with permission & under license:
type License = '«If it’s from me use freely 🌹❤️»' & 'CC BY 4.0';
//+ © 2020 Basarat Ali 🌹

type Class = new (...args: any[]) => any;

function DisposableMixin<Base extends Class>(base: Base) {
  return class extends base {
    isDisposed: boolean = false;
    dispose() {
      this.isDisposed = true;
    }
  };
}

function ActivatableMixin<Base extends Class>(base: Base) {
  return class extends base {
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
export type { Class, License as MixinLicense };
