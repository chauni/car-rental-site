"use strict";

// gather inputs
const pickupDateEl = document.getElementById('pickupDate');
const numOfDaysEl = document.getElementById('numOfDays');

const tollTagEl = document.getElementById('tollTag');
const gpsEl = document.getElementById('gps');
const roadsideAstEl = document.getElementById('roadsideAst');

const not25RadioEl = document.getElementById('not25');
const yes25RadioEl = document.getElementById('yes25');

const estimateTotalBtnEl = document.getElementById('estimateTotalBtn');
estimateTotalBtnEl.onclick = onEstimateBtnClicked;

// perform calculation

function onEstimateBtnClicked() {
    console.log('hello')

    const userDate = new Date(pickupDateEl.value);
    const userNumOfDays = numOfDaysEl.value;
    const basicCarRental = 29.99 * userNumOfDays;

    let extraPerDay = 0;
     if (tollTagEl.checked == true) {
        extraPerDay += 3.95
    } if (gpsEl.checked == true) {
        extraPerDay += 2.95
    } if (roadsideAstEl.checked == true) {
        extraPerDay += 2.95
    } 
    

    let surchargeAmount = 0;
        if (not25RadioEl.checked == true) {
            surchargeAmount * .30
    }

    const carRentalOutputEl = document.getElementById('carRentalOutput')
    carRentalOutputEl.innerHTML = basicCarRental

    
    const optionsOutputEl = document.getElementById('optionsOutput');
    const optionsAdded = extraPerDay * userNumOfDays
    optionsOutputEl.innerHTML = optionsAdded.toFixed(2)

    
    const ageSurchargeEl = document.getElementById('ageSurcharge')
    const surchargeApplied = surchargeAmount * basicCarRental
    ageSurchargeEl.innerHTML = surchargeApplied.toFixed(2);

    const userDateOutPutEl = document.getElementById('userDateOutput')
    userDateOutPutEl.innerHTML = userDate.toDateString()

    const totalCostOutputEl = document.getElementById('totalCostOutput');
    const totalCostDue = basicCarRental + optionsAdded + surchargeApplied
    totalCostOutputEl.innerHTML = totalCostDue.toFixed(2)
    
    
}



