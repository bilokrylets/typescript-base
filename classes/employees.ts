import { IGroup, IStudent } from "../interfaces/interfaces";
import { Role } from "../enums/enums";
import { Employee, TSubjects } from "../types/types";

abstract class EmployeeBase implements Employee {
  private _salary: number;

  constructor(public name: string, public age: number, public role: Role) {
    this._salary = 5000;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  abstract addToSalary(bonus: number): void;
}

export class Teacher extends EmployeeBase {
  degree: string;
  public subjects: Array<TSubjects>;
  constructor(name: string, age: number, degree: string) {
    super(name, age, Role.Teacher);
    this.degree = degree;
    this.subjects = [];
  }

  addSubject(subject: TSubjects): void {
    if (this.subjects.indexOf(subject) + 1) {
      console.log(`${this.name} already teaches ${subject}`);
    } else {
      this.subjects.push(subject);
    }
  }

  deleteSubject(subject: TSubjects): void {
    if (this.subjects.indexOf(subject) + 1) {
      this.subjects = this.subjects.filter((item) => item != subject);
    } else {
      console.log(`${this.name} does not teach ${subject}`);
    }
  }

  setMark(student: IStudent, subject: TSubjects, mark: number): void {
    if (this.subjects.indexOf(subject) + 1) {
      student.marks[subject] = mark;
    } else {
      console.log(`${this.name} does not teach ${subject}`);
    }
  }
  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }

  updateSalary(): void {
    this.salary += 0.2 * this.subjects.length * this.salary;
  }
}

export class Management extends EmployeeBase {
  position: string;
  constructor(name: string, age: number, position: string) {
    super(name, age, Role.Teacher);
    this.position = position;
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}

export class Cleaner extends EmployeeBase {
  constructor(name: string, age: number) {
    super(name, age, Role.Teacher);
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}

export class Other extends EmployeeBase {
  position: string;
  constructor(name: string, age: number, position: string) {
    super(name, age, Role.Teacher);
    this.position = position;
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}
