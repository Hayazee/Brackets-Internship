// using setinterval() method for this
const TimeDisplayVariable = setInterval(DigitalClockFunction, 1500);

// function
function DigitalClockFunction() {
  const Time = new Date(); // getting date
  const DateToday = new Date(); // getting date also :/
  const GetTime = Time.toLocaleTimeString(); // current time
  const GetDate = DateToday.toDateString(); // current date

  // printing to console
  console.log("Time is " + GetTime);
  console.log("Date is " + GetDate);

  // displaying to document
  document.querySelector("#DisplayTime").innerHTML = GetTime;
  document.querySelector("#DisplayDate").innerHTML = GetDate;
}
