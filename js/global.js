const svgSol = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/> <path d="M12 2v2"/> <path d="M12 20v2"/> <path d="m4.93 4.93 1.41 1.41"/> <path d="m17.66 17.66 1.41 1.41"/> <path d="M2 12h2"/> <path d="M20 12h2"/> <path d="m6.34 17.66-1.41 1.41"/> <path d="m19.07 4.93-1.41 1.41"/> </svg>';
const svgLua = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/> </svg>';

const btnToggleTheme = document.getElementById("toggleTheme");

btnToggleTheme.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme == "light") {
        document.documentElement.dataset.theme = 'dark';
        btnToggleTheme.innerHTML = svgSol + "Modo claro";
    } else {
        document.documentElement.dataset.theme = 'light';
        btnToggleTheme.innerHTML = svgLua + "Modo escuro";
    }
});