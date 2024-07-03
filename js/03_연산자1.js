/* (중요!!!)
  HTML에서 얻어온 값/내용은 
  무조건 string 형태!!!!!!
*/



// document : HTML문서
// . (점 연산자) : 내부, 하위 접근 연산자
// get : 얻다
// Element : HTML요소
// ById : id가 일치하는 요소
// -> 문서 내에서 id가 일치하는 요소를 얻어와라

// input1 id를 가지는 요소를 얻어와 
// number1 변수(상수)에 저장
const number1 = document.getElementById('input1');
const number2 = document.getElementById('input2');


/* 
더하기 함수
*/
function plusFn(){
  //더하기 함수 정의

  // 입력값을 숫자(number)로 변환해서 v1변수에 저장
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);
}
