let button = ".mobile-spoiler__heading";
let labels = ".categories-list__item";
let labelsList = ".mobile-spoiler__categories-list";
let labelsListActive = "checklist-active";
let labelActive = "categories-list__item__active";
let animationClass = "categories-list__item__animated";
let inputCheckbox = ".checkbox";

function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
  let btn = document.querySelector(a);
  let labels = document.querySelectorAll(b);
  let listLabels = document.querySelector(c);
btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })
function toggleSpoiler() {
    if (!listLabels.classList.contains(labelsListActive)) {
    listLabels.classList.add(labelsListActive);
    labels.forEach(item => {
     // item.classList.add("checkbox--label-active");
      animationItem(item, labelActive, animationClass, "add");
    })
  } else {
    listLabels.classList.remove(labelsListActive);
    labels.forEach(item => {
    	if (item.querySelector(inputCheckbox).checked) {
    	animationItem(item, labelActive, animationClass, "add");
      } else {
        animationItem(item, labelActive, animationClass, "remove");
      }
      });
  }
  labels.forEach(item => {
    item.addEventListener("click", function() {
      if (!listLabels.classList.contains(labelsListActive)) {
        animationItem(this, labelActive, animationClass, "remove");
      }
    });
  })
}
function animationItem(item, class1, class2, f) {
 if (f === "add") {
    item.classList.add(class1);
  setTimeout(function() {
    item.classList.add(class2)
  }, 100);

 } else {
     item.classList.remove(class2);
  setTimeout(function() {
    item.classList.remove(class1)
  }, 300);
  }

}


}



checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);
