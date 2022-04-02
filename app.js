let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulLength = document.getElementsByTagName("li")

//silmek için çarpı butonu oluşturma
for (let i = 0; i < ulLength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ulLength[i].append(closeButton);
    ulLength[i].onclick = check;
}
// butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', addElement)

//fonksiyonlar

function check() {
    this.classList.toggle("checked");
}
function removeButton() {
    this.parentElement.remove();
}
// eleman eklemek için gerekenler
function addElement() {
    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");       
        let liDOM = document.createElement("li")
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";
        // sonradan eklenenlerin silinmesi
        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
    }
}