fetch('data.json')
    .then(response => response.json())

const btnNav = document.querySelectorAll('.periodbtn');

btnNav.forEach((button) => {
    button.addEventListener('click', () => {
        btnNav.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        verifyPeriod();
    })
})

const textDaily = document.querySelectorAll ('.periodDay');
const textWeekly = document.querySelectorAll ('.periodWeek');
const textMonthly = document.querySelectorAll ('.periodMonth');

const timeWorkcurrent = document.getElementById ('timeWorkcurrent');
const timePlaycurrent = document.getElementById('timePlaycurrent');
const timeStudycurrent = document.getElementById('timeStudycurrent');
const timeExercisecurrent = document.getElementById('timeExercisecurrent');
const timeSocialcurrent = document.getElementById('timeSocialcurrent')
const timeCarecurrent = document.getElementById ('timeCarecurrent');

const verifyPeriod = () => {
    const daily = document.getElementById ('daily');
    const weekly = document.getElementById ('weekly');
    const monthly = document.getElementById ('monthly');

    if (daily.classList.contains('active')) {
        textDaily.forEach((day) => day.classList.remove('hide'));
        textWeekly.forEach((week) => week.classList.add('hide'));
        textMonthly.forEach((month) => month.classList.add('hide'));
    } else if (weekly.classList.contains('active')){
        textDaily.forEach((day) => day.classList.add('hide'));
        textWeekly.forEach((week) => week.classList.remove('hide'));
        textMonthly.forEach((month) => month.classList.add('hide'));
    } else {
        textDaily.forEach((day) => day.classList.add('hide'));
        textWeekly.forEach((week) => week.classList.add('hide'));
        textMonthly.forEach((month) => month.classList.remove('hide'));
    }
}

