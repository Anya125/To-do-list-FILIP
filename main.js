//Function to add a new element to the list
const btn = document.getElementById("btn-add");
const input = document.getElementById("input-text");
const listConatiner = document.getElementById("listConatiner");

btn.addEventListener("click", adding);

function adding() {
  listConatiner.innerHTML +=
    `<div class="row ">
        <button class="blue-btn btn-list">Finish</button>
        <p class="p-padding"> ` +
    input.value +
    `</p>
    </div>`;
  input.value = "";
}

// Function to complete a task in the TO DO LIST

const listBtns = document.getElementsByClassName("btn-list");
let i;
for (i = 0; i < listBtns.length; i++) {
  listBtns[i].addEventListener("click", completingTask);
}

function completingTask(event) {
  event.target.parentElement.classList.toggle("completed");
}
