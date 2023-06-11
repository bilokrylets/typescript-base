import { IGroup, IStudent } from "../interfaces/interfaces";
import { Role } from "../enums/enums";
import { Employee, TSubjects } from "../types/types";
import { IsEmpty } from "../decorators/IsEmpty";

export class University<T extends IGroup> {
  private _employees: Array<string> = [];
  private _faculties: Array<string> = [];

  constructor(public name: string) {}

  @IsEmpty
  get employees(): Array<string> {
    return this._employees;
  }

  addEmployee(...employee: string[]): void {
    this._employees.splice(0, 0, ...employee);
  }

  removeEmployee(employee: string): void {
    this._employees = this._employees.filter((item) => item != employee);
  }

  @IsEmpty
  get faculties(): Array<string> {
    return this._faculties;
  }

  addFaculty(faculty: any): void {
    this._faculties.push(faculty.name);
  }

  removeFaculty(faculty: any): void {
    this._faculties = this._faculties.filter((item) => item != faculty.name);
  }
}

export class Faculty {
  private _groups: IGroup[] = [];
  constructor(public name: string) {}

  @IsEmpty
  get groups(): IGroup[] {
    return this._groups;
  }

  addGroup(group: IGroup): void {
    this._groups.push(group);
  }

  removeGroup(group: IGroup): void {
    const id = group.id;
    this._groups = this._groups.filter((item) => item.id != id);
  }
}

export class Group implements IGroup {
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
    student.group = this.name;
  }

  removeStudent(student: IStudent): void {
    const id = student.id;
    this.students = this.students.filter((item) => item.id != id);
    student.group = "No group";
  }
}
