var button = document.getElementById("entrer");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputvalue(){
    return input.value.length;
}

function createListeElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", function() {
        ul.removeChild(li);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
}


button.addEventListener("click", function(){
    console.log(input.value);
    if (inputvalue() > 0) {
        createListeElement();
    }
});
input.addEventListener("keypress",function(event){
    if(inputvalue() > 0 && event.keycode === 13 ){
        createListeElement();
    }
})