function flowerNameToURL(flowerName){
    switch(flowerName){
        case "Flower1":
            return browser.extension.getURL("resources/f1.png");
        case "Flower2":
            return browser.extension.getURL("resources/f2.png");
        case "Flower3":
            return browser.extension.getURL("resources/f3.png");
        case "Flower4":
            return browser.extension.getURL("resources/f4.png");
        case "Flower5":
            return browser.extension.getURL("resources/f5.png");
    }
}

document.addEventListener("click",(e)=>{
    debugger;
    if(e.target.classList.contains("flower")){
        var choosenFlower = e.target.textContent;
        var choosenFlowerURL = flowerNameToURL(choosenFlower);

        browser.tabs.executeScript(null,{
            file : "/content_scripts/bloomify.js"
        });

        var activeTab = browser.tabs.query({active: true,currentWindow: true});
        activeTab.then((tabs)=>{
            browser.tabs.sendMessage(tabs[0].id, {flowerURL : choosenFlowerURL});
        });
    }
    else if(e.target.classList.contains("clear")){
        browser.tabs.reload();
        window.close();
    }
})