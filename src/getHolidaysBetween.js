const assertDateRange = require('./assertDateRange');
const isHoliday = require('./isHoliday');
const { forEachDate } = require('./util');

module.exports = function getHolidaysBetween (date1, date2) {
    const result = [];
    assertDateRange(date1);
    assertDateRange(date2);
    forEachDate(date1, date2, function (curDate) {
        if (isHoliday(curDate)) {
            result.push(curDate.format('YYYY-MM-DD'));
        }
    });
    return result;
};
