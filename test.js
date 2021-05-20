function functions() {
    alert('world!');
}

function output1() {
    const textbox = document.getElementById("strings");
    const inputValue = textbox.value;
    const output3 = "入力された内容は 「" + inputValue + "」です。";
    document.getElementById("output-message").innerHTML = output3;
}

function calculate1() {
    alert("確認用");
    const textbox = document.getElementById("math1");
    const inputValue = textbox.value;
    const output5 = inputValue;
    document.getElementById("out_math").innerHTML = output5;
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