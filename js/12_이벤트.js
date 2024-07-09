/* 인라인 이벤트 모델 + this 확인 */
function check1(btn){
    // 매개변수 btn : 함수 호출시 괄호안에 작성된 
    //              check(this)의 this가 대입됨

    // btn===this===이벤트가 발생한 요소(div.my-btn1)
    console.log(btn);

    // 클릭된 요소(btn)에 작성된 내용이 숫자이면 1증가
    // 아니면 0을 대입

    // NaN : 숫자 아님 
    // isNaN(값) : 숫자 아니면 true
    // Number(값) : number 타입으로 변환

    //Number(btn.innerText) ===NaN
    if(isNaN(Number(btn.innerText))){ //숫자가 아니면
        btn.innerText =0;
        
    } else{
        // ++ 증감 연산자는 오로지 number 타입에만 사용 가능!
        // -> 피연산자가 숫자형태의 문자열인 경우( "123" )
        // 강제로 숫자 타입으로 바꿔서 연산을 수행

        btn.innerText++;
    }
}


/* 고전 이벤트 모델 확인 */

// id가 "test1a"인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1a");

/* 고전 이벤트 모델 작성법

요소.이벤트리스너 = 이벤트 핸들러
*/

// function(){} : 익명 함수(이름이 없는 함수)
// -> 보통 이벤트 핸들러 작성시 많이 사용됨

test1a.onclick=function /*함수명*/(params) {
    // 고전 이벤트 모델 - 이벤트 핸들러 내에서 this : 클릭된 요소
    console.log(this);

    alert("확인버튼 클릭됨");
}

/* 고전 이벤트 모델 제거 */

const test1b = document.querySelector("#test1b");

test1b.onclick=function(){

    //null : 참조하는게 없다
    //  -> 유사 의미 : 없다

    test1a.onclick=null;
    alert("확인 버튼 클릭 이벤트 제거")
}

/* 고전 이벤트모델 단점 */
const test1c=document.querySelector("#test1c");

// DOM 요소는
// onclick, onchange 같은 이벤트 리스너가
// 필드(변수)로 하나씩 존재함
// -> 변수는 마지막으로 대입된 값으로 덮어 씌워진다는
//    특징이 있다!!!

//첫 번째 대입
test1c.onclick = function(){
    test1c.style.backgroundcolor = "yellow";
};

//두 번째 대입
test1c.onclick = function(){
    test1c.style.color = "green";
};