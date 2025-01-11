/*
Create a function (isWeekend) that takes a day of the week (from your enum)
and returns a boolean value indicating whether it is a weekday or a weekend.
*/

// 1.7
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

// Usage example:
console.log(isWeekend(WeekDays.Monday)); // false
console.log(isWeekend(WeekDays.Saturday)); // true
