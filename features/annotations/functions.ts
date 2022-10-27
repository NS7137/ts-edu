// 参数列表之后 添加函数要返回的类型
const add = (a: number, b: number): number => a + b;

// 一般函数返回类型不加注解 自行推断 除非需要明确函数返回类型
const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void 可以返回 null 也可以返回 undefined
const logger = (message: string): void => console.log(message);

// never 永远不会达到函数的终点，会提前退出函数而不返回任何值
// 一般不会使用
const throwError1 = (message: string): never => {
  throw new Error(message);
};
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error('no message');
  }
  return message;
};
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error('no message');
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// 参数是对象时， 可以使用解构， 方便函数内部使用
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
