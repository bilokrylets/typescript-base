import { IStudent } from "../interfaces/interfaces";

export class Student implements IStudent {
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
