let grade = 43;

switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70:
    console.log("B");
    break;
  case grade >= 60:
    console.log("C");
    break;
  case grade >= 50:
    console.log("D");
    break;
  case grade >= 0:
    console.log("F");
    break;
}

let month = "October";

switch (true) {
  case month == "September" || month == "October" || month == "November":
    console.log("Autumn");
    break;
  case month == "December" || month == "January" || month == "Febuary":
    console.log("Winter");
    break;
  case month == "March" || month == "April" || month == "May":
    console.log("Spring");
    break;
  case month == "June" || month == "July" || month == "August":
    console.log("Summer");
    break;
}

let day = "Sunday";
let convertDay = day.toLowerCase();

convertDay == "saturday" || convertDay == "sunday"
  ? console.log(
      `${convertDay[0].toUpperCase() + convertDay.slice(1)} is a weekend.`
    )
  : console.log(
      `${convertDay[0].toUpperCase() + convertDay.slice(1)} is a working day.`
    );
