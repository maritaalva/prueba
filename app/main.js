/** Cargar un fichero JSON */
window.onload = () => {
    let lista = document.querySelector("#grid");
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
           /*let item=`<div class="user" id="${index}">
                    <div><img src="${user.image} "/></div>
                    <span>${user.title} ${user.resume}</span>
                    <span>${user.author} ${user.section}</span>
                </div>`;*/
            let item=`
            <img class="user" id="${index}" src="${user.image} "/>
            <div class="post_txt">
                <h2>${user.title}</h2>
                <p>${user.resume}</p>
                <div class="flex">
                    <div class="section">${user.section}</div>
                    <div class="autor">${user.author}</div>
                </div>
            </div>`;
         lista.innerHTML += item;
       });
     })
     .then(()=>{
        let users = document.querySelectorAll(".user");
        let posts = document.querySelectorAll(".post_txt");
        users.forEach((user) => {
            user.addEventListener("click", mostrarDetalle, true);
            user.style.gridColumn=datos[user.id].posColI;
            user.style.gridRow=datos[user.id].posRowI;

            let postTxt = user.nextElementSibling;
            postTxt.style.gridColumn=datos[user.id].posColT;
            postTxt.style.gridRow=datos[user.id].posRowT;
        })
   
     });

     var drawGrid = function(w, h, id) {
        var canvas = document.getElementById(id);
        var ctx = canvas.getContext('2d');
        ctx.canvas.width = w;
        ctx.canvas.height = h;
    
        let gridsize = window.innerWidth / 14;
    
        for (x = 0; x <= w; x += gridsize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            for (y = 0; y <= h; y += gridsize) {
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }
        }
        ctx.stroke();
        ctx.canvas.strokeStyle ="#6E5CFF";
    };
    
    window.addEventListener('resize', function(event) {
        drawGrid(window.innerWidth, window.innerHeight, "gridLines");
    }, true);
    
    drawGrid(window.innerWidth,document.body.scrollHeight, "gridLines");


   
}

// let ancho = window.innerWidth;
// let roww = ancho/14;
// window.onload = (e) => {

//     document.getElementById("grid").style.gridTemplateRows = "repeat (12, 1fr)";
//  console.log (ancho)
//  console.log(roww)

