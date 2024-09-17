
let nameinput = document.getElementById('first_name') as HTMLInputElement;
let last_name = document.getElementById('last_name') as HTMLInputElement;
let email = document.getElementById('email') as HTMLInputElement;
let ph = document.getElementById('contect') as HTMLInputElement;
let linkedin = document.getElementById('linkedin') as HTMLInputElement;
let profilepic = document.getElementById('profilepic') as HTMLInputElement; //PIC
let degree = document.getElementById('degree') as HTMLInputElement;
let university = document.getElementById('university') as HTMLInputElement;
let skill1 =document.getElementById('skill1') as HTMLInputElement;
let skill2 = document.getElementById('skill2') as HTMLInputElement;
let skill3 = document.getElementById('skill3') as HTMLInputElement;
let jobTitle = document.getElementById('job') as HTMLInputElement;
let company = document.getElementById('company') as HTMLInputElement;
let start = document.getElementById('start') as HTMLInputElement;
let end =document.getElementById('end') as HTMLInputElement;

//---------------------------------Form----------------------------------------------
let form =document.getElementById('form') as HTMLFormElement;

form.addEventListener('submit',(e)=>{
   e.preventDefault();

localStorage.setItem('form_name',nameinput.value);
localStorage.setItem('form_Lastname',last_name.value);
localStorage.setItem('form_email',email.value);
localStorage.setItem('form_ph', ph.value);
localStorage.setItem('form_linkedin',linkedin.value);
localStorage.setItem('form_degree',degree.value);
localStorage.setItem('form_university',university.value);
localStorage.setItem('form_skill1',skill1.value);
localStorage.setItem('form_skill2',skill2.value);
localStorage.setItem('form_skill3',skill3.value);
localStorage.setItem('form_jobTitle', jobTitle.value);
localStorage.setItem('company',company.value);
localStorage.setItem('start',start.value);
localStorage.setItem('end',end.value);

//-------------------------------------Console.log------------------------------------
// console.log(localStorage.getItem('form_name'));
// console.log(localStorage.getItem('form_Lastname'));
// console.log(localStorage.getItem('form_email'));
// console.log(localStorage.getItem('form_ph'));
// console.log(localStorage.getItem('form_linkedin'));
// console.log("Taha pic",localStorage.getItem('profilepic'));
// console.log(localStorage.getItem('form_degree'));
// console.log(localStorage.getItem('form_university'));
// console.log(localStorage.getItem('form_skill1'));
// console.log(localStorage.getItem('form_skill2'));
// console.log(localStorage.getItem('form_skill3'));
// console.log(localStorage.getItem('form_jobTitle'));
// console.log(localStorage.getItem('company'));
// console.log(localStorage.getItem('start'));
// console.log(localStorage.getItem('end'));


 

if(profilepic.files && profilepic.files[0]){
    const reader = new FileReader();
    reader.onload = function (){
        let base64Image = reader.result as string;
        localStorage.setItem('form_profilepic', base64Image);
        
        window.location.href= '../preview-resume/dynamic_resume.html';
    };
    reader.readAsDataURL(profilepic.files[0]);
} else{
    window.location.href ='../preview-resume/dynamic_resume.html';
}
});
