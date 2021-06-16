function onn() {
    alert('welcome you are online')
};
window.addEventListener("online", onn);

function off() {
    alert("plz check you are offline")   
}
window.addEventListener("offline", off)

console.log('hello world');


let input = document.getElementById('name')
console.log(input)

input.addEventListener('blur',()=>{
    let str = input.value
    let regex = /^[a-zA-Z]([\s0-9a-zA-Z]){2,15}$/;
    console.log(str,regex);
    if (regex.test(str)) {
        input.classList.remove('is-invalid')
        
    }else{
        input.classList.add('is-invalid')
    }
})

let email = document.getElementById('email');

email.addEventListener('blur',()=>{
    let emailstr = email.value;
    let  regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

    if (regex.test(emailstr)) {
        email.classList.remove('is-invalid')
    }else{
        email.classList.add('is-invalid')
    }

})



