console.log("read index.js");
var outputBox;
var outputH1;

window.addEventListener('load', function() {
    outputBox = document.getElementById("output-box");
    outputH1 = document.getElementById("output-h1");
});

function doSomething(val){
    console.log("val: " + val);
    outputBox.value = val;
    outputH1.textContent = val;
};
