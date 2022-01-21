window.onload = () => {
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);
    let lista = document.querySelector("#grid");
    fetch('assets/data/data.json')
        .then(res => res.json())
        .then(data => {
            let user = data[Number(param)];
                 let item=`
                 <img class="art_title_img" id="${user.index}" src="${user.imaget} "/>
                 <h1>${user.title}</h1>
                 <div class="leftColumDetail">
                 <p class="dateAuthorDetail">${user.dateAuthorDetail}</p>
                 <p class="leadText">${user.leadP}</p>
                 <img  id="${user.index}" src="${user.image} "/>
                 <p class="contenido">${user.content1}</p>
                 <img  id="${user.index}" src="${user.image1} "/>
                 <p class="contenido">${user.content2}</p>
                 <img  id="${user.index}" src="${user.image2} "/>
                 </div>
                 <div class="rightColumDetail">
                 <div class="section">${user.section}</div>
                 <img  id="${user.index}" src="${user.imagec1} "/>
                 <img  id="${user.index}" src="${user.imagec2} "/>
                 <img  id="${user.index}" src="${user.imagec3} "/>
                 </div>
                 `;
              lista.innerHTML += item;
        
        })
}
