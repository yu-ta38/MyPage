//js:window.onload = function(){}
let start = window.onload = function() {
    let n = 3;
    for(i = 0;i < n;i++) {
        let pass = prompt("password?");
        if(pass=="yuta38") {
            alert("welcome.");
            break;
        }else if(pass==NULL){
            window.location.href = 'https://yu-ta38.github.io/MyPage/error.html';
            window.open('https://yu-ta38.github.io/MyPage/error.html', '_blank');
        }else {
            alert("Not correct.");
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

function compute1(n) {
}