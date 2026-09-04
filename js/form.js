const btnTogglePassword = document.getElementById("togglePassword");
const inputPassword = document.getElementById("senha");

const olhoAberto = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/> <circle cx="12" cy="12" r="3"/> </svg>'; 
const olhoFechado = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 3l18 18"/> <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a18.7 18.7 0 0 1-3.1 4.1"/> <path d="M6.6 6.6C3.8 8.5 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4.4-1"/> </svg>';

btnTogglePassword.addEventListener("click", () => {
    if (inputPassword.type == "password") {
        inputPassword.type = "text";
        btnTogglePassword.innerHTML = olhoFechado;
    } else {
        inputPassword.type = "password";
        btnTogglePassword.innerHTML = olhoAberto;
    }
});