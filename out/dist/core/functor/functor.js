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
    Object.defineProperty(Functor, "fromValueOf", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            return new Functor(JSON.parse(JSON.stringify(value.fork)));
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
    tslib_1.__decorate([
        util_1.beNotWritable,
        util_1.beConfigurable,
        util_1.beEnumerable,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Functor]),
        tslib_1.__metadata("design:returntype", Functor)
    ], Functor, "fromValueOf", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2Z1bmN0b3IvZnVuY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBVW9CO0FBR3BCO0lBYUUsaUJBQWdDLE1BQVk7Ozs7O21CQUFaOztRQUZoQyw0QkFBUSxrQkFBa0I7Ozs7O1dBQUU7UUFJMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDOzs7OztlQWZELFVBQXVCLEtBQVc7WUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7Ozs7ZUF1QkQsVUFBb0IsRUFBb0I7WUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7SUFJRCxzQkFBVyx5QkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBSUQsc0JBQVcsMEJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7Ozs7ZUFLRDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7Ozs7O2VBS0Q7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7Ozs7O2VBS0QsVUFBZ0MsS0FBb0I7WUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDOztJQW5DRDtRQUhDLG9CQUFhO1FBQ2IscUJBQWM7UUFDZCxtQkFBWTs7O2dEQUM4QixPQUFPO3NDQUVqRDtJQUlEO1FBRkMscUJBQWM7UUFDZCxtQkFBWTs7O3VDQUdaO0lBSUQ7UUFGQyxxQkFBYztRQUNkLG1CQUFZOzs7d0NBR1o7SUFLRDtRQUhDLG9CQUFhO1FBQ2IscUJBQWM7UUFDZCxtQkFBWTs7OzsyQ0FHWjtJQUtEO1FBSEMsb0JBQWE7UUFDYixxQkFBYztRQUNkLG1CQUFZOzs7OzBDQUdaO0lBS0Q7UUFIQyxvQkFBYTtRQUNiLHFCQUFjO1FBQ2QsbUJBQVk7O2lEQUMwQixPQUFPO2dEQUFTLE9BQU87b0NBRTdEO0lBQ0gsY0FBQztDQUFBLEFBOURELElBOERDO0FBOURZLDBCQUFPO0FBZ0VwQixLQUFLLHFCQUFjLENBQUM7QUFDcEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssd0JBQWlCLENBQUM7QUFDdkIsS0FBSyxzQkFBZSxDQUFDO0FBQ3JCLEtBQUssb0JBQWEsQ0FBQztBQUNuQixLQUFLLGlCQUFVLENBQUM7QUFDaEIsS0FBSyxtQkFBWSxDQUFDO0FBQ2xCLEtBQUssaUJBQVUsQ0FBQztBQUNoQixLQUFLLGVBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGJlQ29uZmlndXJhYmxlLFxuICBiZUVudW1lcmFibGUsXG4gIGJlTm90Q29uZmlndXJhYmxlLFxuICBiZU5vdEVudW1lcmFibGUsXG4gIGJlTm90V3JpdGFibGUsXG4gIGJlV3JpdGFibGUsXG4gIGNvbmZpZ3VyYWJsZSxcbiAgZW51bWVyYWJsZSxcbiAgd3JpdGFibGUsXG59IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHR5cGUgeyBJRnVuY3RvciB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRnVuY3RvcjxGVmFsID0gYW55PiBpbXBsZW1lbnRzIElGdW5jdG9yPEZWYWw+IHtcbiAgcHVibGljIHN0YXRpYyBvZjxUVmFsPih2YWx1ZTogVFZhbCk6IEZ1bmN0b3I8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxUVmFsPih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogYGZuYCBjYW4gcmV0dXJuIGFueSB2YWx1ZS5cbiAgICogTm8gcGFydHMgb2YgYGZuYCByZXR1cm4gYFJgIHZhbHVlIHNob3VsZCBiZSBjaGVja2VkLlxuICAgKlxuICAgKiBAcGFyYW0gZm5cbiAgICovXG4gIHB1YmxpYyBbJ2ZhbnRhc3ktbGFuZC9tYXAnXTtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIF92YWx1ZTogRlZhbCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2RcbiAgICB0aGlzWydmYW50YXN5LWxhbmQvbWFwJ10gPSB0aGlzLm1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBmYW50YXN5LWxhbmQvbWFwIDo6IEZ1bmN0b3IgZiA9PiBmIGEgfj4gKGEgLT4gYikgLT4gZiBiXG4gICAqXG4gICAqIEBwYXJhbSBmblxuICAgKi9cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIG1hcDxSID0gYW55PihmbjogKHZhbDogRlZhbCkgPT4gUik6IEZ1bmN0b3I8Uj4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxSPihmbih0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIGdldCBmb3JrKCk6IEZWYWwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBiZUNvbmZpZ3VyYWJsZVxuICBAYmVFbnVtZXJhYmxlXG4gIHB1YmxpYyBnZXQgY2xvbmUoKTogRlZhbCB7XG4gICAgcmV0dXJuIHRoaXMudG9WYWx1ZSgpO1xuICB9XG5cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZm9yayk7XG4gIH1cblxuICBAYmVOb3RXcml0YWJsZVxuICBAYmVDb25maWd1cmFibGVcbiAgQGJlRW51bWVyYWJsZVxuICBwdWJsaWMgdG9WYWx1ZSgpOiBGVmFsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgQGJlTm90V3JpdGFibGVcbiAgQGJlQ29uZmlndXJhYmxlXG4gIEBiZUVudW1lcmFibGVcbiAgcHVibGljIHN0YXRpYyBmcm9tVmFsdWVPZjxUVmFsPih2YWx1ZTogRnVuY3RvcjxUVmFsPik6IEZ1bmN0b3I8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgRnVuY3RvcjxUVmFsPihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlLmZvcmspKSk7XG4gIH1cbn1cblxudm9pZCBiZUNvbmZpZ3VyYWJsZTtcbnZvaWQgYmVFbnVtZXJhYmxlO1xudm9pZCBiZU5vdENvbmZpZ3VyYWJsZTtcbnZvaWQgYmVOb3RFbnVtZXJhYmxlO1xudm9pZCBiZU5vdFdyaXRhYmxlO1xudm9pZCBiZVdyaXRhYmxlO1xudm9pZCBjb25maWd1cmFibGU7XG52b2lkIGVudW1lcmFibGU7XG52b2lkIHdyaXRhYmxlO1xuIl19