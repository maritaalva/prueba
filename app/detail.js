window.onload = () => {
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/data.json')
        .then(res => res.json())
        .then(data => {
            let user = data[Number(param)]
            document.write(user.title)
            // let text_box = documentquerySelector(".text_box");
            // let main = `<h2> ${user.title} </h2> <img class="img_art_01_1" src"${user.image1_1}" alt="african_chair"><img class="img_ess_01_1" src"${user.image2_1}" alt="ilustration"><img class="img_art_02_1" src"${user.image2_1}" alt="monobloc_chair">`
            // let content = `<p class="contenido">${user.content}</p>`;
            // main += content;
            // text_box.innerHTML = main
        })
}
