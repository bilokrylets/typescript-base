import { Person } from "../interfaces/interfaces";
import { Role } from "../enums/enums";

export type Employee = Person & { role: Role; salary: number };

export type TSubjects =
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
