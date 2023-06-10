import { Person, IGroup, IStudent } from "./interfaces/interfaces";
import { Role } from "./enums/enums";

type Employee = Person & { role: Role; salary: number };

type TSubjects =
  | "Computer Science"
  | "Business Administration"
  | "Medicine"
  | "Engineering"
  | "Psychology"
  | "Biology"
  | "Economics"
  | "Political Science"
  | "English Literature"
  | "Mathematics";

abstract class EmployeeBase {
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

class Teacher extends EmployeeBase {
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
    let updated: number = this.salary * (1.2 * this.subjects.length);
    this.salary = updated;
  }
}

const teacher1 = new Teacher("преподаватель 1", 22, "к.т.н.");
teacher1.addSubject("Biology");
teacher1.addSubject("Business Administration");
console.log(teacher1);
teacher1.deleteSubject("Biology");
console.log(teacher1);

console.log(teacher1.salary);
teacher1.updateSalary();
console.log(teacher1.salary);
teacher1.addToSalary(666);
console.log(teacher1.salary + "/////////////////////");

class Management extends EmployeeBase {
  position: string;
  constructor(name: string, age: number, position: string) {
    super(name, age, Role.Teacher);
    this.position = position;
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}

// let rector = new Management("bdr", 22, "rector");
// rector.addToSalary(1200);
// console.log(rector.salary);

class Cleaner extends EmployeeBase {
  constructor(name: string, age: number) {
    super(name, age, Role.Teacher);
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}

class Other extends EmployeeBase {
  position: string;
  constructor(name: string, age: number, position: string) {
    super(name, age, Role.Teacher);
    this.position = position;
  }

  addToSalary(bonus: number): void {
    this.salary = this.salary + bonus;
  }
}

class University {
  private _employees: Array<string> = [];
  private _faculties: Array<string> = [];

  constructor(public name: string) {}

  get employees(): Array<string> {
    return this._employees;
  }

  addEmployee(...employee: string[]): void {
    this._employees.splice(0, 0, ...employee);
  }

  removeEmployee(employee: string): void {
    this._employees = this._employees.filter((item) => item != employee);
  }

  get faculties(): Array<string> {
    return this._faculties;
  }

  addFaculty(faculty: string): void {
    this._faculties.push(faculty);
  }

  removeFaculty(faculty: string): void {
    this._faculties = this._faculties.filter((item) => item != faculty);
  }
}

class Faculty {
  private _groups: IGroup[] = [];
  constructor(public name: string) {}

  addGroup(group: IGroup): void {
    this._groups.push(group);
    console.log("group added");
  }

  get groups(): IGroup[] {
    return this._groups;
  }

  removeGroup(group: IGroup): void {
    const id = group.id;
    this._groups = this._groups.filter((item) => item.id != id);
  }
}

class Group implements IGroup {
  private static idGenerator: number = 1;
  public students: IStudent[];
  public id: number;

  constructor(
    public name: string,
    public course: 1 | 2 | 3 | 4,
    public semester: 1 | 2,
    public degree: "bachelor" | "master"
  ) {
    this.students = [];
    this.id = Group.idGenerator++;
  }

  addStudent(student: IStudent): void {
    this.students.push(student);
    console.log("student added");
    student.group = this.name;
  }

  removeStudent(student: IStudent): void {
    const id = student.id;
    this.students = this.students.filter((item) => item.id != id);
    student.group = "No group";
  }
}

class Student implements IStudent {
  private static idGenerator: number = 1;
  public marks: { [index: string]: number };
  public id: number;
  public group: string;

  constructor(public name: string, public age: number, public budget: "budget" | "contract") {
    this.group = "No group";
    this.marks = {};
    this.id = Student.idGenerator++;
  }
}

// const university1 = new University("CHTU");
// console.log(university1);
// const teacher1 = new Teacher("преподаватель 1", 22, "к.т.н.");
// const teacher2 = new Teacher("преподаватель 2", 22, "к.т.н.");
// university1.addEmployee(teacher1.name, teacher2.name);
// university1.removeEmployee(teacher1.name);
// console.log(university1.employees);
// const group1 = new Group("12", 1, 2, "bachelor");
// const group2 = new Group("1", 1, 2, "bachelor");

// const faculty1 = new Faculty("ИИН");
// faculty1.addGroup(group1);
// faculty1.addGroup(group2);
// console.log(faculty1.groups);

// const student1 = new Student("первый", 22, "budget");
// const student2 = new Student("второй", 22, "budget");

// group1.addStudent(student1);
// group1.addStudent(student2);
// console.log(group1);

// group1.removeStudent(student1);
// console.log(group1);

// console.log(student1);

// teacher1.setMark(student1, "Biology", 60);
// teacher1.setMark(student1, "Computer Science", 60);

// console.log(student1);
