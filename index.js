var expression = document.getElementsByClassName("exp");
var c = document.getElementById("c");
var text = document.getElementById("text");
var equals = document.getElementById("equals");

var arr = [];

for(var i=0; i<expression.length; i++){
    expression[i].addEventListener("click",function(){
        console.log(this.getAttribute("value"))
        arr.push(this.getAttribute("value"));
        var x = arr.join("");
        text.innerHTML = x;
        equals.addEventListener("click", function(){
            text.innerHTML = eval(x);
            arr = [eval(x)];
        })
    })
}

c.addEventListener("click", function(){
    text.innerHTML = "0"
    arr = [];
    x = 0;
})
