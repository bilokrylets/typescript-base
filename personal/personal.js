var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this._salary = 0;
    }
    Object.defineProperty(EmployeeBase.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeBase;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, degree) {
        var _this = _super.call(this, name, age, Role.Teacher) || this;
        _this.degree = degree;
        return _this;
    }
    Teacher.prototype.baseSalary = function () {
        return 9000;
    };
    return Teacher;
}(EmployeeBase));
var Management = /** @class */ (function (_super) {
    __extends(Management, _super);
    function Management(name, age, position) {
        var _this = _super.call(this, name, age, Role.Teacher) || this;
        _this.position = position;
        return _this;
    }
    Management.prototype.baseSalary = function () {
        return 8000;
    };
    return Management;
}(EmployeeBase));
var Cleaner = /** @class */ (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner(name, age) {
        return _super.call(this, name, age, Role.Teacher) || this;
    }
    Cleaner.prototype.baseSalary = function () {
        return 9000;
    };
    return Cleaner;
}(EmployeeBase));
var Other = /** @class */ (function (_super) {
    __extends(Other, _super);
    function Other(name, age, position) {
        var _this = _super.call(this, name, age, Role.Teacher) || this;
        _this.baseSalary = function () {
            return (_this.salary = 8000);
        };
        _this.position = position;
        return _this;
    }
    return Other;
}(EmployeeBase));
var doc = new Other("re", 21, "re");
console.log(doc.name);
console.log(doc.salary);
