import { Person, Course } from "./person.js";

const aPerson = new Person("Bob");
const filename = "courses.json";

// const basicCourseNames = readBasicCourseNames(filename);
// aPerson.courses = basicCourseNames.map(name => new Course(name, false));

for (const name of readBasicCourseNames(filename)) {
  aPerson.courses.push(new Course(name, false));
}

const numAdvancedCourses = aPerson.courses
  .filter(c => c.isAdvanced)
  .length;
console.log(numAdvancedCourses);

function readBasicCourseNames(filename) {
  return ["foo", "bar", "baz"];
}
