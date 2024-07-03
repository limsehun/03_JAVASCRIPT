/* 
[템플릿 문자열]
- `(백틱)을 이용한 문자열 + 변수 작성법

- 문자열 전체를 `(백틱)으로 감싸고 
js값(변수, 연산, 값)을 ${} 형태로 작성

 */






/** 비교연산자 확인  */
function check1() {

    const num1 = 100;
    const num2 = 100;
    const num3 = 999;

    const str1 = "100";
    const str2 = "100";
    const str3 = "999";

    console.log("동등비교(==,!=)");

    //console.log(`${num1}==${num2}=>${num1 ==num2}`);

    // 100 == 100 => true
    console.log(`${num1} == ${num2} --> ${num1 == num2}`); // t

    console.log(`${num1} == ${num3} --> ${num1 == num3}`); // f

    console.log(`${num1} != ${num3} --> ${num1 != num3}`); // t


    // 동등 비교(숫자 == 문자열) 확인
    console.log(`${num1} == "${str1}" --> ${num1 == str1}`);

    // 문자열끼리 비교
    console.log(`"${str1}"=="${str2}"-->${str1==str2}`);

    console.log(`"${str1}"=="${str3}"-->${str1==str3}`);

    console.log(`"${str1}"=="${str3}"-->${str1!=str3}`);



    console.log("---동일비교(===, !==) 확인---");

    console.log(`${num1} == ${num2} --> ${num1 == num2}`);

    console.log(`${num1} == ${num3} --> ${num1 == num3}`);

    console.log(`${num1} != ${num3} --> ${num1 != num3}`);

    // 동일 비교(숫자 === 문자열)
  console.log(`${num1} === "${str1}" --> ${num1 === str1}`); // f


  console.log("숫자 끼리 크기 비교(>, <, >=, <=)")
   
  //초과/미만
  console.log(`${num1}>${num2}-->${num1>num2}`);
  console.log(`${num3}>${num2}-->${num1>num2}`);
  //이상/이하
  console.log(`${num1}>=${num2}-->${num1>=num2}`);



  /* 복합 기호에서 등호(=)는 무조건 오른쪽!!!! */

}



/** 홀/짝 판별 함수 */
function oddEvenCheck(){
  const input1 = document.getElementById("input1");

// #input1 요소에 작성되 값을 얻어와 
  // Number()를 이용해 숫자로 변환 후
  // value 변수에 대입(저장)
  const value = Number(input1.value);

  //2로 나눴을 때 나머지가 0 === 짝수(2의 배수)
  //2로 나눴을 때 나머지가 1이 아닌 경우 === 짝수(2의 배수)
  
  //2로 나눴을 때 나머지가 1 === 홀수
  //2로 나눴을 때 나머지가 0이 아닌 경우 === 홀수

  console.log(`${value}은/는 짝수 : ${value % 2===0}`);
  console.log(`${value}은/는 홀수 : ${value % 2!==0}`);
}

/**배수확인함수 */
function multipleCheck() {
    
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const result2 = document.getElementById("result2");

    const num2 = Number(input2.value); //입력값 숫자로 변환
    const num3 = Number(input3.value); //입력값 숫자로 변환


    //10은  5의배수? -> 10을 5로 나눴을때 나머지가 0인지 확인
    result2.innerText = num2 % num3 == 0; 
}

