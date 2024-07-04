/** if 예시 - 양수인지 검사 */
function check1(){

    // id가 "input1"인 요소를 얻어와 input1 변수에 저장
    const input1 = document.getElementById("input1");


    // input1.value : input1 요소에 입력된 값 (string)
    // Number(문자열) : 문자열 -> 숫자로 변경

    const value = Number(input1.value);

    //입력받은 값이 0보다 큰 경우 true(라는 조건식 작성)
    if (value>0) {
        alert(`${value}은/는 양수입니다.`);
    }

    //입력받은 값이 0보다 작거나 같은 경우 true(라는 조건식 작성)
    //==양수가 아닌 경우
    if (value<=0) {
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

    const randomNumber=Math.floor(Math.random()*100);


    // 난수가 짝수인 경우
    if(randomNumber%2===0){
        alert(`${randomNumber}은/는 짝수입니다.`);
    }

    // 난수가 홀수인 경우
    else{
        alert(`${randomNumber}은/는 홀수입니다.`);}
  }

/** if ~ else if ~ else 예시 - 양수,음수,0 판별 */
function check3(){
  const input3 = document.getElementById("input3");

  const value = Number(input3.value);

  let result; // 결과를 저장할 변수

  //양수 판별
  if(value>0){
    result = "양수";
  }

  //음수판별
  else if(value<0){
    result = "음수";
  }

  //양수도 음수도 아닌 ㄴ경우
  else{
    result="0";
  }

  alert(`${value}은/는 ${result} 입니다.`);
}