/* [for문 작성법]
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/

/** 12345 출력 */
function check1(){

    //num이 1부터 1씩 증가하다 5이하가 아닌순간 멈추겠다
   /* for(초기식; 조건식; 증감식){}*/
   for(let num=1; num<6; num++){
    console.log(num);
   }
    
  }

  function check2(){
   for(let num=1; num<=10; num++){
    console.log(num);
   }
}

function check3(){
    for(let num=5; num<=13; num++){
     console.log(num);
    }
 }

function check4(){
    let result=''// 결과 저장용 변수에 빈칸(string);
    for(let num=1; num<=5; num++){
        result+=num; //result = result + num;
    }
    console.log(result); // '12345'
 }

function check5(){
    let sum= 0;// 결과 저장용 변수에 빈칸(string);
    for(let num=1; num<=10; num++){
        sum+=num; //result = result + num;
    }
    console.log(sum); // '12345'
 }

/** 1부터 10까지 2씩 증가하며 출력하기 */
function check6(){

    // 증감식을 2씩 증가하도록 변경(복합 대입 연산자 사용)
    for(let num=1 ; num <= 10 ; num += 2){
      console.log(num);
    }
  }

  //1부터 10까지 2씩 증가한 숫자의 합 출력하기
  function check7(){

    // 증감식을 2씩 증가하도록 변경(복합 대입 연산자 사용)
    for(let num=3 ; num <= 30 ; num += 3){
      console.log(num);
    }
  }