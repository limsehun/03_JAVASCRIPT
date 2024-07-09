
/* 화면에 존재하는 .box, .color-input 얻어와 변수에 저장  */
const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

/* 클릭할 버튼요소 얻어오기 */
const changeBtn = document.querySelector("#changeButton");

/* 변경 버튼 클릭 시 */
changeBtn.addEventListener("click", function(){

    for(let i=0 ; i<boxList.length ; i++){
        // input에 작성된 값을 얻어와
        // 같은 index번째 box 요소에 배경색으로 대입
       boxList[i].style.backgroundColor = inputList[i].value;
    }

})

/*
   input관련 요소에 작성된 값 -> value
   나머지 요소(div,p,span,...)에 작성된 내용 
   -> innerText, innerHTML
*/