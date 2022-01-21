/** Cargar un fichero JSON */
window.onload = () => {
    let lista = document.querySelector("#sections");
    let detalle = document.querySelector(".detail");
    let datos;

    let mostrarDetalle = (e) =>{
        window.open(`../detalle.html?id=${e.currentTarget.id}`,'_blank');
    }

    fetch('assets/data/data.json')
    .then(res => res.json())
    .then(data => {
        datos = data;
       data.forEach((user, index) => {
           let item=`<li class="user" id="${index}">
                    <img src="${user.image}" alt="${user.first_name} "/>
                    <span>${user.first_name} ${user.last_name}</span>
                </li>`;
         lista.innerHTML += item;
       });
     })
     .then(()=>{
        let users = document.querySelectorAll(".user");
        users.forEach((user) => {
            user.addEventListener("click", mostrarDetalle, true)
        })
     });

}

// let ancho = window.innerWidth;
// let roww = ancho/14;
// window.onload = (e) => {

//     document.getElementById("grid").style.gridTemplateRows = "repeat (12, 1fr)";
//  console.log (ancho)
//  console.log(roww)

