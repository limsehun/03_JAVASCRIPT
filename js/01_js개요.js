// .js파일 내부 <script> 태그 내부라고 생각
// 함수선언
function externalFn(){
    // 함수정의(기능이 이렇게 동작할거야)

    alert("External 확인 버튼이 클릭됨");
    alert("이번에 alert 두번");
  }


// -----------------------------------------------
// JS맛보기
// -버튼 클릭시 body태그의 글자색, 배경색 변경

const body = document.querySelector("body")

// 라이트 모드 변경함수(기능) 선언
function lightMod(){
    // 함수 정의
    body.style.color = "black";/* body 태그의 글자색을 black으로 설정 */
    body.style.backgroundColor = "white"; /* 배경색 white로 설정 */
}

// 다크 모드 변경 함수(기능) 선언
function darkMode(){
    body.style.color = "white"; // 글자색 white
    body.style.backgroundColor = "black"; // 배경색 black
  }