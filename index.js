let playing = false;
let timerId;
const play = document.querySelector('.timer_play');
const stop = document.querySelector('.timer_stop');
const app = document.querySelector('.pomo_app');
const set = document.querySelector('.pomo_set');
const pocustime = document.querySelector('.pocus_time');
const resttime = document.querySelector('.rest_time');
const timerepeat = document.querySelector('.timer_repeat');
const timemin = document.querySelector('.time_min');
const timesec = document.querySelector('.time_sec');
const times = document.querySelector('.times');


function time_end() {
  playing = false;
  app.style.background = '#47C7FC';
  play.style.display = "block";
  stop.style.display = "none";
  set.style.display = "block";
  times.style.display = "none";
  timemin.innerText = 0;
  timesec.innerText = 0;
}




const playbtn_click = () => {  
  let repeat = Number(timerepeat.value);
  let min =Number(timemin.innerText);
  let sec =Number(timesec.innerText);
  app.style.background = '#F77D7D';
  times.style.display = "block";
  min = pocustime.value;
  playing = true;
  stop.style.display = "block";
  play.style.display = "none";
  set.style.display = "none"; 

  for(repeat; 10 < repeat > 0; repeat--) {  // 
    (function dec_time() {  
    if(min > 0 && sec == 0) {      
      min = min - 1;
      sec = 59;
      timemin.innerText = min;
      timesec.innerText = sec;
    } else if (sec > 0) {
      sec--
    } else if (min <= 0 && sec == "00") {
      if(app.style.backgroundColor === 'green') { // 나중에 변수 따로 지정하기
        time_end()
        clearTimeout(timerId)
      }
      min = resttime.value;
      timemin.innerText = min;
      app.style.backgroundColor = 'green';
    }
    if(sec < 10) {
      sec = String("0"+sec).slice(-2)
    }
    timemin.innerText = min
    timesec.innerText = sec;
    console.log(`${min}:${sec}`)
    if(playing) {
      timerId = setTimeout(dec_time,1000)
    }
  })()
}
}

const stopbtn_click = () => {
  clearTimeout(timerId)
  time_end()
  
}




