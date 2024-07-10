/* 변수(Variable) 선언 */

// 메모리(RAM)에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류  변수명;

var number1;
var number2;


/* 변수에 값 대입 */
// 선언된 변수(공간)에 값을 대입(집어 넣음)
// 작성법 :   변수명  =  값

// =(등호) : 대입 연산자
//  A = B   ->  B를 A에 대입 (오른쪽 값을 왼쪽 변수에 대입)

number1 = 10; // number1 변수에 10 대입
number2 = 20; // number2 변수에 20 대입


/* 변수 사용하기 */
// 필요한 곳에서 변수명 작성
console.log("number1 변수에 저장된 값 : ", number1);
console.log("number2 변수에 저장된 값 : ", number2);
console.log("number1 + number2 = ", number1 + number2);

// 선언된 변수는 콘솔에서도 사용 가능

// (에러) number3 is not defined
// -> number3라는 변수가 정의되지 않았다
//   == number3 선언 안됨 / 존재 X


// --------------------------------------------

/* 1. var */
/* 변수, 변수명 중복 O(덮어쓰기), 함수 레벨 범위(scope) */
function varCheck(){

  var menu = "콩국수";
  console.log("menu : ", menu);

  var menu = "초밥"; 
  console.log("변경된 menu : ", menu);

  var menu = "국밥"; 
  console.log("변경된 menu : ", menu);

  // var를 이용할 경우 변수명이 중복되면 
  // 이전 값을 새로운 값으로 덮어쓰기함
  
  // 문제점 : 이전에 대입한 값을 이용할 수 없다
  // -> 나중에 이전 값을 사용하고 싶은데
  //    나도 모르게 새로운 값을 대입해 지워버리는 경우가 생김

}

/* 2. let */
/* 변수, 변수명 중복X, 블록 {} 레벨 범위 */
function letCheck(){
  let name = "홍길동";
  console.log("name : ", name);

  /* let */ name ="김미영"; /* 컨트롤 쉬프트 슬래시*/
  //블록 범위 변수 'name'을(를) 다시 선언할 수 없습니다.
  //Indentifier 'name' has already been declared
  //-> name 변수가 이미 선언됨

  // --> 해결방법
  // 1. 변수에 대입된 값을 바꾸는게 목적 -> let 제거
  // name='김미영';

  // 2. 새로운 변수 생성이 목적 -> 변수명 변경
  // let name2 = "김미영";

  console.log("변경된 name : ", name);


  //새로운 변수 선언
  let name2 = "신짱구";
  console.log("name : ",name, "name2 : ", name2);
  
}



//const : 상수, 변수명 중복 X, 블록 {} 레벨 범위

//const로 선언된 변수에 값을 대입하면 변경할 수 없다.
//(새로운 값 대입 불가)
function constCheck() {
  /*const*/let nationalCode = 82;

  console.log("국가 코드 : ", nationalCode);

  nationalCode = 1; //const에 값을 대입해도 빨간줄 안뜸

  //02_변수와 자료형 .js:96 -> 16번째 줄에서 오류 발생
  // -> 상수변수에 값이 할당됨
  // --> 상수는 값을 다시 대입(할당)할 수 없어서 오류 발생

  // 해결 방법 : const를 let으로 변경
  // const nationalCode -> let nationalCode


  console.log("국가코드 : ", nationalCode);
  
}


/* var, let, const의 scope확인 */

/* 선수지식
  1. 전역 변수 : 어디서든 사용 가능한 변수

  2. 지역 변수 : 특정 지역에서만 사용 가능한 변수
    1) 함수 레벨 범위
    -function 함수명(){}
    함수 정의 부분에서 {}내부에서 var로 선언된 함수는
    함수 내부 어디서든 사용 가능

    2)블록 레벨 범위

*/

//함수 선언
function scopeTest() {
  //함수 정의

  var num1 = 100;

  //만약 num1에 저장된 값이 100과 같다면
  //{} 내부의 코드를 실행
  if(num1 == 100){
    var num2 = 200; // var를 이용해서 num2 변수 선언

    //var로 선언되었기 때문에
    //함수{}레벨 지역 변수
    // - > if문이 끝나도 함수가 끝난게 아니기 때문에 
    //      함수{}안에서 어디서든지 사용 가능
  }

  console.log("num2: " + num2); // num2 : 200 출력됨

  //----------------------------------------------

  let num3 = 300;

  //num3에 저장된 값이 300과 같다면 {}내부코드 수행
  if(num3 == 300){
    let num4 = 400; // 블록{} 레벨 지역 변수
                    // ==블록을 벗어나면 사용할 수 없다.
                    // ==블록 내부에서만 사용할 수 있다.
    console.log("if 내부 num4 : ", num4);

    //num4 is not defined -> num4가 정의되지 않음

  }
}

  //console.log("num4 : ", num4); 
  //num4 is not defined -> num4가 정의되지 않음


  //------------------------------

  //변수 선언 위치에 따른 범위

  //전역 변수 선언
  const global1= "전역 변수1";

function scopeTest2(){
    
    const fn1 = "함수 지역 변수 1";

    const temp = 123; //테스트를 위한 임시 값

    // == : 같다
    if (1 == 1) { //1과1이 같다면 if{}수행

      const local1 = "if 지역 변수1";

      console.log("if 내부에서 global1", global1); //출력O

      //넓은 범위(함수)에서 선언된 변수는
      //좁은 범위(함수 내 if)에서 사용가능! 

      console.log("if 내부에서 local1 : ", fn1); //출력O
      console.log("if 내부에서 local1 : ", local1);//출력O
      
    }

    // console.log("local1 : ", local);
    // if문 지역 변수 local1을 if문 밖에서
    // 호출하면 "정의되지 않음" 오류 발생

}
