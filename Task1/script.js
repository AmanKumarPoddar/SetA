var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("bg-gray-300");
    var content = this.nextElementSibling;
    content.classList.toggle("hidden");
  });
}
