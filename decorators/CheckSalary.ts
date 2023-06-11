//set decorator
export function CheckSalary(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalSetter = descriptor.set;

  descriptor.set = function (value: number) {
    if (value > 4000) {
      return originalSetter?.call(this, value);
    } else {
      console.log("SALARY HAS NOT CHANGED: Salary must be greater than 4000.");
    }
  };
}
