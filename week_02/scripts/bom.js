const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const form = document.querySelector("form");

function addItem(event) {
    event.preventDefault();

    if (input.value.trim() !== '') {
        let itemaValue = input.value;
        input.value = '';

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = itemaValue;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute("aria-label", `Remove ${itemaValue}`);
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

    }
        input.focus();
          
}
button.addEventListener('click', addItem);



