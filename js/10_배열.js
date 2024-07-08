/** 배열 선언 및 기초 사용법 */
function check1(){

    // 배열 선언
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과','딸기', '바나나'];

    console.log(arr1, arr2, arr3, arr4);

    /* 배열명.length : 배열의 길이*/
    console.log(arr1.length, arr2.length, arr3.length, arr4.length)

    /* 배열의 각 요소 접근 방법(index 이용) */

    // 배열명[index]->index번째 요소에 저장된 값을 반환
    console.log('arr4[0] : ', arr4[0]); // 사과
    console.log('arr4[1] : ', arr4[1]); // 딸기
    console.log('arr4[2] : ', arr4[2]); // 바나나
    console.log('arr4[3] : ', arr4[3]); // undefiend

    // 배열명[index] = 값;  -> 해당 index번째 요소에 값 대입
    arr2[0] = 123;
    arr2[1] = '덥다';
    arr2[2] = true;
   // (JS 배열은 여러 자료형 저장 가능)

   console.log("arr2 : " ,arr2);

   //---------------------------------------------

   /* JS 배열 특징 이용하기 */

   // 1. 길이 제한이 없다
   //  -> 원하는 만큼 배열 요소를 추가할 수 있다
   arr1[0] = '가나다';
   arr1[1] = '라마바';
   arr1[2] = '사아자';
   console.log("값이 대입된 arr1: ", arr1);

   // 2. 원하는 index에 값을 마음대로 추가할 수 있다
   // -> 중간에 건너뛴 index요소는 빈 칸으로 처리됨
   arr1[5] = '중간에 건너뜀';
   console.log("arr1 확인 : ", arr1);



}


/*배열 X for문 확인 1*/
function check2() {
    const weeks = ['월', '화', '수', '목', '금', '토', '일'];
    //weeks.lenght == 7
    //weeks의 마지막 index번호 == 6 ==weeks 길이 -1

    for (let i = 0; i < weeks.length; i++) {
        //0부터 7미만까지(==6이하) 까지 1씩증가
        console.log(weeks[i]);
        
    }
}

/*배열 X for문 확인 2 */
function check3() {
    /* 배열 요소에 순차적으로 값 초기화하기 */

    const arr = []; //빈 배열 생성

    // 0~3 까지 1씩 증가
    for (let i = 0; i < 4; i++){// 0 1 2 3
        arr[i] = prompt(`${i}번째 인덱스 요소 값 입력`);        
    }

    console.log(arr);
}


/** 배열 X for문 확인 3 */
/* 
  prompt를 이용해서 숫자 5개를 입력 받아 배열에 저장 후
  저장된 값, 합계, 평균을 console에 출력하기

  ex) 1,2,3,4,5 입력
  저장된 값 : [1,2,3,4,5]
  합계 : 15
  평균 : 3
*/
function check4() {
    const arr = new Array(5); // 5칸 짜리 배열 생성

    let sum = 0; // 합계 저장용 변수

    // for 문 작성(0~4까지 1씩 증가)
    for(let i = 0; i < arr.length ; i++){

        //입력 받자마자  number타입으로 변환하여 배열요소에 저장
        arr[i]= Number(prompt(`${i}번째 요소에 저장할 숫자 입력`));

        sum += arr[i];   //합계 누적
    }

    console.log("저장된 값 : ", arr);
    console.log(" 합계 : ", sum);
    console.log("평균 : ", sum / arr.length);
    

}

/*배열 X for문 확인 4 */
/* 배열에 0부터 배열 길이 미만의 난수 저장하기 */
function check5() {
    
    const leng = Number(prompt("성성할 난수 범위 지정(미만)"))

    const arr = []; //빈 배열 생성

    for(let i = 0; i < leng ; i++){
        
        //0이상 leng 미만의 난수 발생
        const randomNumber = Math.floor(Math.random()*leng)

        arr[i] = randomNumber;
    }

    console.log("결과 : ", arr)

}

/** 로또 번호 생성기 */
/* 1 ~ 45 사이 난수 6 개 생성
 단, 중복 X, 오름 차순 정렬
 */

 function check6() {
    
    const lotto = []; //난수 저장 배열 생성

    for(let i=0; i<6; i++){
        const randomNumber
        =Math.floor(Math.random()*45)+1;

        //  일단 배열에 난수 대입
        lotto[i] = randomNumber;

        // -> 앞에 중복되는 숫자 있는지 확인
        for (let x = 0; x < i; x++){
            // 중복 검사
            //i번째 저장하려는 값이 x번째에 존재하는가?
            if ( lotto[x]===lotto[i] ){// 중복값이 존재함
                // -> 있으면 현재 index에 머물기
                
                //난수를 저장하기 위한 index를 지정하는 i값을 1 감소
                // -> 바깥쪽 for문의 증감 i++에 의해 다시 1 증가
                // -> 결과적으로 i값 변화 X
                i--; 
                break;// 불필요한 중복검사 멈춤(효휼 UP)
        
            }
        }

        // -> 없으면 다음 index로 이동

    }
        //배열 내 숫자 정렬 방법
        lotto.sort(function(a,b) {
            return(a-b)
        });

        console.log(lotto);

        document.getElementById("result6").innerText = lotto;

 }

 /** 점심 메뉴 뽑기 */
function selectMenu(){

    // 점심 메뉴로 초기화된 배열 생성
    const menus = ["라면 + 김밥", "제육볶음","치즈 돈까스", "샐러드", "맘스터치", 
        '알탕', '치킨', '파전', '짜장면', '김치찌개', '김밥', '우동'];
        // menu 배열에서 랜덤으로 하나 뽑아서 화면의 #menuresultdp 출력
       /* const arr = []; //빈 배열 생성

        for(let i = menus; i <= 1; i){
            
            //0이상 leng 미만의 난수 발생
            const randomNumber = Math.floor(Math.random()*12)+1;
    
            arr[i] = randomNumber;
        }

        console.log(menus[i]);

        document.getElementById("menuResult").innerText = menus;*/

        // 0부터 배열 길이 미만의 정수형 난수를 생성
  const randomNumber
  = Math.floor( Math.random() * menus.length );

  //화면에 출력
  document.getElementById("menuResult").innerText
  =menus[randomNumber]

  }