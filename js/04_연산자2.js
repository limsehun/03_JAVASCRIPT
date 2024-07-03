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





   
}