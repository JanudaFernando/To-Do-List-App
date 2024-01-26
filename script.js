const inputBox = document.getElementById("input-box");
const inputDate = document.getElementById("input-date");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '' || inputDate.value === '') {
        alert("You must write something and select a date!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} (${inputDate.value})`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    inputDate.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
