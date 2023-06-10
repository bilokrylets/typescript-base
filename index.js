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
var Role;
(function (Role) {
    Role["Teacher"] = "TEACHER";
    Role["Management"] = "MANAGEMENT";
    Role["Other"] = "OTHER";
})(Role || (Role = {}));
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase(name, age, position, role) {
        this.name = name;
        this.age = age;
        this.position = position;
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
    function Teacher(name, age, position, degree) {
        var _this = _super.call(this, name, age, position, Role.Teacher) || this;
        _this.degree = degree;
        return _this;
    }
    Teacher.prototype.calculateSalary = function () {
        return 2000;
    };
    return Teacher;
}(EmployeeBase));
var teacher1 = new Teacher("John", 30, "аспирант", "К.т.н");
console.log(teacher1.calculateSalary);
// class Cleaner extends EmployeeBase {
//   position: string;
//   constructor(name: string, age: number, position: string) {
//     super(name, age, Role.Cleaner);
//     this.position = position;
//   }
//   calculateSalary(): number {
//     return 2000;
//   }
// }
