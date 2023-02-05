var divForm = document.getElementById("div-form");
var input1 = document.getElementById("input-1");
var input2 = document.getElementById("input-2");
var resultSpan = document.getElementById("result");

divForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // restrict to manual submit

  try {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);
    let result = await div(value1, value2); // promise call
    resultSpan.innerHTML = result; // print data on html page
    resultSpan.style.color = "green";
  } catch (error) {
    resultSpan.innerHTML = error;
    resultSpan.style.color = "red";
  }
});
async function div(varOne, varTwo) {
  if (varTwo !== 0) {
    var result = varOne / varTwo;
    return Promise.resolve(result);
  } else {
    return Promise.reject("Can't divide by Zero");
  }
} // function defined

// making a promise => true => fulfilled => resolve => o/p of promise .then(function(){})
// making a promise => false => not-fulfilled => rejected => o/p of promise .catch(function(){})
// div(value1, value2)
//   .then(function (result) {
//     resultSpan.innerHTML = result; // print data on html page
//     resultSpan.style.color = "green";
//   })
//   .catch(function (error) {
//     resultSpan.innerHTML = error;
//     resultSpan.style.color = "red";
//   });
