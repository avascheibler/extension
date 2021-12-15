

const key = '18d9efa4-f663-405f-b836-8fc6f905e46d';


let changeColor = document.getElementById("changeColor");
let reset = document.getElementById("reset");
var all = document.getElementById("changeTextColor");

function json(url){
  return fetch(url).then(res => res.json());
}


var url = new URL("https://holidayapi.com/v1/holidays"),
  
    params = {key: key,country:"US", year: 2021, month: 12, day: 10}


Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

fetch(url).then(res => res.json()).then(data => {
  
  var holidays = data["holidays"];
  console.log(holidays);
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
document.write(today);
 
  // if () {
  //   ChristmasPic = (x= 0, y= 400, width = 100, height = 100);
  // }

  // grab the date of today
  // loop through holidays 
  // if one of the holidays has today's date then print the holiday name
  for (var w= 0, max=146; w<146; w++){
    console.log(holidays[w].date);
    if (today == [w].date){
      console.log([w].name);
    }
  }
});


  
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
    document.body.style.backgroundColor = color;
    document.body.style.color = changeTextColor;

    all = document.body.getElementsByTagName('*');
    all2 = document.getElementsByClassName("L202Xe");
    all3 = document.body.childNodes;

    for (var i = 0, max=all.length; i<max; i++){
      all[i].style.color = changeTextColor;
      all[i].style.backgroundColor = color;
    }

    for (let i = 0; i < document.body.childNodes.length; i++) {
      
      var grandchildren = all3[i];
      console.log(grandchildren)
      grandchildren.style.backgroundColor = color3;

      // if (grandchildren.length > 1) {
      //   for(let j=0; j<grandchildren.length; j++) {
      //     grandchildren[j].style.backgroundColor=color3;
      //     console.log("grandchildren" + grandchildren[j]);
      //     var ggchildren = grandchildren[j].childNodes;
      //     ggchildren.style.backgroundColor=color3;
      //     for(let k=0; k<ggchildren.length; k++){
      //       ggchildren[k].style.backgroundColor=color3;
      //       console.log(ggchildren[k]);
      //     }
      //   }
      // } 
    }
  });
}