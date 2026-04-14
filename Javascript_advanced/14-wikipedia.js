'use strict';

function createElement(data) {
    let para = document.createElement('P');
    let text = document.createTextNode(data);
    para.appendChild(text);
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let pages = response.query.pages;
            let pageId = Object.keys(pages)[0];
            let extract = pages[pageId].extract;
            callback(extract);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);
