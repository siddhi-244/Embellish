let componentContainer = document.getElementById("component-container");
function fetchComponents() {
  fetch("js/componentData.json")
    .then((obj) => obj.json())
    .then((jsonData) => renderComponents(jsonData));
}
function renderComponents(json) {
  json.items.forEach((component) => {
    let { category, componentName, preview, componentURL } = component;
    componentContainer.innerHTML += `
        <div class="mb-5" style="cursor: default;">
                            <div class="card h-100 shadow border-0">
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">${category}</div>
                                    <div class="text-decoration-none link-dark">
                                        <div class="h5 card-title mb-3">${componentName}</div>
                                    </div>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between w-100">
                                        <div class="d-flex align-items-center w-100">
                                            <div class="footer-card">
                                                <a target="_blank" href="${preview}">Preview</a>
                                                <a class="text-black" target="_blank" href="${componentURL}"><i class="bi bi-github fs-3"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
  });
}

if(window.location.pathname.includes("components")){
    fetchComponents()
}else{
    fetchComponentsHome()
}
function fetchComponentsHome() {
  fetch("js/componentData.json")
    .then((obj) => obj.json())
    .then((jsonData) => randomChoose(jsonData));
}

function randomChoose(json) {
  min = 0;
  max = json.items.length;
  let data = {
    items: [],
  };
  for (let i = 0; i < 3; i++) {
    data.items.push(json.items[Math.floor(Math.random() * (max - min) + min)]);
  }
  renderComponents(data)
}

//Autotype JS code:

var dataset = ["Welcome " + " to " + " Embellish "];
var datasetIndex = 0;
var data;
var pause = 1000;
var addTime = 200;
var removeTime = 150;
var letterIndex = 0;
var currentInterval;

var autoType = document.getElementById("autoType");

function textRotation() {
  if(datasetIndex == dataset.length) {
    datasetIndex = 0;
  };
  
  data = dataset[datasetIndex];
  letterIndex = 0;
  autoType.className = "";
  currentInterval = window.setInterval(addLetter, addTime);
};

function addLetter() {
  autoType.innerHTML += data.charAt(letterIndex);
  letterIndex += 1;
  
  if(letterIndex > data.length) {
    autoType.className = "caretAnimation";
    window.clearInterval(currentInterval);
    window.setTimeout(startRemove, pause);
  };
};

function startRemove() {
  currentInterval = window.setInterval(removeLetter, removeTime);
}

function removeLetter() {
  var currentString = autoType.innerHTML;
  autoType.innerHTML = currentString.slice(0, -1);
  
  if(currentString.length < 1) {
    window.clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  };
};

window.onload = window.setTimeout(textRotation, 500);
