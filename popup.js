//get all changetype radio elements and register eventhandlers
let elements = document.getElementsByName("changetype");

elements.forEach(function (breakingChange) {
    breakingChange.onclick = function(element) {
        let changeType = element.target.value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage( tabs[0].id, changeType); 
        });
    };
});