const API_URL = "https://condoportariaservidor.onrender.com";

const formEntrar = document.getElementById("entrar");
const formCadastrar = document.getElementById("cadastrar");

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


async function api(endpoint, method = "GET", body = null) {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (body !== null) {
        options.body = JSON.stringify(body);
    }

    const resposta = await fetch(`${API_URL}${endpoint}`, options);

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    if (resposta.status === 204) {
        return null;
    }

    return await resposta.json();
}


if (formCadastrar) {
    formCadastrar.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const usuario = {
            nome,
            email,
            senha
        };

        try {
            const dados = await api("/usuarios", "POST", usuario);

            console.log("Usuário cadastrado:", dados);
            alert("Usuário cadastrado com sucesso!");

        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);
            alert("Erro ao cadastrar usuário.");
        }
    });
}

if (formEntrar) {
    formEntrar.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {
            const usuarios = await api("/usuarios");

            const usuarioEncontrado = usuarios.find(usuario =>
                usuario.email === email &&
                usuario.senha === senha
            );

            if (usuarioEncontrado) {
                alert("Entrou com sucesso!");
            } else {
                console.error("As informações estão incorretas ou o usuário não existe.");
            }

        } catch (erro) {
            console.error("Erro ao verificar usuário:", erro);
        }
    });
}
