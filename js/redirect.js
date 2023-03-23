const d = new Date();
let day = d.getDay()

let refresh = false;


if (day === 2) {
  location.href = "indexcountdown.html";
} else {
  location.href = "index.html";
}

