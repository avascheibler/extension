let changeColor = document.getElementById("changeColor");
let reset = document.getElementById("reset");
var all = document.getElementById("changeTextColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

reset.addEventListener("click", async() => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: resetColor,
  });
});
function resetColor() {
    document.body.style.backgroundColor = null;
    document.body.style.color = null;

  all = document.body.getElementsByTagName('*');

    for (var i=0, max=all.length; i<max; i++){
      all[i].style.backgroundColor = null;
      all[i].style.color = null;
    }
}
function setTextColor() {
  document.body.style.changeTextColor = text;
}

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setColor
    });
  });

function setColor() {
  chrome.storage.sync.get(["color", "changeTextColor", "color2", "color3"], ({ color, changeTextColor, color2, color3}) => {
    // document.body.style.backgroundColor = color;
    // document.body.style.color = changeTextColor;

    all = document.body.getElementsByTagName('*');
    all2 = document.getElementsByClassName("L202Xe");
    all3 = document.body.childNodes;

    // for (var i = 0, max=all.length; i<max; i++){
    //   all[i].style.color = changeTextColor;
    //   all[i].style.backgroundColor = color;
    // }
    // for (var i = 0, max=all2.length; i<max; i++){
    //   all2[i].style.backgroundColor = color2;
    // }
    for (let i = 0; i < document.body.childNodes.length; i++) {
      
      var grandchildren = all3[i];
      console.log(grandchildren)

      if (grandchildren.length > 1) {
        for(let j=0; j<grandchildren.length; j++) {
          grandchildren[j].style.backgroundColor=color3;
          console.log(grandchildren[j]);
        }
      } 
    }
  });
}