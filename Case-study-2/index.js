const toggle = document.getElementsByClassName("toggle");
const btn = document.getElementById("switch");
const list = [];

console.log(list);
btn.onclick = function () {
  console.log(btn.checked);
  if (btn.checked === true) {
    for (let i = 0; i < toggle.length; i++) {
      console.log(toggle.item(i));
      toggle.item(i).style.display = "table-cell";
    }
  } else {
    for (let i = 0; i < toggle.length; i++) {
      console.log(toggle.item(i));
      toggle.item(i).style.display = "none";
    }
  }
};
