const tobBtn = document.querySelector('.toggle-btn')
const navLinks = document.querySelector('.navbar')
const links = document.querySelector('.links')
const skills = document.querySelector('.skills')

tobBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-large')
    links.classList.toggle('link-show')
})
let skillset = ''
const langs = ['C', 'C++', 'Java', 'HTML, CSS & Javascript','Python']
const desc = ['Programming knowledge in C. 1 Year coding experience in C.', 'Programming knowledge in C++. 6 Months coding experience in C++.','Programming knowlegde in Java. 2 Months coding experience in Java.','Most tools of Web Development like HTML, CSS, JavaScript known. 3 Months coding experience in webdev.','Programming knowledge in Python. 3 Years of coding experience in python.']
window.addEventListener('DOMContentLoaded',()=>{
    for(let i = 0; i < langs.length; i++){
        skillset += 
        `
        <div class="skills-cards">
            <h1>${langs[i]}</h1>
            <h3>${desc[i]}</h3>
        </div>
        `
    }
    skills.innerHTML  = skillset
})