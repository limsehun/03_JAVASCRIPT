/** break 확인 */
function check1(){

  


}
/** break 확인 */
function check1(){

  // 1부터 10까지 1씩 증가하는 반복문
  // 단, 5를 출력한 후 멈춤
  for(let num = 1 ; num <= 10 ; num++){
    console.log(num);
    if (num===5) {
        break;
    }
  }

}

/*무한반복멈추기 */
function check2() {
    
    let sum=0; //합계저장변수
    //while문은 조건식이ture일때 작동하는데 조건식에true 라고 작성하면 조선식이 false가 되지 않음->무한반복
    //무한반복하는 코드에는 break를 포함하는 if문을 작성해서 종료 조건을 만들어 두어야만 한다!!!!!!!!!!!
    while (true) {
        const value = prompt("숫자 입력"); // 취소 -> null
        //취소 클릭시 반복종료
        if (value===null) break;

        //확인 클릭시 sum에 입력한 숫자를 누적
        sum += Number(value);    
        
    }
    alert("합계 : " +sum);
}

/** continue 확인 */
function check3(){
    // 1부터 20까지 1씩 증가하는 반복문s
    // 단, 3의 배수는 건너뛰기

    for (let num = 1; num <= 20; num++) {

        // 3의 배수인 경우 건너뛰기
        if(num % 3 === 0) continue;
    
        console.log(num);
      }

}


/**continue+중첩 반복문에서의 분기문 */
function check4() {

    //1~9를 5줄 출력
    //단 각 줄에서 각 줄의 숫자는 제외

    for(let row = 1 ; row <= 5 ; row++){ // 행 제어

        let str = ''; // 문자열 형태로 누적하기 위한 변수 선언
        for(let col = 1 ; col <= 9 ; col++){ // 열 제어
          if (row===col) continue;//n줄인 경우n여 삭제
          str += col; //이어쓰기
        }

    console.log(str);//한 줄 출력
        
    }
    
}

//---------------------------------------------

/* UP & DOWN GAME */
function startGame(){

    // 맞춰야되는 난수 발생
    const answer =
      Math.floor(Math.random()*200)+1

      //test
      console.log("정답:", answer)
      //----------------------------------
      //
      let count = ;
      //--------------------------------------
      while (true) {(무한반복)
        //숫자만 정상입력한다고 가정
    let input= Number(prompt(`1부터200사이의 숫자 입력(${count}회 시도)`))
        
      }
}