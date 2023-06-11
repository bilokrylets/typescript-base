import { IGroup, IStudent } from "./interfaces/interfaces";
import { Employee } from "./types/types";

import { Teacher, Management, Cleaner, Other } from "./classes/employees";
import { University, Faculty, Group } from "./classes/uniStructure";
import { Student } from "./classes/student";

//type guards
function whoIs(person: IStudent | Employee): void {
  if ("role" in person) {
    console.log("this is employee");
  } else {
    console.log("this is student");
  }
}

///////////////////////////////////////////////////////////////////////////////////

const teacher1 = new Teacher("teacher_1_name", 25, "M.S. (Master of Science)");
const teacher2 = new Teacher("teacher_2_name", 25, "B.S. (Bachelor of Science)");

//DegreeToAgeValidation decorator will throw error
// const teacher3 = new Teacher("teacher_2_name", 14, "B.S. (Bachelor of Science)");

const rector = new Management("management_1_name", 45, "rector");
const cleaner1 = new Cleaner("cleaner_1_name", 38);
const security = new Other("security_1_name", 41, "security");
const doctor = new Other("doctor_1_name", 51, "doctor");

const university1 = new University<IGroup>("Chernihiv Polytechnic National University");
const faculty1 = new Faculty("Information technologies");
const faculty2 = new Faculty("Law faculty");
const group1 = new Group("123:computer science", 4, 2, "bachelor");
const group2 = new Group("121:computer engineering", 1, 2, "master");

const student1 = new Student("student_1_name", 20, "budget");
const student2 = new Student("student_2_name", 19, "contract");

// console.log(faculty1.groups); // getdecorator IsEmpty clg: RESULT IS EMPTY:
// console.log(university1.employees);
// console.log(university1.faculties);
// console.log(university1);

///////////////////////////////////////////////////////////////////////////////////

teacher1.addSubject("Biology");
teacher1.addSubject("Computer Science");
teacher1.addSubject("Mathematics");
teacher1.deleteSubject("Biology");
teacher1.addToSalary(500);
teacher1.updateSalary();

// teacher1.addToSalary(-5000); //setdecorator CheckSalary clg: SALARY HAS NOT CHANGED: Salary must be greater than 4000.
// console.log(teacher1);
// console.log("-----------------------------------------------");

///////////////////////////////////////////////////////////////////////////////////

university1.addEmployee(
  teacher1.name,
  teacher2.name,
  rector.name,
  cleaner1.name,
  security.name,
  doctor.name
);
university1.removeEmployee(doctor.name);

university1.addFaculty(faculty1);
university1.addFaculty(faculty2);
university1.removeFaculty(faculty2);

// console.log("University employees: " + university1.employees.join(", "));
// console.log("University faculties: " + university1.faculties.join(", "));

///////////////////////////////////////////////////////////////////////////////////

faculty1.addGroup(group1);
faculty1.addGroup(group2);
faculty1.removeGroup(group2);

group1.addStudent(student1);
group1.addStudent(student2);

// console.log(faculty1.groups);
// console.log("-----------------------------------------------");
// console.log(group1);

///////////////////////////////////////////////////////////////////////////////////

teacher1.setMark(student1, "Computer Science", 80);
teacher1.setMark(student1, "Mathematics", 60);
// student1.changeBudget();

// teacher1.setMark(student1, "Medicine", 30); //teacher does not teach, will not be added + clg

// console.log(student1);

///////////////////////////////////////////////////////////////////////////////////

whoIs(student1);
whoIs(doctor);
