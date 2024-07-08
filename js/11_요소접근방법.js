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