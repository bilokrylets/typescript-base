//class decorator
export function TeacherDetails(target: any) {
  const originalConstructor = target;

  const newConstructor: any = function (...args: any[]) {
    console.log(`Creating teacher with:\nname: ${args[0]}, age: ${args[1]}, degree:${args[2]}\n`);
    return new originalConstructor(...args);
  };

  newConstructor.prototype = originalConstructor.prototype;
  return newConstructor;
}
