console.log("hello!");
window.onload = function() {
  // your code

  var side = document.querySelector(".side");
  var hidden = document.querySelectorAll(".hidden");
  var shown = document.querySelector(".shown");

  side.onmouseover = function() {
    for (var i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "flex";
      hidden[i].style.border = "1px solid black";
      console.log(hidden.length);
    }
  };

  hidden.onmouseout = function() {
    for (var i = 0; i < hidden.length; i++) hidden[i].style.display = "none";
  };
};
