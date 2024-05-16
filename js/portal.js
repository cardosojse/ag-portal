let html = document.querySelector('html')
let gridApp = document.querySelector('.grid__section');
let contrasteBtn = document.querySelector("#contraste-btn")

let gridList = [];

const addData = () => {
    gridApp.innerHTML = '';
    if(gridList.length > 0){
        gridList.forEach(item =>{
            let newItem = document.createElement('div');
            newItem.classList.add('grid-item');
            newItem.classList.add('col');
            // adicionar onclick="loginRef()" na própria div
            newItem.innerHTML = `
                <img width="50" height="50" src="${item.img}"/>
                <div class="app-info" onclick="loginRef()">
                    <h5 class="app-name">${item.name}</h5>
                    <p class="description">${item.description}</p>
                </div>`;
            gridApp.appendChild(newItem);
        })
    }
}

const loginRef = () =>{
    window.location = 'ag-login.html';
}

const initApp = () => {
    fetch('portal.json')
    .then(response => response.json())
    .then(data => {
        gridList = data;
        addData();
    })
}

contrasteBtn.addEventListener("click", () => {
    if(html.classList.contains("dark-mode")){
        html.classList.remove("dark-mode");
    } else {
        html.classList.add("dark-mode");
    }
})

initApp();