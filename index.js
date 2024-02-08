
let myLinks = [];

const inputText = document.querySelector('#input-text-id');
const unorderedListId = document.querySelector("#ul-id");

function saveInputButton() {
    myLinks.push(inputText.value);

    renderLinks();
}

function renderLinks() {
    let listItems = "";
    for (let i = 0; i < myLinks.length; i++) {
        listItems += "<li><a target='_blank' href='"+ myLinks[i] + "''>" + myLinks[i] + "</a></li>";
        
        // Template string
        listItems += `
            <li>
                <a target='_blank' href='${myLinks[i]}''>" + myLinks[i] + "</a>
            </li>
            `;

        // Another way of doing it
        // const li = document.createElement("li");
        // li.textContent = myLinks[i];
        // unorderedListId.append(li);
    }

    unorderedListId.innerHTML = listItems;
    inputText.value = "";
}