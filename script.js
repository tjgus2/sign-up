document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const idInput = document.getElementById("ID");
    const passwordInput = document.getElementById("password");

    // 예시 데이터
    const existingIDs = ["user123", "exampleID", "testuser"];

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const enteredID = idInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // FR 1 : 아이디 중복 체크
        if (existingIDs.includes(enteredID)) {
            alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력하세요.");
            return;
        }

        // FR 2 : 비밀번호 글자 수 체크
        if (enteredPassword.length < 8) {
            alert("비밀번호는 최소 8자 이상이어야 합니다.");
            return;
        }

        // 위 조건들 만족하면 회원가입 성공
        alert("회원가입이 완료되었습니다!");
        form.reset(); 
    });
});
