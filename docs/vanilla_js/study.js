var text = document.querySelector('#text');
text.onclick = function () {
    text.style.color = "blue";
    alert("색상 변경 완료");
}

var confirm_test = document.querySelector('#confirm_test');
confirm_test.onclick = function() {
    confirm_test.style.color = "green";
    var reply = confirm("컨펌 테스트");
}

var prompt_test = document.querySelector('#prompt_test');
prompt_test.onclick = function() {
    prompt_test.style.color = "orange";
    var name = prompt("이름을 입력하세요.", "홍길동");
    document.write("<b><big>" + name + "</big></b>님, 환영합니다.");
}