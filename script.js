//your code here
let textbox = document.getElementById("evaluatedText");
let H3=document.getElementById("wordCount");

textbox.addEventListener("input", text)

function text(){
    let word=textbox.value;
    let wordlength=word.length;
    wordCount.innerHTML= wordlength;
}

