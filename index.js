
let myLinks = [];

const inputText = document.querySelector('#input-text-id');
const saveBtn = document.getElementById("input-btn");
const unorderedListId = document.querySelector("#ul-id");
const deleteBtn = document.querySelector("#delete-btn");

const storedData = JSON.parse(localStorage.getItem("myLinks"));
if (storedData) {
    myLinks = storedData;
    render(myLinks);
}

function render(array) {
    let listItems = "";
    for (let i = 0; i < array.length; i++) {
        // listItems += "<li><a target='_blank' href='"+ myLinks[i] + "''>" + myLinks[i] + "</a></li>";
        // Another way of doing it
        // const li = document.createElement("li");
        // li.textContent = myLinks[i];
        // unorderedListId.append(li);

        // Template string
        listItems += `
            <li>
                <a target='_blank' href='${array[i]}'> ${array[i]} </a>
            </li>
            `;
  
    }
    unorderedListId.innerHTML = listItems;
}

saveBtn.addEventListener("click", function() {
    myLinks.push(inputText.value);
    inputText.value = "";
    // Set the links to local storage
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    render(myLinks);
});

deleteBtn.addEventListener("dblclick", deleteFunction);

function deleteFunction() {
    localStorage.clear();
    myLinks = [];
    render(myLinks);
}
