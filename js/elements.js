// Element functions, for creating and reusing elements

const dayItemElem = (dayInWeek, dayNumber) => {
  return `
    <div class="app-days_list-day_item" id="selected_day">
        <div class="app-days_list-day_item-day_name">${dayInWeek}</div>
        <div class="app-days_list-day_item-day_number">${dayNumber}</div>
    </div>
    `;
};

const timeItemElem = (time) => {
  return `
    <div class="app-events-time_list-time_item">${time}</div>
  `;
};
