
//js:window.onload = function(){}
window.onload = function() {
    let n = 3;
    for(i = 0;i < n;i++) {
        let pass = prompt("password?");
        if(pass=="yuta38") {
            break;
        }
        if(i==n-1) {
            alert("Error:You are not admin.");
            window.location.href = 'https://yu-ta38.github.io/MyPage/error.html';
            window.open('https://yu-ta38.github.io/MyPage/error.html', '_blank');
        }
    }
}

function functions() {
    alert('world!');
}

function calculate1(n) {
    const textbox = document.getElementById("strings");
    const inputValue = textbox.value;
    const output3 = inputValue;
    document.getElementById("strings").inneerHTML = output3;
}

kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
let lastTime = Date.now();
function handle(e) {
    if(form.elements[e.type + 'Ignore'].checked) return;
    let text = e.type + 
        ' key=' + e.key + 
        ' code=' + e.code + 
        (e.shiftKey ? ' shiftKey' : '') + 
        (e.ctrlKey ? ' ctrlKey' : '') + 
        (e.altKey ? ' altKey' : '') + 
        (e.metaKey ? ' metaKey' : '') + 
        (e.repeat ? ' (repeat)' : '') + 
        "\n";
    if(area.value && Date.now - lastTime > 250) {
        area.value += new Array(81).join('-') + '\n';
    }
    lastTime = Date.now();
    area.value += text;
    if(form.elements[e.type + 'Stop'].checked) {
        e.preventDefault();
    }
}

function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
}