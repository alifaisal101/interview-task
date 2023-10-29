// Utility functions for date mappings and calculations

// Maps month number to Simplified month name
const monthMap = (monthNumber) => {
  const monthNumbToName = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };
  return monthNumbToName[monthNumber];
};

// Validate month to the correct value if it goes beyond 12 or below 1
const validateMonth = (monthNumb) => {
  if (monthNumb > 12) {
    return monthNumb - 12;
  } else if (monthNumb < 1) {
    return monthNumb + 12;
  } else {
    return monthNumb;
  }
};

// Function that takes the current year and current month, and gives back an array of objects, containing the week day, and the day in the month

const getDaysArray = (function () {
  const names = Object.freeze([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]);
  return (year, month) => {
    const monthIndex = month - 1;
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() == monthIndex) {
      result.push({
        dayInMonth: `${date.getDate()}`,
        dayOfTheWeek: `${names[date.getDay()]}`,
      });
      date.setDate(date.getDate() + 1);
    }
    return result;
  };
})();
