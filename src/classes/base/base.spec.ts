import { BaseClass } from '.';

export default null;
describe('BaseClass<T = unknown> is:', () => {
  describe('abstract class BaseClass<T = unknown> extends Object implements AbstractBase<T>', () => {
    describe('abstract class mustbe extended: will extend in TestBaseClass<T = unknown>', () => {
      class TestBaseClass<T = unknown> extends BaseClass<T> {
        static of<TVal>(value: TVal): TestBaseClass<TVal> {
          return new TestBaseClass(value);
        }
        constructor(value: T) {
          super(value);
        }
      }

      describe('Will instantiate testBaseClass = TestBaseClass.of(VALUE) with const VALUE = 151 ', () => {
        const VALUE = 151;
        const testBaseClass = TestBaseClass.of(VALUE);
        describe('Inatance of TestBaseClass must have a fork methode', () => {
          it('(typeof testBaseClass.fork must be ofthe same type as typeof VALUE  ', () => {
            expect(typeof testBaseClass.fork === 'number').toBe(
              typeof VALUE === 'number',
            );
            // expect(testBaseClass.fork).toBe(151);
            // expect(typeof testBaseClass.fork === 'number').toBe(true);
            // console.warn(testBaseClass.fork);
          });
        });

        it.todo('should '); // , () => {});
        it.todo('should '); // , () => {});
        it.todo('should '); // , () => {});
      });
    });
  });
});
