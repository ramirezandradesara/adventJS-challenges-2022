const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

function countHours(year, holidays) {
    let extraHours = 0

    holidays.map(day => {
        let fullDate = year + "/" + day
        let holiday = new Date(fullDate)

        if (holiday.getDay() !== 0 && holiday.getDay() !== 6) {
            extraHours += 2
        };
    });

    return extraHours;
}

countHours(year, holidays)
