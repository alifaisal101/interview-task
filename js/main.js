// const moment = require('moment');

document.addEventListener('DOMContentLoaded', function () {
  // The current month and year in number
  const currnetYearNumber = moment().year();
  const currentMonthNumber = moment().month();

  // The current, last, and next month mapped to their names
  const lastMonth = monthMap(validateMonth(moment().month() - 1));
  const currentMonth = monthMap(currentMonthNumber);
  const nextMonth = monthMap(validateMonth(moment().month() + 1));

  // Assigning the months to the elements
  document.querySelector('#last-month').innerHTML = lastMonth;
  document.querySelector('#next-month').innerHTML = nextMonth;

  // An array containing the days of the month
  const daysObjects = getDaysArray(currnetYearNumber, currentMonthNumber);

  // days list html element
  const daysListElem = document.querySelector('#days_list');
  for (let i = 0; i < daysObjects.length; i++) {
    daysListElem.innerHTML += dayItemElem(
      daysObjects[i].dayOfTheWeek,
      daysObjects[i].dayInMonth
    );
  }

  // Add time items to time list

  // time list html element
  const timeListElem = document.querySelector('#time_list');
  for (let i = 0; i < 24; i++) {
    let time = '';
    if (i >= 13) {
      time = `${i - 12} PM`;
    } else if (i <= 0) {
      time = `${i + 12} AM`;
    } else {
      time = `${i} AM`;
    }
    timeListElem.innerHTML += timeItemElem(time);
  }

  // Dragging Functionality

  const dragging = (querySelector) => {
    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector(querySelector);

    const startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = (e) => {
      mouseDown = false;
    };

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    };

    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  };

  dragging('#days_list');
  dragging('.app-events_container');
});
