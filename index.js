"use strict";

const pickupDateEl = document.getElementById('pickupDate');
const numOfDaysEl = document.getElementById('numOfDays');

const tollTagEl = document.getElementById('tollTag');
const gpsEl = document.getElementById('gps');
const roadsideAstEl = document.getElementById('roadsideAst');

const not25RadioEl = document.getElementById('not25');
const yes25RadioEl = document.getElementById('yes25');

const estimateTotalBtnEl = document.getElementById('estimateTotalBtn');
estimateTotalBtnEl.onclick = onEstimateBtnClicked;


