console.log("read index.js");

var outputBox = document.getElementById("output-box");
var outputH1 = document.getElementById("output-h1");

function doSomething(val){
    console.log("val: " + val);
    outputBox.value = val;
    outputH1.textContent = val;
};
