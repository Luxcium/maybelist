"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monad = void 0;
var tslib_1 = require("tslib");
var __1 = require("..");
var Monad = (function (_super) {
    tslib_1.__extends(Monad, _super);
    function Monad(value) {
        return _super.call(this, value) || this;
    }
    Object.defineProperty(Monad, "of", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            return new Monad(value);
        }
    });
    Object.defineProperty(Monad, "fromValueOf", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (value) {
            return new Monad(JSON.parse(JSON.stringify(value.fork)));
        }
    });
    Object.defineProperty(Monad.prototype, "ap", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (c) {
            var _this = this;
            return c.map(function (fn) { return _this.map(function (x) { return fn(x); }); })
                .fork;
        }
    });
    Object.defineProperty(Monad.prototype, "chain", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            return Monad.of(this.map(function (x) { return fn(x); }).fork).fork;
        }
    });
    Object.defineProperty(Monad.prototype, "map", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (fn) {
            return Monad.of(_super.prototype.map.call(this, function (x) { return fn(x); }).fork);
        }
    });
    return Monad;
}(__1.Functor));
exports.Monad = Monad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9tb25hZC9tb25hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsd0JBQTZCO0FBRzdCO0lBQWlDLGlDQUFhO0lBUzVDLGVBQW1CLEtBQVc7ZUFDNUIsa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7ZUFWRCxVQUF1QixLQUFXO1lBQ2hDLE9BQU8sSUFBSSxLQUFLLENBQU8sS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7Ozs7O2VBRUQsVUFBZ0MsS0FBb0I7WUFDbEQsT0FBTyxJQUFJLEtBQUssQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDOzs7Ozs7ZUFNRCxVQUFhLENBQXlCO1lBQXRDLGlCQUdDO1lBRkMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFXLFVBQUMsRUFBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUksVUFBQyxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUwsQ0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUM7aUJBQ3hFLElBQUksQ0FBQztRQUNWLENBQUM7Ozs7OztlQUVELFVBQWdCLEVBQTBCO1lBQ3hDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FDYixJQUFJLENBQUMsR0FBRyxDQUFXLFVBQUMsQ0FBQyxJQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLElBQUksQ0FDdEMsQ0FBQyxJQUFJLENBQUM7UUFDVCxDQUFDOzs7Ozs7ZUFFRCxVQUFjLEVBQW9CO1lBQ2hDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FDYixpQkFBTSxHQUFHLFlBQUksVUFBQyxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUwsQ0FBSyxDQUFDLENBQUMsSUFBSSxDQUNoQyxDQUFDO1FBQ0osQ0FBQzs7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUFpQyxXQUFPLEdBNkJ2QztBQTdCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICcuLic7XG5pbXBvcnQgdHlwZSB7IEZuQXRvQiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIE1vbmFkPE1WYWw+IGV4dGVuZHMgRnVuY3RvcjxNVmFsPiB7XG4gIHB1YmxpYyBzdGF0aWMgb2Y8VFZhbD4odmFsdWU6IFRWYWwpOiBNb25hZDxUVmFsPiB7XG4gICAgcmV0dXJuIG5ldyBNb25hZDxUVmFsPih2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZyb21WYWx1ZU9mPFRWYWw+KHZhbHVlOiBGdW5jdG9yPFRWYWw+KTogTW9uYWQ8VFZhbD4ge1xuICAgIHJldHVybiBuZXcgTW9uYWQ8VFZhbD4oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZS5mb3JrKSkpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBNVmFsKSB7XG4gICAgc3VwZXIodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGFwPFI+KGM6IE1vbmFkPEZuQXRvQjxNVmFsLCBSPj4pOiBNb25hZDxSPiB7XG4gICAgcmV0dXJuIGMubWFwPE1vbmFkPFI+PigoZm46ICh2YWw6IE1WYWwpID0+IFIpID0+IHRoaXMubWFwPFI+KCh4KSA9PiBmbih4KSkpXG4gICAgICAuZm9yaztcbiAgfVxuXG4gIHB1YmxpYyBjaGFpbjxSPihmbjogRm5BdG9CPE1WYWwsIE1vbmFkPFI+Pik6IE1vbmFkPFI+IHtcbiAgICByZXR1cm4gTW9uYWQub2Y8TW9uYWQ8Uj4+KFxuICAgICAgdGhpcy5tYXA8TW9uYWQ8Uj4+KCh4KSA9PiBmbih4KSkuZm9yayxcbiAgICApLmZvcms7XG4gIH1cblxuICBwdWJsaWMgbWFwPFI+KGZuOiAodmFsOiBNVmFsKSA9PiBSKTogTW9uYWQ8Uj4ge1xuICAgIHJldHVybiBNb25hZC5vZihcbiAgICAgIHN1cGVyLm1hcDxSPigoeCkgPT4gZm4oeCkpLmZvcmssXG4gICAgKTtcbiAgfVxufVxuIl19