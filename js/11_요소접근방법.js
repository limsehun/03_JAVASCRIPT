/** class를 이용한 요소(DOM 객체) 접근 방법 */
/** class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest(){
  
    /* 유사 배열이란?
       배열처럼 index, length를 가지고 있으나
       배열 전용 기능(메서드)를 제공하지 않음
    */

    // 클래스가 cls-test인 요소를 모두 얻어와
    // HTML Collection (유사 배열)형태로 얻어옴
    const divs = document.getElementsByClassName("cls-test");

    // 0부터 divs 길이 미만까지 반복
    for (let i = 0; i < divs.length ; i++) {// i == 0,1,2
        // 요소.innerText = "값";  // 요소 내용으로 "값" 대입
        // 요소.innerText;         // 요소 내용 얻어오기

        console.log(divs[i].innerText); // 작성된 내용(색상)

        divs[i].style.backgroundColor = divs[i].innerText;
        
    }
}

// input에 입력된 숫자 모두 얻어와 합계 구하기
function classTest2() {
    


    /*  input 요소에 입력된 값 얻어오는 방법
     -> input요소.value

      HTML 요소에서 얻어온 값의 자료형은 
     -> 모두 string(문자열)

      합계 구하는 방법
     -> let sum = 0; 선언 후 누적 

    HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
     -> document.getElementsByClassName("class속성값")
       -> HTMLCollection (유사배열) 형태로 반환
    */

    const input = document.getElementsByClassName("cls-test2");

    let sum = 0;

    for(let i = 0; i < input.length ; i++){

        sum += Number(input[i].value);   //합계 누적
    }

    alert(`합계 : ${sum}`);
}


/** 태그명으로 요소 접근하기 */
function tagNameTest(){

    /* document.getElmentsByTagName("태그명") */
    const tagList = document.getElementsByTagName("li");
    // -> 요소 4개짜리 배열 변환
    // i == 0,1,2,3
    for(let i=0 ; i<tagList.length ; i++){
      // tagList[i].innerText : 작성된 내용(색상)

      //글자색 변경
      tagList[i].style.color = tagList[i].innerText;

      //태두리 변경
      tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }
}