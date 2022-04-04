const swiper = new Swiper('.swiper', {
	speed: 400,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
  });


// Calendar
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay()-1;

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex;

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

  document.querySelector(".calendar__date__title").innerHTML = months[date.getMonth()] + " " + date.getFullYear();


  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  if (nextDays != 7) {
	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
	  }
  }
  console.log("nextDays = " + nextDays);
  console.log("lastDayIndex = " + lastDayIndex);
  console.log("date = " + date.getMonth());
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector(".calendar-mobileIcon").addEventListener("click", () => {
  document.querySelector(".calendar").style.display = (document.querySelector(".calendar").style.display == "none") ? "block" : "none";
});

// End Calendar

document.addEventListener('DOMContentLoaded', function() {

	renderCalendar();
  const date = new Date();
  document.querySelector("#currentDate").innerHTML = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

});