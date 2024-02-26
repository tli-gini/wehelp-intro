function mouseOver(qBtn) {
  qBtn.style.backgroundColor = "#4f5346";
  qBtn.style.color = "#f8f5f5";
}
function mouseOut(qBtn) {
  qBtn.style.backgroundColor = "#f8f5f5";
  qBtn.style.color = "#9c775b";
}

// answer
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let a4 = document.querySelector("#a4");
let a5 = document.querySelector("#a5");
let a6 = document.querySelector("#a6");
let a7 = document.querySelector("#a7");
let a8 = document.querySelector("#a8");

// ques-title
let qt1 = document.querySelector("#q-t1");
let qt2 = document.querySelector("#q-t2");
let qt3 = document.querySelector("#q-t3");
let qt4 = document.querySelector("#q-t4");
let qt5 = document.querySelector("#q-t5");
let qt6 = document.querySelector("#q-t6");
let qt7 = document.querySelector("#q-t7");
let qt8 = document.querySelector("#q-t8");

// question
let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");
let q4 = document.querySelector("#q4");
let q5 = document.querySelector("#q5");
let q6 = document.querySelector("#q6");
let q7 = document.querySelector("#q7");
let q8 = document.querySelector("#q8");

let ans = 0;

function showAns(x, y) {
  if (ans == 0) {
    x.forEach((element) => {
      element.style.display = "block";
    });
    y.forEach((element) => {
      element.style.display = "none";
    });
    ans = 1;
  }
}
function closeAns(x, y) {
  if (ans == 1) {
    x.forEach((element) => {
      element.style.display = "block";
    });
    y.forEach((element) => {
      element.style.display = "none";
    });
    ans = 0;
  }
}
