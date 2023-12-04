const navli = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
             current = section.getAttribute('id');
        }
    });
    navli.forEach(li => {
        li.classList.remove('active');
        let test = document.querySelector('.nav-link[href*=' + current + ']');
        test.classList.add('active');
    })
})


const femail = document.myform.email;
const fuser = document.myform.name;
const fmsg = document.myform.message;
const fbtn = document.myform.sbmtBtn;
myform.addEventListener('input', () => {
    if (femail.value.length > 0 && fuser.value.length > 0 && fmsg.value.length > 0) {
        fbtn.removeAttribute('disabled');
    } else {
        fbtn.addAttribute('disabled');
    }
})

function emailvalidate() {
    if (femail.value == "") {
        emailField.innerHTML = "Please enter Email";
    }
}
function uservalidate() {
    if (fuser.value == "") {
        nameField.innerHTML = "Please enter Name";
    }
}
function msgvalidate() {
    if (fmsg.value == "") {
        msgField.innerHTML = "Please enter Message";
    }
}


