"use strict";
let objectivebtn = document.getElementById('objectivebtn');
let Educationbtn = document.getElementById('Educationbtn');
let skillsbtn = document.getElementById('skillsbtn');
let WorkExpbtn = document.getElementById('WorkExpbtn');
let objectivesec = document.getElementById('objectivesec');
let eduSec = document.getElementById('eduSec');
let skillSec = document.getElementById('skillSec');
let workExpSec = document.getElementById('workExpSec');
objectivebtn?.addEventListener('click', () => {
    if (objectivesec?.style.display == 'block') {
        objectivesec.style.display = 'none';
    }
    else {
        objectivesec.style.display = 'block';
    }
});
Educationbtn?.addEventListener('click', () => {
    if (eduSec.style.display == 'block') {
        eduSec.style.display = 'none';
    }
    else {
        eduSec.style.display = 'block';
    }
});
skillsbtn?.addEventListener('click', () => {
    if (skillSec.style.display == 'block') {
        skillSec.style.display = 'none';
    }
    else {
        skillSec.style.display = 'block';
    }
});
WorkExpbtn?.addEventListener('click', () => {
    if (workExpSec.style.display == 'block') {
        workExpSec.style.display = 'none';
    }
    else {
        workExpSec.style.display = 'block';
    }
});
