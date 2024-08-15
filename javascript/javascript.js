//stopwatch 


const hours = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
let isRun = false;


const reset = () => {
    hours.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
}

const start = () => {
    isRun = true;
}


setInterval(() =>{
    if(isRun == true){
        sec.innerHTML=Number(sec.innerHTML)+1;
        if(sec.innerHTML>59){
            min.innerHTML=Number(min.innerHTML)+1;
            sec.innerHTML= "00";
            if(min.innerHTML>59){
                hours.innerHTML=Number(hours.innerHTML)+1;
                min.innerHTML="00";
            }
        }
    }
            
},1000)

//  stop the stopwatch

const stop = () => {
    isRun = false;
}

