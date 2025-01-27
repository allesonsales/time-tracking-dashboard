const fetchData = () => {
    fetch('./data.json')
    .then(resposta => resposta.json())
    .then((data) => {
        const dataFetch = data;
        dados(dataFetch);   
    })
    .catch(error => console.error(error));
};

fetchData();

const dados = (dataFetch) => {
    dataFetch.forEach((dataFetch) => {
        const { title, timeframes } = dataFetch;
        const { daily, weekly, monthly } = timeframes;
        const titleFormated = `${title}`.toLowerCase().replace(/\s+/g,'');

        const card = document.createElement ('div');
        card.classList.add(`card-${titleFormated}`);
        card.innerHTML = `
            <div class="card-background">
            </div>
            <div class="card-content">
                <div class="card-content-title">
                    <span>${title}</span>
                    <img src="./images/icon-ellipsis.svg" alt="">
                </div>
                <div class="card-content-hours">
                    <div class = "periodDay hide">
                        <span id="timePlaycurrent">${daily.current}hrs</span>
                        <p>Yesterday - ${daily.previous}hrs</p>
                    </div>
                    <div class = "periodWeek">
                        <span id="timePlaycurrent">${weekly.current}hrs</span>
                        <p>Last Week - ${weekly.previous}hrs</p>
                    </div>
                    <div class = "periodMonth hide">
                        <span id="timePlaycurrent">${monthly.current}hrs</span>
                        <p>Last Month - ${monthly.previous}hrs</p>
                    </div>
                </div>
            </div>`;

        const principalcard = document.querySelector('.card.principal');
        principalcard.insertAdjacentElement('afterend',card);
        });
    };

const btnNav = document.querySelectorAll('.periodbtn');

btnNav.forEach((button) => {
    button.addEventListener('click', () => {
        btnNav.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        verifyPeriod();
    });
});

const verifyPeriod = () => {
    const daily = document.getElementById ('dailyBtn');
    const weekly = document.getElementById ('weeklyBtn');
    const monthly = document.getElementById ('monthlyBtn');
    const textDaily = document.querySelectorAll ('.periodDay');
    const textWeekly = document.querySelectorAll ('.periodWeek');
    const textMonthly = document.querySelectorAll ('.periodMonth');

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
};
