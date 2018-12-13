console.log("read index.js");


// var inputBox = document.getElementById("box1");
// var outputBox = document.getElementById("box2");
// var output3 = document.getElementById("box3");
// console.log("inputBox:", inputBox);
// console.log("output3:", output3);

var outputBox;
var output3;

window.addEventListener('load', function() {

    // console.log('All assets are loaded')
    // var inputBox = document.getElementById("box1");
    // var outputBox = document.getElementById("box2");
    // var output3 = document.getElementById("box3");
    // console.log("inputBox:", inputBox);
    // console.log("output3:", output3);

    // inputBox.addEventListener('onchange', function(){
    //     console.log("hi")
    // });

    
    outputBox = document.getElementById("box2");
    output3 = document.getElementById("box3");

    // function doSomething(val){
    //     // setTimeout(function(){console.log("val: " + val)}, 50)
    //     console.log("val: " + val);
    //     // outputBox.innerHTML(val);
    //     outputBox.innerHTML = val.target.value;
    //     // console.log("outputBox")
    // };
});

// window.addEventListener('load', function() {
//     function doIt(val){
//         alert("did it" + val)
//     }
// });

// window.tdiff = []; fred = function(a,b){return a-b;};
// window.document.onload = function(e){ 
//     console.log("document.onload", e, Date.now() ,window.tdiff,  
//     (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 
// }
// window.onload = function(e){ 
//     console.log("window.onload", e, Date.now() ,window.tdiff, 
//     (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred) ); 
// }
// function doIt(){
//     console.log("did it")
// }


function doSomething(val){
    // setTimeout(function(){console.log("val: " + val)}, 50)
    
    // outputBox = document.getElementById("box2");
    // output3 = document.getElementById("box3");
    console.log("val: " + val);
    // outputBox.innerHTML(val);
    // outputBox.innerHTML = val.target.value;
    // outputBox.textContent = val.target.value;


    // outputBox.textContent = val;
    // console.log("outputBox:", outputBox);
    outputBox.value = val;
    output3.textContent = val;

    // setTimeout(function(){
    //     outputBox.value = val;
    //     // outputBox.textContent = val;

    // }, 50);

};

// (function() {
    // var elem =     document.getElementById('para');
    // var inputBox = document.getElementById("box1");
    // var outputBox = document.getElementById("box2");
    // var output3 = document.getElementById("box3");
    // console.log("inputBox:", inputBox);
    // console.log("output3:", output3);
    // console.log("elem", elem);

    // inputBox.addEventListener('change', function(){
    //    alert("event listener fired");
    //    alert("hi");
    // });
    // console.log("In function");
// })();



































/*
var inputBox = document.getElementById("box1");
var outputBox = document.getElementById("box2");
console.log("input box is ", inputBox);
inputBox.addEventListener('change', function(){
    alert("event listener fired");
})
*/


/*
document.addEventListener('DOMContentLoaded', function(){
    alert("listener is listening")
    var inputBox = document.getElementByID("box1");
    inputBox.onchange=changeEventHandler;
}, false);



function changeEventHandler(event){
    alert(event);    
}
*/

