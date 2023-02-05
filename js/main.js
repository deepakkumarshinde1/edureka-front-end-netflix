window.addEventListener("load", onLoad);

function onLoad() {
  var changeIcon = document.querySelectorAll(".change-icon");

  changeIcon.forEach(function (element) {
    element.addEventListener("click", function () {
      let iElement = this.children[1];
      iElement.classList.toggle("rotate");
    });
  });

  async function div(varOne, varTwo) {
    if (varTwo !== 0) {
      var result = varOne / varTwo;
      return Promise.resolve(result);
    } else {
      return Promise.reject("Can't divide by Zero");
    }
  } // function defined

  div(10, 0)
    .then(function (result) {
      console.log(result); // print data on html page
    })
    .catch(function (error) {
      alert("error: " + error);
    });

  // making a promise => true => fulfilled => resolve => o/p of promise .then(function(){})
  // making a promise => false => not-fulfilled => rejected => o/p of promise .catch(function(){})
}
