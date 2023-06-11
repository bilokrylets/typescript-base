//get decorator
export function IsEmpty(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.get;

  descriptor.get = function () {
    const result = originalMethod?.call(this);
    if (!result || result.length === 0) {
      console.log("RESULT IS EMPTY:");
      return "there is no one here \n";
    } else {
      return result;
    }
  };
}
