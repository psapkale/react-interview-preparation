const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const meridiem = document.querySelector(".meridiem");

console.log(hours, minutes, parseInt(seconds.innerText));

setInterval(() => {
   let s = parseInt(seconds.innerText);
   s++;
   if (s < 10) {
      s = "0" + s;
   }
   seconds.innerText = s;

   let m = parseInt(minutes.innerText);
   if (s > 59) {
      m++;
      if (m < 10) {
         m = "0" + m;
      }
      minutes.innerText = m;
      seconds.innerText = "00";
   }

   let h = parseInt(hours.innerText);
   if (m > 59) {
      h++;
      if (h < 10) {
         h = "0" + h;
         hours.innerText = h;
      }
      if (h > 12) {
         hours.innerText = "01";
         meridiem.innerText = meridiem.innerText === "AM" ? "PM" : "AM";
      }
      minutes.innerText = "00";
      seconds.innerText = "00";
   }
}, 1000);
