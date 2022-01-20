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
            document.write(user.first_name)
    })
}
