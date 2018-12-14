console.log("read index.js");

var $box1 = document.getElementById("box1");
var $box2 = document.getElementById("box2");
var $paragraph = document.getElementById("paragraph");

function doSomething(val){
    console.log("val: " + val);
    console.log("$box2", $box2)
    $box2.value = val;
    $paragraph.textContent = val;
};
