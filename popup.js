let changeColor = document.getElementById("changeColor");
let changeColor2 = document.getElementById("changeColor2");
let reset = document.getElementById("reset");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("color2", ({ color2 }) => {
  changeColor2.style.backgroundColor = color2;
});

changeColor2.addEventListener("click", async() => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor2,
  });
})
function setPageBackgroundColor2() {
  chrome.storage.sync.get("color2", ({ color2 }) => {
    document.body.style.backgroundColor = color2;
  });
}

reset.addEventListener("click", async() => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: resetPageBackgroundColor,
  });
});
function resetPageBackgroundColor() {
    document.body.style.backgroundColor = null;
}

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}