"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functor = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../../util");
class Functor {
    constructor(_value) {
        this._value = _value;
        this['fantasy-land/map'] = this.map;
    }
    map(fn) {
        return new Functor(fn(this._value));
    }
    get fork() {
        return this._value;
    }
    get clone() {
        return this.toValue();
    }
    toString() {
        return JSON.stringify(this.fork);
    }
    toValue() {
        return JSON.parse(this.toString());
    }
    static fromValueOf(value) {
        return new Functor(JSON.parse(JSON.stringify(value.fork)));
    }
    static of(value) {
        return new Functor(value);
    }
}
tslib_1.__decorate([
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
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], Functor.prototype, "toString", null);
tslib_1.__decorate([
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], Functor.prototype, "toValue", null);
tslib_1.__decorate([
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Functor]),
    tslib_1.__metadata("design:returntype", Functor)
], Functor, "fromValueOf", null);
tslib_1.__decorate([
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof TVal !== "undefined" && TVal) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Functor)
], Functor, "of", null);
exports.Functor = Functor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Z1bmN0b3IvZnVuY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUEwRDtBQUcxRCxNQUFhLE9BQU87SUFTbEIsWUFBZ0MsTUFBWTtRQUFaLFdBQU0sR0FBTixNQUFNLENBQU07UUFFMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBU00sR0FBRyxDQUFVLEVBQW9CO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBSU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBSU0sTUFBTSxDQUFDLFdBQVcsQ0FBTyxLQUFvQjtRQUNsRCxPQUFPLElBQUksT0FBTyxDQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFJTSxNQUFNLENBQUMsRUFBRSxDQUFPLEtBQVc7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUF2Q0M7SUFGQyxxQkFBYztJQUNkLG1CQUFZOzs7NENBQzhCLE9BQU87a0NBRWpEO0FBSUQ7SUFGQyxxQkFBYztJQUNkLG1CQUFZOzs7bUNBR1o7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7OztvQ0FHWjtBQUlEO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7Ozt1Q0FHWjtBQUlEO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7OztzQ0FHWjtBQUlEO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7NkNBQzBCLE9BQU87NENBQVMsT0FBTztnQ0FFN0Q7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7O2lFQUNpQixJQUFJLG9CQUFKLElBQUk7NENBQUcsT0FBTzt1QkFFM0M7QUEzREgsMEJBNERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmVDb25maWd1cmFibGUsIGJlRW51bWVyYWJsZSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHR5cGUgeyBJRnVuY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRnVuY3RvcjxGVmFsID0gYW55PiBpbXBsZW1lbnRzIElGdW5jdG9yPEZWYWw+IHtcbiAgLyoqXG4gICAqIGBmbmAgY2FuIHJldHVybiBhbnkgdmFsdWUuXG4gICAqIE5vIHBhcnRzIG9mIGBmbmAgcmV0dXJuIGBSYCB2YWx1ZSBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICpcbiAgICogQHBhcmFtIGZuXG4gICAqL1xuICBwdWJsaWMgWydmYW50YXN5LWxhbmQvbWFwJ107XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdmFsdWU6IEZWYWwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kXG4gICAgdGhpc1snZmFudGFzeS1sYW5kL21hcCddID0gdGhpcy5tYXA7XG4gIH1cblxuICAvKipcbiAgICogZmFudGFzeS1sYW5kL21hcCA6OiBGdW5jdG9yIGYgPT4gZiBhIH4+IChhIC0+IGIpIC0+IGYgYlxuICAgKlxuICAgKiBAcGFyYW0gZm5cbiAgICovXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBtYXA8UiA9IGFueT4oZm46ICh2YWw6IEZWYWwpID0+IFIpOiBGdW5jdG9yPFI+IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0b3I8Uj4oZm4odGhpcy5fdmFsdWUpKTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBnZXQgZm9yaygpOiBGVmFsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgZ2V0IGNsb25lKCk6IEZWYWwge1xuICAgIHJldHVybiB0aGlzLnRvVmFsdWUoKTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmZvcmspO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHRvVmFsdWUoKTogRlZhbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy50b1N0cmluZygpKTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVZhbHVlT2Y8VFZhbD4odmFsdWU6IEZ1bmN0b3I8VFZhbD4pOiBGdW5jdG9yPFRWYWw+IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0b3I8VFZhbD4oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZS5mb3JrKSkpO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHN0YXRpYyBvZjxUVmFsPih2YWx1ZTogVFZhbCk6IEZ1bmN0b3I8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxUVmFsPih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==