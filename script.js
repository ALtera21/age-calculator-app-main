document.getElementById('calculate-date').addEventListener('click', calculateAge);

function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Month is zero-indexed
    const year = parseInt(document.getElementById('year').value);
    const errorDay = document.querySelector('.day-error');
    const errorMonth = document.querySelector('.month-error');
    const errorYear = document.querySelector('.year-error');
    errorDay.innerHTML = '';
    errorMonth.innerHTML = '';
    errorYear.innerHTML = '';
    const dayStr = document.querySelector('.day-string');
    const monthStr = document.querySelector('.month-string');
    const yearStr = document.querySelector('.year-string');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dob = new Date(year, month, day);
    const today = new Date();

    let yearResults;
    let monthResults;
    let dateResults;

    if((today.getFullYear() >= dob.getFullYear()) && (today.getMonth() >= dob.getMonth()) && (today.getDate() >= dob.getDate())){
        yearResults = today.getFullYear() - dob.getFullYear();
        monthResults = today.getMonth() - dob.getMonth();
        dateResults = today.getDate() - dob.getDate();
    }

    else if((today.getFullYear() >= dob.getFullYear()) && (today.getMonth() < dob.getMonth()) && (today.getDate() >= dob.getDate())){
        yearResults = today.getFullYear() - 1 - dob.getFullYear();
        monthResults = today.getMonth() + 12 - dob.getMonth();
        dateResults = today.getDate() - dob.getDate();
    }

    else if((today.getFullYear() >= dob.getFullYear()) && (today.getMonth() >= dob.getMonth()) && (today.getDate() < dob.getDate())){
        yearResults = today.getFullYear() - dob.getFullYear();
        monthResults = today.getMonth() - dob.getMonth() - 1;
        if (dob.getMonth() == 0 || 2 || 4 || 6 || 7 || 9 || 11) {
            dateResults = today.getDate() + 31 - dob.getDate();    
        }
        else {
            dateResults = today.getDate() + 30 - dob.getDate();
        } 
    }

    else if ((today.getFullYear() >= dob.getFullYear()) && (today.getMonth() < dob.getMonth()) && (today.getDate() < dob.getDate())) {
        yearResults = today.getFullYear() - 1 - dob.getFullYear();
        monthResults = today.getMonth() + 12 - dob.getMonth();
        if (dob.getMonth() == 0 || 2 || 4 || 6 || 7 || 9 || 11) {
            dateResults = today.getDate() + 31 - dob.getDate();    
        }
        else {
            dateResults = today.getDate() + 30 - dob.getDate();
        }
    }

    else{
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (dob > today) {
        errorYear.innerHTML = "Must be in the past.";
        yearStr.style.color = "red";
        yearInput.style.border = "1px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (dob.getDate() !== day) {
        errorDay.textContent = "Must be a valid day";
        dayStr.style.color = "red";
        dayInput.style.border = "2px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (dob.getMonth() !== month) {
        errorMonth.innerHTML = "Must be a valid month";
        monthStr.style.color = "red";
        monthInput.style.border = "2px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (isNaN(day)) {
        errorDay.innerHTML = "This field is required";
        dayStr.style.color = "red"
        dayInput.style.border = "2px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (isNaN(month)) {
        errorMonth.innerHTML = "This field is required";
        monthStr.style.color = "red"
        monthInput.style.border = "2px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    if (isNaN(year)) {
        errorYear.innerHTML = "This field is required";
        yearStr.style.color = "red"
        yearInput.style.border = "2px solid red";
        yearResults = "--";
        monthResults = "--";
        dateResults = "--";
    }

    document.getElementById('year-results').innerHTML = yearResults;
    document.getElementById('month-results').innerHTML = monthResults;
    document.getElementById('day-results').innerHTML = dateResults;
}
