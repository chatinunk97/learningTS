const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(5, 10));

function sum(a: number, b: number): number {
  return a + b;
}

//Void
const logger = (message: string): void => {
  console.log(message);
};

//Never => the function will not reach the end of it (error thrown before)
// But it's quite a edge case we can use Void instead
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

//ES2015 destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
