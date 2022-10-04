const textStr = document.querySelector("#text-str");
const check = document.querySelector("#check");

let str = '';
let checkStr = '';
textStr.addEventListener("change", function() {
    str = this.value;
});

check.addEventListener("click", function() {
    str.replace("/\W/g", "");
    checkStr = str.split("").reverse().join("");

    str === checkStr 
    ? alert("Text is a palindrome🍻")
    : alert("Text is not a palindrome😔")
})
