export interface Person {
  name: string;
  age: number;
}
export interface IStudent extends Person {
  group: string;
  budget: string;
  id: number;
  marks: { [index: string]: number };
}

export interface IGroup {
  id: number;
  name: string;
  course: number;
  semester: number;
  degree: "bachelor" | "master";
}
