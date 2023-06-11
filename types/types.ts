import { Person } from "../interfaces/interfaces";
import { Role } from "../enums/enums";

export type Employee = Person & { role: Role; salary: number };

// Custom Types
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

type degrees =
  | "Ph.D. (Doctor of Philosophy)"
  | "Ed.D. (Doctor of Education)"
  | "M.S. (Master of Science)"
  | "M.A. (Master of Art)"
  | "M.Ed. (Master of Education)"
  | "B.S. (Bachelor of Science)"
  | "B.Ed. (Bachelor of Education)"
  | "B.A. (Master of Art)";

// Utility Types
export type Tdegrees = Exclude<degrees, "B.A. (Master of Art)" | "M.A. (Master of Art)">;
