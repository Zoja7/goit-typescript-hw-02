/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek { 
  Monday= "working day",
  Tuesday= "working day",
  Wednesday= "working day",
  Thursday= "working day",
  Friday="working day",
  Saturday="day off",
  Sunday="day off",
}

function isWeekend(days: DayOfWeek): boolean | undefined {
    
  for (let day in  DayOfWeek ) { 
    if (DayOfWeek[DayOfWeek[day]] === "working day") {
       console.log("This is a working day!");
      return true;
    }
    else if (DayOfWeek[DayOfWeek[day]] !== "working day") {
      console.log("This is a vacation!");
       return false;
     }
  
  }

}