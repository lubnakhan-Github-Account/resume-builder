"use strict";
window.addEventListener('load', () => {
    let FName = localStorage.getItem('form_name');
    let LName = localStorage.getItem('form_Lastname');
    let name = `${FName} ${LName}`;
    let email = localStorage.getItem('form_email');
    let ph = localStorage.getItem('form_ph');
    let linkedin = localStorage.getItem('form_linkedin');
    let profilepic = localStorage.getItem('form_profilepic'); // pic
    let degree = localStorage.getItem('form_degree');
    let university = localStorage.getItem('form_university');
    let skill1 = localStorage.getItem('form_skill1');
    let skill2 = localStorage.getItem('form_skill2');
    let skill3 = localStorage.getItem('form_skill3');
    let jobTitle = localStorage.getItem('form_jobTitle');
    let company = localStorage.getItem('company');
    let start = localStorage.getItem('start');
    let end = localStorage.getItem('end');
    document.getElementById('form_name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('ph').textContent = ph;
    document.getElementById('linkedin').textContent = linkedin;
    document.getElementById('degree').textContent = degree;
    document.getElementById('university').textContent = university;
    document.getElementById('skill1').textContent = skill1;
    document.getElementById('skill2').textContent = skill2;
    document.getElementById('skill3').textContent = skill3;
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('jobTitleExp').textContent = jobTitle;
    document.getElementById('company').textContent = company;
    document.getElementById('startDate').textContent = start;
    document.getElementById('endDate').textContent = end;
    if (profilepic) {
        document.getElementById('profilepic').src = profilepic;
    }
    const username = name;
    const baseurl = 'http://127.0.0.1:5500/Dynamic/preview-resume/dynamic_resume.html';
    const uniqueresumeurl = `${baseurl}?/${username}`;
    const resumeLink = document.getElementById('resumeLink');
    resumeLink.setAttribute('href', uniqueresumeurl);
    resumeLink.textContent = uniqueresumeurl;
    document.getElementById('copyLinkBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueresumeurl).then(() => {
            alert('resume link copied to clipboard!');
        });
    });
});
document.getElementById('editbtn').addEventListener('click', () => {
    window.history.back();
});
document.getElementById('printbtn').addEventListener('click', () => {
    window.print();
});
