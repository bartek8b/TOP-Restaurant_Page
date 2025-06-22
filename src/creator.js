export const creator = (imgSrc, imgAlt, text) => {
    const container = document.getElementById('content')
    const image = document.createElement('img');
    const div = document.createElement('div');

    image.src = imgSrc;
    image.setAttribute('alt', imgAlt);
    div.innerHTML = text;

    container.innerHTML = '';
    container.appendChild(image);
    container.appendChild(div);
}