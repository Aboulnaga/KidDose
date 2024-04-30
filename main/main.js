// let names = "1Spam 25pam Spam1 Ahmed spam1 Asmpo Spa";
// let re = /(\bspam|spam\b)/gi;

// console.log(re.test("spam bspam spamp"));
// console.log(re.test("spam bspam spamp"));
// console.log(re.test("spam bspam spamp"));
// console.log(re.test("spam bspam spamp"));

// const todos = [
//   {
//     id: 1,
//     todo: study,
//   },
//   {
//     id: 2,
//     todo: work,
//   },
//   {
//     id: 3,
//     todo: eat,
//   },
// ];

// todos.map(todo => {
//   // const tasks = document.getElementsByClassName(".tasks")[0];
//   // انا ببصراحه افضل دي
//   const tasks = document.querySelector(".tasks");
//   const newTodoDiv = document.createElement("div");
//   newTodoDiv.innerHTML = todo.todo;
//   tasks.appendChild(newTodoDiv);
// });

const tst = () => {
  const tstForm = document.forms[0];
  const weightDiv = document.getElementsByClassName("weight")[0];
  console.log(weightDiv);
  const fd = new FormData(tstForm);
  const med = fd.get("medicines");
  const wt = fd.get("weight");
  console.log(med, wt);
};

import { DB } from "./DB.js";
const medList = document.querySelector("#medicines");
const medInput = document.querySelector("input");
const form = document.querySelector("#form");
const errorMsgDiv = document.querySelector(".error-msg");
const resulContainertDiv = document.querySelector(".result-container ");

let errorMsg = [];

// event listener
form.addEventListener("submit", getFromData);

// functions
const renderDBinDataList = () => {
  const allMedicines = DB.map(med => {
    return ` <option value="${med.medicine}">${med.medicine}</option> `;
  });
  medList.innerHTML = allMedicines.join("");
};
renderDBinDataList();

function getFromData(event) {
  tst();
  event.preventDefault();
  errorMsg = [];
  errorMsgDiv.innerHTML = "";
  errorMsgDiv.style.display = "none";
  const formData = new FormData(form);
  const selectedMed = formData.get("medicines");
  const weight = formData.get("weight");
  if (!selectedMed) {
    errorMsg = [...errorMsg, { err: "- You have to choose a medicine" }];
  } else if (DB.findIndex(med => med.medicine === selectedMed) === -1) {
    errorMsg = [
      ...errorMsg,
      { err: "- This medication is not available in the database." },
    ];
  }

  if (!weight) {
    errorMsg = [...errorMsg, { err: "- You have to enter weight" }];
  } else if (weight < 0) {
    errorMsg = [...errorMsg, { err: "- Weight cannot be negative" }];
  } else if (weight % 1 !== 0) {
    errorMsg = [...errorMsg, { err: "- Weight must be a valid number" }];
  } else if (weight == 0) {
    errorMsg = [...errorMsg, { err: "- Weight cannot be zero" }];
  }

  console.log(errorMsg);

  if (errorMsg.length > 0) {
    doShowErrorMsg(errorMsg);
    resulContainertDiv.style.display = "none";
    return (errorMsgDiv.style.display = "flex");
  }
  form.reset();
  doCalculate(selectedMed, weight);
}

const doShowErrorMsg = errorMsg => {
  errorMsg.map(err => {
    errorMsgDiv.innerHTML += `<p>${err.err}</p>`;
  });
};

const doCalculate = (selectedMed, weight) => {
  console.log(errorMsg);
  const selectedMedicine = DB.find(med => med.medicine === selectedMed);
  const { id, medicine, dosageFun } = selectedMedicine;
  const dosage = dosageFun(parseInt(weight));
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `
  <h4>Dosage</h4>
  <p> The dosage of <strong> <u>${medicine}</u></strong> for a child weighing <strong><u>${weight} kg</u></strong>  is <strong><u>${dosage} mg</u></strong></p>
  <p class="close-dosage">X</p>
  `;
  resulContainertDiv.style.display = "block";
  const closeDosage = document.querySelector(".close-dosage");

  closeDosage.addEventListener("click", () => {
    resulContainertDiv.style.display = "none";
  });
};
