"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functor = void 0;
var tslib_1 = require("tslib");
var util_1 = require("../../util");
var Functor = (function () {
    function Functor(_value) {
        Object.defineProperty(this, "_value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _value
        });
        Object.defineProperty(this, 'fantasy-land/map', {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this['fantasy-land/map'] = this.map;
    }
    Object.defineProperty(Functor, "of", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            return new Functor(value);
        }
    });
    Object.defineProperty(Functor, "fromValueOf", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            return new Functor(JSON.parse(JSON.stringify(value.fork)));
        }
    });
    Object.defineProperty(Functor.prototype, "map", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            return new Functor(fn(this._value));
        }
    });
    Object.defineProperty(Functor.prototype, "fork", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Functor.prototype, "clone", {
        get: function () {
            return this.toValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Functor.prototype, "toString", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return JSON.stringify(this.fork);
        }
    });
    Object.defineProperty(Functor.prototype, "toValue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return JSON.parse(this.toString());
        }
    });
    tslib_1.__decorate([
        util_1.beNotWritable,
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Function]),
        tslib_1.__metadata("design:returntype", Functor)
    ], Functor.prototype, "map", null);
    tslib_1.__decorate([
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], Functor.prototype, "fork", null);
    tslib_1.__decorate([
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], Functor.prototype, "clone", null);
    tslib_1.__decorate([
        util_1.beNotWritable,
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", String)
    ], Functor.prototype, "toString", null);
    tslib_1.__decorate([
        util_1.beNotWritable,
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Object)
    ], Functor.prototype, "toValue", null);
    return Functor;
}());
exports.Functor = Functor;
void util_1.beConfigurable;
void util_1.beEnumerable;
void util_1.beNotConfigurable;
void util_1.beNotEnumerable;
void util_1.beNotWritable;
void util_1.beWritable;
void util_1.configurable;
void util_1.enumerable;
void util_1.writable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Z1bmN0b3IvZnVuY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBVW9CO0FBR3BCO0lBaUJFLGlCQUFnQyxNQUFZOzs7OzttQkFBWjs7UUFGaEMsNEJBQVEsa0JBQWtCOzs7OztXQUFFO1FBSTFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDdEMsQ0FBQzs7Ozs7ZUFuQkQsVUFBdUIsS0FBVztZQUNoQyxPQUFPLElBQUksT0FBTyxDQUFPLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7Ozs7OztlQUVELFVBQWdDLEtBQW9CO1lBQ2xELE9BQU8sSUFBSSxPQUFPLENBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQzs7Ozs7O2VBdUJELFVBQW9CLEVBQW9CO1lBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7O0lBSUQsc0JBQVcseUJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUlELHNCQUFXLDBCQUFLO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O2VBS0Q7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7Ozs7OztlQUtEO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7O0lBNUJEO1FBSEMsb0JBQWE7UUFDYixxQkFBYztRQUNkLG1CQUFZOzs7Z0RBQzhCLE9BQU87c0NBRWpEO0lBSUQ7UUFGQyxxQkFBYztRQUNkLG1CQUFZOzs7dUNBR1o7SUFJRDtRQUZDLHFCQUFjO1FBQ2QsbUJBQVk7Ozt3Q0FHWjtJQUtEO1FBSEMsb0JBQWE7UUFDYixxQkFBYztRQUNkLG1CQUFZOzs7OzJDQUdaO0lBS0Q7UUFIQyxvQkFBYTtRQUNiLHFCQUFjO1FBQ2QsbUJBQVk7Ozs7MENBR1o7SUFDSCxjQUFDO0NBQUEsQUEzREQsSUEyREM7QUFZUSwwQkFBTztBQVZoQixLQUFLLHFCQUFjLENBQUM7QUFDcEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssd0JBQWlCLENBQUM7QUFDdkIsS0FBSyxzQkFBZSxDQUFDO0FBQ3JCLEtBQUssb0JBQWEsQ0FBQztBQUNuQixLQUFLLGlCQUFVLENBQUM7QUFDaEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssaUJBQVUsQ0FBQztBQUNoQixLQUFLLGVBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGJlQ29uZmlndXJhYmxlLFxuICBiZUVudW1lcmFibGUsXG4gIGJlTm90Q29uZmlndXJhYmxlLFxuICBiZU5vdEVudW1lcmFibGUsXG4gIGJlTm90V3JpdGFibGUsXG4gIGJlV3JpdGFibGUsXG4gIGNvbmZpZ3VyYWJsZSxcbiAgZW51bWVyYWJsZSxcbiAgd3JpdGFibGUsXG59IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHR5cGUgeyBJRnVuY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5jbGFzcyBGdW5jdG9yPEZWYWwgPSBhbnk+IGltcGxlbWVudHMgSUZ1bmN0b3I8RlZhbD4ge1xuICBwdWJsaWMgc3RhdGljIG9mPFRWYWw+KHZhbHVlOiBUVmFsKTogRnVuY3RvcjxUVmFsPiB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdG9yPFRWYWw+KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVZhbHVlT2Y8VFZhbD4odmFsdWU6IEZ1bmN0b3I8VFZhbD4pOiBGdW5jdG9yPFRWYWw+IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0b3I8VFZhbD4oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZS5mb3JrKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGBmbmAgY2FuIHJldHVybiBhbnkgdmFsdWUuXG4gICAqIE5vIHBhcnRzIG9mIGBmbmAgcmV0dXJuIGBSYCB2YWx1ZSBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuXG4gICAqL1xuICBwdWJsaWMgWydmYW50YXN5LWxhbmQvbWFwJ107XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdmFsdWU6IEZWYWwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kXG4gICAgdGhpc1snZmFudGFzeS1sYW5kL21hcCddID0gdGhpcy5tYXA7XG4gIH1cblxuICAvKipcbiAgICogZmFudGFzeS1sYW5kL21hcCA6OiBGdW5jdG9yIGYgPT4gZiBhIH4+IChhIC0+IGIpIC0+IGYgYlxuICAgKiAvXG4gICAqIEBwYXJhbSBmblxuICAgKi9cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIG1hcDxSID0gYW55PihmbjogKHZhbDogRlZhbCkgPT4gUik6IEZ1bmN0b3I8Uj4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxSPihmbih0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIGdldCBmb3JrKCk6IEZWYWwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBnZXQgY2xvbmUoKTogRlZhbCB7XG4gICAgcmV0dXJuIHRoaXMudG9WYWx1ZSgpO1xuICB9XG5cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZm9yayk7XG4gIH1cblxuICBAYmVOb3RXcml0YWJsZVxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgdG9WYWx1ZSgpOiBGVmFsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRvU3RyaW5nKCkpO1xuICB9XG59XG5cbnZvaWQgYmVDb25maWd1cmFibGU7XG52b2lkIGJlRW51bWVyYWJsZTtcbnZvaWQgYmVOb3RDb25maWd1cmFibGU7XG52b2lkIGJlTm90RW51bWVyYWJsZTtcbnZvaWQgYmVOb3RXcml0YWJsZTtcbnZvaWQgYmVXcml0YWJsZTtcbnZvaWQgY29uZmlndXJhYmxlO1xudm9pZCBlbnVtZXJhYmxlO1xudm9pZCB3cml0YWJsZTtcblxuZXhwb3J0IHsgRnVuY3RvciB9O1xuIl19