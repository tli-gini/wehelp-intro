function mouseOver(qBtn) {
  qBtn.style.backgroundColor = "#4f5346";
  qBtn.style.color = "#f8f5f5";
}
function mouseOut(qBtn) {
  qBtn.style.backgroundColor = "#f8f5f5";
  qBtn.style.color = "#9c775b";
}

// 兩百字內的個人簡介。
function showAns1() {
  let answerElement1 = document.querySelector("#a1");
  let questionTitle1 = document.querySelector("#q-t1");
  let questionElement1 = document.querySelector("#q1");

  if (answerElement1 && questionTitle1 && questionElement1) {
    answerElement1.style.display = "block";
    questionTitle1.style.display = "block";
    questionElement1.style.display = "none";
  }
}
function closeAns1() {
  let answerElement1 = document.querySelector("#a1");
  let questionTitle1 = document.querySelector("#q-t1");
  let questionElement1 = document.querySelector("#q1");
  if (answerElement1 && questionTitle1 && questionElement1) {
    answerElement1.style.display = "none";
    questionTitle1.style.display = "none";
    questionElement1.style.display = "block";
    console.log("close");
  }
}

// 為了成為軟體工程師，做過什麼努力？若有具體作品請分享給我們。
function showAns2() {
  let answerElement2 = document.querySelector("#a2");
  let questionTitle2 = document.querySelector("#q-t2");
  let questionElement2 = document.querySelector("#q2");

  if (answerElement2 && questionTitle2 && questionElement2) {
    answerElement2.style.display = "block";
    questionTitle2.style.display = "block";
    questionElement2.style.display = "none";
  }
}
function closeAns2() {
  let answerElement2 = document.querySelector("#a2");
  let questionTitle2 = document.querySelector("#q-t2");
  let questionElement2 = document.querySelector("#q2");
  if (answerElement2 && questionTitle2 && questionElement2) {
    answerElement2.style.display = "none";
    questionTitle2.style.display = "none";
    questionElement2.style.display = "block";
    console.log("close");
  }
}

// 如果參與這個訓練，會怎麼安排學習時間？
function showAns3() {
  let answerElement3 = document.querySelector("#a3");
  let questionTitle3 = document.querySelector("#q-t3");
  let questionElement3 = document.querySelector("#q3");

  if (answerElement3 && questionTitle3 && questionElement3) {
    answerElement3.style.display = "block";
    questionTitle3.style.display = "block";
    questionElement3.style.display = "none";
  }
}
function closeAns3() {
  let answerElement3 = document.querySelector("#a3");
  let questionTitle3 = document.querySelector("#q-t3");
  let questionElement3 = document.querySelector("#q3");
  if (answerElement3 && questionTitle3 && questionElement3) {
    answerElement3.style.display = "none";
    questionTitle3.style.display = "none";
    questionElement3.style.display = "block";
    console.log("close");
  }
}

// 是否有想要加入的公司？為什麼想加入該公司？
function showAns4() {
  let answerElement4 = document.querySelector("#a4");
  let questionTitle4 = document.querySelector("#q-t4");
  let questionElement4 = document.querySelector("#q4");

  if (answerElement4 && questionTitle4 && questionElement4) {
    answerElement4.style.display = "block";
    questionTitle4.style.display = "block";
    questionElement4.style.display = "none";
  }
}
function closeAns4() {
  let answerElement4 = document.querySelector("#a4");
  let questionTitle4 = document.querySelector("#q-t4");
  let questionElement4 = document.querySelector("#q4");
  if (answerElement4 && questionTitle4 && questionElement4) {
    answerElement4.style.display = "none";
    questionTitle4.style.display = "none";
    questionElement4.style.display = "block";
    console.log("close");
  }
}

// 請描述一件產生明顯負面情緒的經歷，如何處理該情緒？
function showAns5() {
  let answerElement5 = document.querySelector("#a5");
  let questionTitle5 = document.querySelector("#q-t5");
  let questionElement5 = document.querySelector("#q5");

  if (answerElement5 && questionTitle5 && questionElement5) {
    answerElement5.style.display = "block";
    questionTitle5.style.display = "block";
    questionElement5.style.display = "none";
  }
}
function closeAns5() {
  let answerElement5 = document.querySelector("#a5");
  let questionTitle5 = document.querySelector("#q-t5");
  let questionElement5 = document.querySelector("#q5");
  if (answerElement5 && questionTitle5 && questionElement5) {
    answerElement5.style.display = "none";
    questionTitle5.style.display = "none";
    questionElement5.style.display = "block";
    console.log("close");
  }
}

// 關於這份申請網頁，分享一個開發時的技術心得。
function showAns6() {
  let answerElement6 = document.querySelector("#a6");
  let questionTitle6 = document.querySelector("#q-t6");
  let questionElement6 = document.querySelector("#q6");

  if (answerElement6 && questionTitle6 && questionElement6) {
    answerElement6.style.display = "block";
    questionTitle6.style.display = "block";
    questionElement6.style.display = "none";
  }
}
function closeAns6() {
  let answerElement6 = document.querySelector("#a6");
  let questionTitle6 = document.querySelector("#q-t6");
  let questionElement6 = document.querySelector("#q6");
  if (answerElement6 && questionTitle6 && questionElement6) {
    answerElement6.style.display = "none";
    questionTitle6.style.display = "none";
    questionElement6.style.display = "block";
    console.log("close");
  }
}

// 請用簡短兩三句話，描述對你而言，最重要的一項人際交往原則。
function showAns7() {
  let answerElement7 = document.querySelector("#a7");
  let questionTitle7 = document.querySelector("#q-t7");
  let questionElement7 = document.querySelector("#q7");

  if (answerElement7 && questionTitle7 && questionElement7) {
    answerElement7.style.display = "block";
    questionTitle7.style.display = "block";
    questionElement7.style.display = "none";
  }
}
function closeAns7() {
  let answerElement7 = document.querySelector("#a7");
  let questionTitle7 = document.querySelector("#q-t7");
  let questionElement7 = document.querySelector("#q7");
  if (answerElement7 && questionTitle7 && questionElement7) {
    answerElement7.style.display = "none";
    questionTitle7.style.display = "none";
    questionElement7.style.display = "block";
    console.log("close");
  }
}

// 其他想要對我們說的事情？
function showAns8() {
  let answerElement8 = document.querySelector("#a8");
  let questionTitle8 = document.querySelector("#q-t8");
  let questionElement8 = document.querySelector("#q8");

  if (answerElement8 && questionTitle8 && questionElement8) {
    answerElement8.style.display = "block";
    questionTitle8.style.display = "block";
    questionElement8.style.display = "none";
  }
}
function closeAns8() {
  let answerElement8 = document.querySelector("#a8");
  let questionTitle8 = document.querySelector("#q-t8");
  let questionElement8 = document.querySelector("#q8");
  if (answerElement8 && questionTitle8 && questionElement8) {
    answerElement8.style.display = "none";
    questionTitle8.style.display = "none";
    questionElement8.style.display = "block";
    console.log("close");
  }
}
