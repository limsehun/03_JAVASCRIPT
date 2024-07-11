
// 기준이 되는 박스
const standard = document.querySelector("#standard");

const btns = document.querySelectorAll(".btn"); //버튼들

let count = 1; //1씩 증가하면소 요소 내용으로 추가

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click",()=>{

        const str = btns[i].innerText; //작성된 버튼 내용
        //console.log(str);

        switch (str) {
            case "prepend":
                const span1=document.createElement("span"); //span생성
                span1.innerText = count; //span 내용으로 count 추가
                span1.style.backgroundColor="skyblue";
                standard.prepend(span1); //#standard 첫 번재 자식으로 span1 추가
            break;
        
            case "append":
                const span2=document.createElement("span");
                span2.style.backgroundColor="lightsalmon";
                span2.innerText=count;
                standard.append(span2); //#standard의 마지막 자식으로 span2추가
            break;
        }

        count++; // count 1 증가

    });
    
}
