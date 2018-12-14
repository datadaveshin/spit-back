console.log("read index.js");

const $box1 = document.getElementById("box1");
const $box2 = document.getElementById("box2");
const $paragraph = document.getElementById("paragraph");

function doSomething(val){
    theAction(true, val);
}

function doSomethingElse(val){
    theAction(false, val);
}

function theAction(boxOne, text){
    console.log("text: " + text);
    console.log("$paragraph", $paragraph);
    if (boxOne) {
        $box2.value = text;
        console.log("$box2", $box2);
    } else {
        $box1.value = text;
        console.log("$box1", $box1);
    }


    if (text.slice(-5) == "clear") {
        text = "";
        $box1.value = "";
        $box2.value = "";
    }

    $paragraph.textContent = text;
    if ($paragraph.textContent.slice(-3) == "red") {
        $paragraph.style.color = "red";
    }
};
