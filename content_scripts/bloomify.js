function bloomify(request, sender, sendResponse){
    removeEverything();
    insertFlower(request.flowerURL);
    browser.runtime.onMessage.removeListener(bloomify);
}

function removeEverything(){
    while(document.body.firstChild){
        document.body.firstChild.remove();
    }
}

function insertFlower(flowerURL){
    var flowerImg = document.createElement("img");

    flowerImg.setAttribute("src",flowerURL);
    flowerImg.setAttribute("style","width: 100vw;height:100vh");

    document.body.appendChild(flowerImg);
}

browser.runtime.onMessage.addListener(bloomify);