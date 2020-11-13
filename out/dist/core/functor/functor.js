"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functor = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../../util");
class Functor {
    constructor(_value) {
        this._value = _value;
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
    tslib_1.__metadata("design:returntype", Object)
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
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], Functor, "fromValueOf", null);
tslib_1.__decorate([
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof TVal !== "undefined" && TVal) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Object)
], Functor, "of", null);
exports.Functor = Functor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Z1bmN0b3IvZnVuY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUEwRDtBQUcxRCxNQUFhLE9BQU87SUFHbEIsWUFBNkIsTUFBWTtRQUFaLFdBQU0sR0FBTixNQUFNLENBQU07SUFBRyxDQUFDO0lBU3RDLEdBQUcsQ0FBVSxFQUFvQjtRQUN0QyxPQUFPLElBQUksT0FBTyxDQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBSU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUlNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUlNLE1BQU0sQ0FBQyxXQUFXLENBQU8sS0FBcUI7UUFDbkQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSU0sTUFBTSxDQUFDLEVBQUUsQ0FBTyxLQUFXO1FBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQU8sS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBdkNDO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7OztrQ0FHWjtBQUlEO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7O21DQUdaO0FBSUQ7SUFGQyxxQkFBYztJQUNkLG1CQUFZOzs7b0NBR1o7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7Ozs7dUNBR1o7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7Ozs7c0NBR1o7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7Ozs7Z0NBR1o7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7O2lFQUNpQixJQUFJLG9CQUFKLElBQUk7O3VCQUVqQztBQWxESCwwQkFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiZUNvbmZpZ3VyYWJsZSwgYmVFbnVtZXJhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgdHlwZSB7IElGdW5jdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBGdW5jdG9yPEZWYWwgPSB1bmtub3duPiBpbXBsZW1lbnRzIElGdW5jdG9yPEZWYWw+IHtcbiAgLy8gcHVibGljIF92YWx1ZTogRlZhbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIF92YWx1ZTogRlZhbCkge31cblxuICAvKipcbiAgICogZmFudGFzeS1sYW5kL21hcCA6OiBGdW5jdG9yIGYgPT4gZiBhIH4+IChhIC0+IGIpIC0+IGYgYlxuICAgKlxuICAgKiBAcGFyYW0gZm5cbiAgICovXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBtYXA8UiA9IGFueT4oZm46ICh2YWw6IEZWYWwpID0+IFIpOiBJRnVuY3RvcjxSPiB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdG9yPFI+KGZuKHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgZ2V0IGZvcmsoKTogRlZhbCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIGdldCBjbG9uZSgpOiBGVmFsIHtcbiAgICByZXR1cm4gdGhpcy50b1ZhbHVlKCk7XG4gIH1cblxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JrKTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyB0b1ZhbHVlKCk6IEZWYWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgc3RhdGljIGZyb21WYWx1ZU9mPFRWYWw+KHZhbHVlOiBJRnVuY3RvcjxUVmFsPik6IElGdW5jdG9yPFRWYWw+IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0b3I8VFZhbD4oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZS5mb3JrKSkpO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHN0YXRpYyBvZjxUVmFsPih2YWx1ZTogVFZhbCk6IElGdW5jdG9yPFRWYWw+IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0b3I8VFZhbD4odmFsdWUpO1xuICB9XG59XG4iXX0=