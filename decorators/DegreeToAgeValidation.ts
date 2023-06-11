import { Tdegrees } from "../types/types";
//property decorator
export function DegreeToAgeValidation(target: any, propertyKey: string) {
  let value: Tdegrees;
  const getter = function () {
    return value;
  };
  const setter = function (this: any, newDegree: Tdegrees) {
    const age = this.age;
    if (
      (newDegree === "Ph.D. (Doctor of Philosophy)" && age >= 28) ||
      (newDegree === "Ed.D. (Doctor of Education)" && age >= 28) ||
      (newDegree === "M.S. (Master of Science)" && age >= 23) ||
      (newDegree === "M.Ed. (Master of Education)" && age >= 23) ||
      (newDegree === "B.S. (Bachelor of Science)" && age >= 21) ||
      (newDegree === "B.Ed. (Bachelor of Education)" && age >= 21)
    ) {
      value = newDegree;
    } else {
      throw new Error(`The degree ${newDegree} does not match the age ${age}`);
    }
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
}
