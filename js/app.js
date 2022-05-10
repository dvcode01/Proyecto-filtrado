
// variables y selectores
const inputSearch = document.getElementById('searchInput');
const usersList = document.querySelector('#users');
let users = [];

eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', mostrarUsuarios);
    inputSearch.addEventListener('keyup', busquedaUsuarios);
}

function busquedaUsuarios(e){
    const busquedaFiltrado = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(e.target.value.toLowerCase()));
    mostrarHTML(busquedaFiltrado);
}

async function cargarUsuarios(){
    const resultado = await fetch('https://fakerapi.it/api/v1/users?_quantity=100');
    const datos = await resultado.json();
    return datos;
}

async function mostrarUsuarios(){
    usersList.innerHTML = '<h1>Loading...</h1>';
    const datos = await cargarUsuarios();
    users = datos.data;
    mostrarHTML(users);
}

function mostrarHTML(usuarios){
    const listItem = crearUsuarioItem(usuarios);
    usersList.innerHTML = listItem;
}

const crearUsuarioItem = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');



    
