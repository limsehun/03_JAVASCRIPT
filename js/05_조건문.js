/** if 예시 - 양수인지 검사 */
function check1() {

    // id가 "input1"인 요소를 얻어와 input1 변수에 저장
    const input1 = document.getElementById("input1");


    // input1.value : input1 요소에 입력된 값 (string)
    // Number(문자열) : 문자열 -> 숫자로 변경

    const value = Number(input1.value);

    //입력받은 값이 0보다 큰 경우 true(라는 조건식 작성)
    if (value > 0) {
        alert(`${value}은/는 양수입니다.`);
    }

    //입력받은 값이 0보다 작거나 같은 경우 true(라는 조건식 작성)
    //==양수가 아닌 경우
    if (value <= 0) {
        alert(`${value}은/는 양수가 아닙니다.`);
    }
}


/**if ~ else 예시 - 0~99 홀/짝 판별 */
function check2() {

    //난수 발생 : Math.random()
    //  -> 0.0<= 난수 < 1.0

    // 내림 처리 : Math.floor(실수)
    //           소수점 첫째자리에 내림처리
    //           -> 정수 형태로 변환

    const randomNumber = Math.floor(Math.random() * 100);


    // 난수가 짝수인 경우
    if (randomNumber % 2 === 0) {
        alert(`${randomNumber}은/는 짝수입니다.`);
    }

    // 난수가 홀수인 경우
    else {
        alert(`${randomNumber}은/는 홀수입니다.`);
    }
}

/** if ~ else if ~ else 예시 - 양수,음수,0 판별 */
function check3() {
    const input3 = document.getElementById("input3");

    const value = Number(input3.value);

    let result; // 결과를 저장할 변수

    //양수 판별
    if (value > 0) {
        result = "양수";
    }

    //음수판별
    else if (value < 0) {
        result = "음수";
    }

    //양수도 음수도 아닌 경우
    else {
        result = "0";
    }

    alert(`${value}은/는 ${result} 입니다.`);
}

function ageCheck() {
    const inputAge = document.getElementById("inputAge");

    const value = Number(inputAge.value);

    let result;

    if ((value >= 0) && (value <= 13)) {
        result = "어린이"
    }

    else if ((value >= 14) && (value <= 19)) {
        result = "청소년"
    }

    else if ((value >= 20) && (value <= 120)) {
        result = "성인"
    }

    else {
        result = "잘못입력한 바보"
    };

    alert(`너님은 ${result}입니다.`);
}

/*function ageCheck2(){
    const inputAge = document.getElementById("inputAge");
  
    const value = Number(inputAge.value);
  
    let result;

    if(value<0||value>120){
        result = "잘못입력했읍니다."
    }

    else if(value<=13){
        result="잼민이"}

    else if(value<=19){
        result="머리큰잼민이"}

    else if(value<=120){
        result="다큰잼민이"}

    alert(result)
}*/

/** 어린이, 청소년, 성인 판별 ver2  */
function ageCheck2() {
    const inputAge = document.getElementById("inputAge");
    const value = Number(inputAge.value);

    let result;

    if (value < 0 || value > 120) result = "잘못 입력 하셨습니다";
    else if (value <= 13) result = "어린이";
    else if (value <= 19) result = "청소년";
    else result = "성인";

    alert(result);
}

/*
-if ~ else if ~ else 에서 앞선 if의 조건이 
false가 되면 해당 범위는 이후 조건에서 제외된다.

- if, else, if else, for while 등 {}내부 코드가
 한 줄만 존재하는 경우 {} 생략가능

*/

/** 입력 받은 수가 3의 배수가 맞는지 검사 */
function check4() {
    const input4 = document.getElementById("input4");
    const value = Number(input4.value);
    let result;

    /* 3의 배수가 맞으면 : YES
     3의 배수가 아니면 : NO
     음수입력시        : 양수만 넣어
     입력값이 없을 시  : 값을 넣어/ */

    if (input4.value.length === 0) {
        // 문자열.length == 문자열의 길이를 반환
        alert("값을 넣어");
    }

    else {//값 입력 O
        //여기선0도 양수로 취급

        if (value >= 0) { // 양수

            if (value % 3 === 0) {
                // 3의 배수가 맞으면 : YES
                alert("YES");
            } else {
                // 3의 배수가 아니면 : NO
                alert("NO");
            }
        } else {
            //음수입력
            alert("양수만 적으라")
        }


    }
}


/** 두 수 A,B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check5(){
    const a = document.getElementById("input5a");
    const b = document.getElementById("input5b");
  
    // 1) A와 B중 하나라도 입력되지 않으면
    // -> 입력되지 않은 값이 존재합니다
  
    if(a.value.length === 0||b.value.length===0){
        alert("입력되지 않은 값이 존재합니다");
        return; // Early Reutrn : 함수를 여기서 일찍 끝냄
    }

      // 두 값이 모두 입력되어 있을 경우에만 아래 코드 수행
  const valueA = Number(a.value);
  const valueB = Number(b.value);

    // 2) A가 B보다 작으면 -> A가 B보다 작습니다
    if(valueA < valueB){
        alert("A가 B보다 작습니다");
        return; 
  }

  //위 if실행X -> A가 B보다 크거나같다

  // 3) 1,2번 조건이 모두 false이면 배수 판별 진행
  // 배수 맞음 / 배수 아님

  if (valueA % valueB ===0) {
    alert("배수맞음")
    return;
  }
  alert("배수아님")

}

// 매개 변수(Paramter)
// - 함수 호출 시 전달된 값(전달 인자, Arguments)을
//   저장하는 변수


/** switch 버전 계산기 만들기
 * @param op : 전달받은 연산기호
 */

function calc(op){

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")

const value1 = Number(number1.value);
const value2 = Number(number2.value);

  // 입력된 값, 전달받은 값 확인
  console.log(value1, value2, op);

  let result; //결과저장

  //op 값에 따라 알맞은 case실행

  /**break : 현재 case까지만 해석하고 switch문을멈춤
   -> break문 미작성시 현재 case 수행 후 멈추지 않고
     break가 존재하는 case문까지 계속 수행
     -> 중간에 break 없으면 default 까지 수행
   */
  switch(op){
    case'+': result = value1+value2; break;
    case'-': result = value1-value2; break;
    case'*': result = value1*value2; break;
    case'/': result = value1/value2; break;
    case'%': result = value1%value2; break;
    default: result = "잘못된 연산자";
  }

  
  // 아이디가 "calcResult"인 요소를 얻어와
  // 내용(innerText)으로 result를 대입
  document.getElementById("calcResult").innerText = result;
}

function check6(){

    const input6 = document.getElementById("input6");
    const value = Number(input6.value);
  
    let result;
  
    switch(value){
      case 3:
      case 4:
      case 5: result = "봄"; break;

      case 6:
      case 7:
      case 8: result = "여름"; break;

      case 9:
      case 10:
      case 11: result = "가을"; break;

      case 12:
      case 1:
      case 2: result = "겨울"; break;

      default : result="잘못입력"
  
    }

    alert(result);
  
  }

