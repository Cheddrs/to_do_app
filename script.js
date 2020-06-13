window.onload = function (e) {
  document.getElementById("todo-entry").focus();
  Clock.showDate();
  setInterval(Clock.showDate, 1000);
};

document
  .getElementById("add-item-button")
  .addEventListener("click", function (e) {
    addItem(document.getElementById("todo-entry").value);
  });

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem(document.getElementById("todo-entry").value);
  }
});

document
  .getElementById("mark-all-complete")
  .addEventListener("click", function (e) {
    let fullList = document.getElementById("todo-list");
    if (fullList.style.textDecoration !== "line-through") {
      fullList.style.textDecoration = "line-through";
    } else {
      fullList.style.textDecoration = "none";
    }
  });

document
  .getElementById("remove-all-button")
  .addEventListener("click", function (e) {
    let allItems = document.getElementById("todo-list");
    while (allItems.hasChildNodes()) {
      allItems.removeChild(allItems.firstChild);
    }
    document.getElementById("todo-entry").value = "";

    document.getElementById("todo-entry").focus();
  });

/* TODO: Add the localStorage functionality. */
function addItem(todoItemText) {
  if (todoItemText === "") {
    return alert("Please enter a to-do item.");
  }
  let liElement = document.createElement("li");
  liElement.setAttribute("id", "new-item");

  let liTextNode = document.createTextNode(todoItemText);
  liElement.appendChild(liTextNode);
  document.getElementById("todo-list").appendChild(liElement);

  let completeImage = document.createElement("img");
  completeImage.setAttribute("src", "media/checkmark.svg");
  completeImage.setAttribute("id", "create-img-complete");
  completeImage.addEventListener("click", function (e) {
    if (e.target.parentNode.style.textDecoration !== "line-through") {
      e.target.parentNode.style.textDecoration = "line-through";
    } else {
      e.target.parentNode.style.textDecoration = "none";
    }
  });
  liElement.appendChild(completeImage);

  let deleteImage = document.createElement("img");
  deleteImage.setAttribute("src", "media/delete.svg");
  deleteImage.setAttribute("id", "create-img-delete");
  deleteImage.addEventListener("click", function (e) {
    let todoItems = document.getElementById("todo-list");
    let removeLi = e.target.parentElement;
    todoItems.removeChild(removeLi);
  });
  liElement.appendChild(deleteImage);

  document.getElementById("todo-entry").value = "";

  document.getElementById("todo-entry").focus();
}
