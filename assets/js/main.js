const desplegar = datos => {
    const lista = document.querySelector('#lista');
    let li;
    datos.forEach((element, index) => {
        if (index < 20) {
            li = document.createElement('li')
            li.innerHTML = element.title
            lista.append(li)
            // console.log(index + 1, element.title);
        }
    });
}
