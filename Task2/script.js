const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    let itemText = items[i].textContent || items[i].innerText;
    itemText = itemText.toLowerCase();

    if (itemText.includes(filter)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
});
