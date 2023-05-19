const btn = document.querySelector(".btn");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const labels = document.querySelectorAll(".label");
const dayErrorText = document.getElementById("day-error");
const monthErrorText = document.getElementById("month-error");
const yearErrorText = document.getElementById("year-error");
const yearsResult = document.getElementById("years-result");
const monthsResult = document.getElementById("months-result");
const daysResult = document.getElementById("days-result");
const inputs = document.querySelectorAll(".input");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");



function dayError() {
    dayErrorText.innerHTML = "This field is required";
    day.classList.add("input-error");
    dayLabel.classList.add("red");
}

function dayOk() {
    dayErrorText.innerHTML = "";
    day.classList.remove("input-error");
    dayLabel.classList.remove("red");
}

function monthError() {
    monthErrorText.innerHTML = "This field is required";
    month.classList.add("input-error");
    monthLabel.classList.add("red");
}

function monthOk() {
    monthErrorText.innerHTML = "";
    month.classList.remove("input-error");
    monthLabel.classList.remove("red");
}

function yearError() {
    yearErrorText.innerHTML = "This field is required";
    year.classList.add("input-error");
    yearLabel.classList.add("red");
}

function yearOk() {
    yearErrorText.innerHTML = "";
    year.classList.remove("input-error");
    yearLabel.classList.remove("red");
}



function checkDay() {
    if(day.value == "") {
        dayError()
    }
    else if (day.value <= 0 || day.value > 31) {
        dayError();
        dayErrorText.innerHTML = "Must be a valid day";
    }
    else {
        dayOk()
        return true
    }
}

function checkMonth() {
    if(month.value == "") {
        monthError()
    } 
    else if (month.value <= 0 || month.value > 12){
        monthError();
        monthErrorText.innerHTML = "Must be a valid month"
    }
    else {
        monthOk()
        return true
    }
}

function checkYear() {
    if(year.value == "") {
        yearError()
    }
    else if (year.value <= 0) {
        yearError();
        yearErrorText.innerHTML = "Must be a valid year"
    }
    else if (year.value > 2023) {
        yearError();
        yearErrorText.innerHTML = "Must be in the past"
        
    }
    else {
        yearOk()
        return true
    }
}


function calculateAge(){
    let birthDay = day.value;
    let birthMonth = month.value;
    let birthYear = year.value;

    const EPOCH = new Date(0);
    const EPOCH_YEAR = EPOCH.getUTCFullYear();
    const EPOCH_MONTH = EPOCH.getUTCMonth();
    const EPOCH_DAY = EPOCH.getUTCDate();


    let birthDate =  `${birthMonth}/${birthDay}/${birthYear}`;
    let birthdayObj = new Date(birthDate);

    let diff = new Date(Date.now() - birthdayObj.getTime());

    let ageDay = Math.abs(diff.getUTCDate() - EPOCH_DAY);
    let ageMonth = Math.abs(diff.getUTCMonth() - EPOCH_MONTH);
    let ageYears = Math.abs(diff.getUTCFullYear() - EPOCH_YEAR);


    daysResult.textContent = ageDay;
    monthsResult.textContent = ageMonth;
    yearsResult.textContent = ageYears;
    
}

btn.addEventListener("click", () => {
    if(checkDay() & checkMonth() & checkYear()) {
        calculateAge();
    }
})



