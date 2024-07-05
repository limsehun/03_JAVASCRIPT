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

  //1부터 20까지 4의 배수만 출력하고 합계를 구하기
  function check8() {

    let sum = 0; //합계 저장용 변수 

    for (let num=1; num<=20;num++) {
      if (num % 4 === 0){
         console.log(num);
         sum+= num;//합계누적
      }
    }
    console.log("합계: ",sum);
  }

  
/**입력 받은 범위 내 지정된 배수 출력 / 합계 구하기 */
function check9(){

  // 기능 수행에 필요한 요소들 모두 얻어오기
  const start    = document.getElementById("start9");
  const end      = document.getElementById("end9");
  const multiple = document.getElementById("multiple9");

  // input 요소에 작성된 값을 얻어와 숫자로 변환해서 저장
  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  let sum = 0; // 합계저장용

  for(let num = s;num<=e;num++){

    if(num%m===0){//지정배수(m)가맞을경우
      console.log(num);
      sum+=num;

    }
  }

  console.log("합계 : ", sum);

}


/** 입력 받은 단(2~9)의 구구단 출력하기 */
function check10(){

  // dan이 입력되는 요소 얻어오기
  const input = document.getElementById("dan10");

  //
  if (input.value.lenght===0) {
    alert("단을 입력해");
    return;
  }
  //단이2~9사이가 아닐경우
  const dan = Number(input.value);

  if(dan<2||dan>9){
    alert('2에서9사이로 입력');
    return;
  }

//구구단 출력
for (let num = 1; num <=9;num++){
  console.log(`${dan}X${num}=${dan*num}`);
}
}

function check11() {
  for(let num = 10; num>0 ;num--){
    console.log(num);
  }  
}

function check12(){
  const input = document.getElementById("dan12");

  if (input.value.lenght===0) {
    alert("단을 입력해");
    return;
  }

  const dan = Number(input.value);

  if(dan<2||dan>9){
    alert('2에서9사이로 입력');
    return;
  }
  for (let num = 9; num >=1;num--){
    console.log(`${dan}X${num}=${dan*num}`);
  }
}


/** 특정 배수 마다 지정된 모양으로 출력하기 */
function check13(){

  // 기능 수행에 필요한 요소 모두 얻어오기
  const input=document.getElementById("input13");
  const output=document.getElementById("output13");
  const result=document.getElementById("result13");

  //배수
  const multiple=Number(input.value);

  //출력
  const shape=output.value;

  let str=''; //출력된 문자열을 저장할 변수

  //1~20까지 1씩 증가하는 반복문
  for (let num = 1; num <= 20; num++){
     // 현재 반복되는 숫자가 multiple의 배수인 경우
    if(num%multiple===0){
      //console.log(shape);
      str+=`${shape} `; 
    } else { // 배수가 아니면 현재 반복 숫자 출력
      //console.log(num);
     str+=`${num} `;
    }
    //num===10인 경우 줄을 변경<br>을 추가
    if(num===10) str+="<br>"; //한 줄인 경우 {}생략가능
   }
  //화면에 결과 출력
  result.innerHTML=str;

  }