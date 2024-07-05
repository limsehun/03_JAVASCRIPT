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

  function check14(){
  for (let row = 1; row <=3; row++){
    let str = '';//한 행에 출력될 문자열 을 저장할 변수
    //1행마다4번 반복
    for(let col = 1; col<=4; col++){
      str+=col;
    }
    //안쪽for문 반복결과 출력
    console.log(str);
    console.log("-------------------------")
  }
}

  /* 
  12345
  12345
  12345
  12345 
*/
function check15(){

  for(let row = 0 ; row < 4 ; row++){ // 4행 반복

    let str = '';

    for(let col = 0 ; col < 5 ; col++){ // 5열 반복
      str += (col + 1); // 12345
    }
    console.log(str);
  }
}


function check16() {
  for(let row=0 ; row<3 ; row++){ // 0,1,2 3회 반복

    let str = '';
    for(let col=6 ; col >=1 ; col--){
      str += col;
    }
    console.log(str);
  }
}

function check17() {
  for (let row = 1; row <= 4; row++) {
    let str = ''; 
    for(let col=1 ; col <=row ; col++){
      str += col;
    }
    console.log(str);
  }
  
}

function check18() {
  for (let row = 1; row <= 4; row++) {
    let str = ''; 
    for(let col= 1 ; col <=row ; col++){
      str += '*';
    }
    console.log(str);
  }
  
}

/*function check19() {
  for (let row = 1; row <= 5; row++) {
    let str = ''; 
    for(let col=row ; col <= 5; col++){
      str += col;
    }
    console.log(str);
  }
}*/

function check19(){

  for(let row = 5 ; row >= 1 ; row--){

    let str='';
    for(let col = 1 ; col <= row ; col++){
      str += col;
    }
    console.log(str);
  }

}

  
  
/**1부터 30 사이의 정수 중 4의 배수의 개수 구하기 */
function check20(){
  let count =0; //배수를 세기위한 변수

  for(let num = 1 ; num <= 30 ; num++){
    if (num % 4 ===0/*4의 배수인 경우*/) {
      count++; //count1증가
    }
  }
  alert(`count:${count}`)
}


function check21(){
  let count =0;
  const input = document.getElementById("input21");
  const value = Number(input.value);

  for(let num = 1 ; num <= 100 ; num++){
    if (num % value ===0/*4의 배수인 경우*/) {
      count++; //count1증가
    }
  }
  alert(`count:${count}`)
}

function check22(){

  let count =1;

  // 3행 4열 - 2중 for문

  for(let row = 1 ; row <= 3 ; row++){

    let str = '';
    for(let col = 1 ; col <= 4 ; col++ ){
      //str += count;//count값 대입
      //count++//count값 1증가
      str+=count++; //==위 두 줄
    }
    console.log(str);

  }
}

/* while */
/** 0이 입력될 때 까지 입력된 값 누적하기 */
function check23(){

  let sum = 0; // 누적용 변수

  let value;
  // 입력된 숫자가 0이 아니면 반복
  while( value = Number(prompt("숫자 입력")) != 0 ){
    sum += value; // 누적
  }

  alert(`합계 : ${sum}`);

}