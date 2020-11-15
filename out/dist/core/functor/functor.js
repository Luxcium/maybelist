"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functor = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../../util");
class Functor {
    constructor(_value) {
        this._value = _value;
        this['fantasy-land/map'] = this.map;
    }
    static of(value) {
        return new Functor(value);
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
}
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
tslib_1.__decorate([
    util_1.beNotWritable,
    util_1.beConfigurable,
    util_1.beEnumerable,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Functor]),
    tslib_1.__metadata("design:returntype", Functor)
], Functor, "fromValueOf", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Z1bmN0b3IvZnVuY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBVW9CO0FBR3BCLE1BQWEsT0FBTztJQWNsQixZQUFnQyxNQUFZO1FBQVosV0FBTSxHQUFOLE1BQU0sQ0FBTTtRQUUxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFmSyxNQUFNLENBQUMsRUFBRSxDQUFPLEtBQVc7UUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBTyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBdUJNLEdBQUcsQ0FBVSxFQUFvQjtRQUN0QyxPQUFPLElBQUksT0FBTyxDQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBS00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUtNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUtNLE1BQU0sQ0FBQyxXQUFXLENBQU8sS0FBb0I7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBR0Y7QUF0Q0M7SUFIQyxvQkFBYTtJQUNiLHFCQUFjO0lBQ2QsbUJBQVk7Ozs0Q0FDOEIsT0FBTztrQ0FFakQ7QUFJRDtJQUZDLHFCQUFjO0lBQ2QsbUJBQVk7OzttQ0FHWjtBQUlEO0lBRkMscUJBQWM7SUFDZCxtQkFBWTs7O29DQUdaO0FBS0Q7SUFIQyxvQkFBYTtJQUNiLHFCQUFjO0lBQ2QsbUJBQVk7Ozs7dUNBR1o7QUFLRDtJQUhDLG9CQUFhO0lBQ2IscUJBQWM7SUFDZCxtQkFBWTs7OztzQ0FHWjtBQUtEO0lBSEMsb0JBQWE7SUFDYixxQkFBYztJQUNkLG1CQUFZOzs2Q0FDMEIsT0FBTzs0Q0FBUyxPQUFPO2dDQUU3RDtBQTlESCwwQkFpRUM7QUFFRCxLQUFLLHFCQUFjLENBQUM7QUFDcEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssd0JBQWlCLENBQUM7QUFDdkIsS0FBSyxzQkFBZSxDQUFDO0FBQ3JCLEtBQUssb0JBQWEsQ0FBQztBQUNuQixLQUFLLGlCQUFVLENBQUM7QUFDaEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssaUJBQVUsQ0FBQztBQUNoQixLQUFLLGVBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGJlQ29uZmlndXJhYmxlLFxuICBiZUVudW1lcmFibGUsXG4gIGJlTm90Q29uZmlndXJhYmxlLFxuICBiZU5vdEVudW1lcmFibGUsXG4gIGJlTm90V3JpdGFibGUsXG4gIGJlV3JpdGFibGUsXG4gIGNvbmZpZ3VyYWJsZSxcbiAgZW51bWVyYWJsZSxcbiAgd3JpdGFibGVcbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgdHlwZSB7IElGdW5jdG9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBGdW5jdG9yPEZWYWwgPSBhbnk+IGltcGxlbWVudHMgSUZ1bmN0b3I8RlZhbD4ge1xuXG4gcHVibGljIHN0YXRpYyBvZjxUVmFsPih2YWx1ZTogVFZhbCk6IEZ1bmN0b3I8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxUVmFsPih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogYGZuYCBjYW4gcmV0dXJuIGFueSB2YWx1ZS5cbiAgICogTm8gcGFydHMgb2YgYGZuYCByZXR1cm4gYFJgIHZhbHVlIHNob3VsZCBiZSBjaGVja2VkLlxuICAgKlxuICAgKiBAcGFyYW0gZm5cbiAgICovXG4gIHB1YmxpYyBbJ2ZhbnRhc3ktbGFuZC9tYXAnXTtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIF92YWx1ZTogRlZhbCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2RcbiAgICB0aGlzWydmYW50YXN5LWxhbmQvbWFwJ10gPSB0aGlzLm1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBmYW50YXN5LWxhbmQvbWFwIDo6IEZ1bmN0b3IgZiA9PiBmIGEgfj4gKGEgLT4gYikgLT4gZiBiXG4gICAqXG4gICAqIEBwYXJhbSBmblxuICAgKi9cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIG1hcDxSID0gYW55PihmbjogKHZhbDogRlZhbCkgPT4gUik6IEZ1bmN0b3I8Uj4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxSPihmbih0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIGdldCBmb3JrKCk6IEZWYWwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBnZXQgY2xvbmUoKTogRlZhbCB7XG4gICAgcmV0dXJuIHRoaXMudG9WYWx1ZSgpO1xuICB9XG5cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZm9yayk7XG4gIH1cblxuICBAYmVOb3RXcml0YWJsZVxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgdG9WYWx1ZSgpOiBGVmFsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHN0YXRpYyBmcm9tVmFsdWVPZjxUVmFsPih2YWx1ZTogRnVuY3RvcjxUVmFsPik6IEZ1bmN0b3I8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxUVmFsPihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlLmZvcmspKSk7XG4gIH1cblxuXG59XG5cbnZvaWQgYmVDb25maWd1cmFibGU7XG52b2lkIGJlRW51bWVyYWJsZTtcbnZvaWQgYmVOb3RDb25maWd1cmFibGU7XG52b2lkIGJlTm90RW51bWVyYWJsZTtcbnZvaWQgYmVOb3RXcml0YWJsZTtcbnZvaWQgYmVXcml0YWJsZTtcbnZvaWQgY29uZmlndXJhYmxlO1xudm9pZCBlbnVtZXJhYmxlO1xudm9pZCB3cml0YWJsZTtcbiJdfQ==