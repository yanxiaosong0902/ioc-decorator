/**
 * @file 装饰器 decorator
 */

// 函数作为装饰器
function classDecorator(...args: any) {
  console.log(...args)
}

@classDecorator
class ServiceClass {
}

console.log(new ServiceClass())