import { IGroup, IStudent } from "../interfaces/interfaces";

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

  marksUpdate(): number | void {
    let medium: number;
    const length = Object.keys(this.marks).length;
    if (length == 0) {
      console.log("student has no marks");
    } else {
      medium = Object.values(this.marks).reduce((a, b) => a + b, 0) / length;
      if (medium >= 80) {
        this.budget = "budget";
      } else {
        this.budget = "contract";
      }

      console.log(`Now the student is studying on a ${this.budget}`);
      return medium;
    }
  }
}
