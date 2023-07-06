//displays current date and time at the top of the page
$('currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

//clearing the local storage
for (let i=0; i<11; i++) {
  if (window.localStorage.getItem(i) === null) {
    window.localStorage.setItem(i, "");
  }
}

//loop to classify if the time 
const timeBlock = document.querySelectorAll("time-block");
//or is it (".time-block");
let currentHour = dayjs().hour();
for (let i = 0; i <11; i++){
  let blockHour = parseint(timeBlock.getAttribute("id"));
  if (blockHour < currentHour) {
   timeBlock.classList.add(" past");
  }
  else if (blockHour === currentHour) {
    timeBlock.classList.add(" present");
  } 
  else if (blockHour > currentHour) {
    timeBlock.classList.add(" future");
  }
}

//on button click, asigns user entered text to the ID
  $('button').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());
  })
