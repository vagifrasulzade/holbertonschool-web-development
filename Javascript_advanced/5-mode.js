'use strict';

function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let para = document.createElement('P');
    let text = document.createTextNode('Welcome Holberton!');
    para.appendChild(text);
    document.body.appendChild(para);

    let spook = document.createElement('button');
    spook.innerHTML = 'Spooky';
    spook.id = 'spookyy';
    document.body.appendChild(spook);
    document.getElementById('spookyy').onclick = spooky;

    let dark = document.createElement('button');
    dark.innerHTML = 'Dark mode';
    dark.id = 'darky';
    document.body.appendChild(dark);
    document.getElementById('darky').onclick = darkMode;

    let scream = document.createElement('button');
    scream.innerHTML = 'Scream mode';
    scream.id = 'screamy';
    document.body.appendChild(scream);
    document.getElementById('screamy').onclick = screamMode;
}

main();
