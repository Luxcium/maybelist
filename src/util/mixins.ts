// !! NOTICE !!
// https://gist.github.com/basarat/61860d3b035ead022af3dff67df91a8b
// https://www.youtube.com/watch?v=JNmqxEcJjr4
// https://creativecommons.org/licenses/by/4.0/ (🌹INTERIM_LICENSE🌹)
//+ © 2020 Basarat Ali * Used without authorization from the author(s) this part
//+ of the code may be removed in future releases it will be your responsibility
//+ to make sure this part of code is still usable under
//+ the interim license CC BY 4.0 in the future... I will remove this comment
//+ after I get the copyright holder(s) the permission to use the
//+ code under CC BY 4.0 or under MIT...

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
export type { Class };
