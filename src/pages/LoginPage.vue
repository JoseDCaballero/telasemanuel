<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const loginUser = async () => {
    const email = document.getElementById("emayl").value;
    const password = document.getElementById("pasword").value;

    try {
        const response = await axios.post(import.meta.env.VITE_API_TELASEMANUEL + '/login/', {
            mail: email,
            password: password
        });

        // Verifica que response y response.data no son undefined
        if (response && response.data) {
            const accessToken = response.data.access_token;
            console.log('Token recibido:', accessToken);
            localStorage.setItem('access_token', accessToken);
            //console.log(response.data); // Mensaje de inicio de sesión exitoso
            alert("Se ha iniciado sesión");                
            router.push('/'); // Redirigir a la página de inicio después del inicio de sesión
            //window.location.reload();
        } else {
            console.error('Response or response data is undefined');
        }
    } catch (error) {
        // Ocurrió un error al procesar la solicitud
        if (error.response && error.response.data) {
            console.error(error.response.data); // Mensaje de error de inicio de sesión        
            alert("No se encontró al usuario");
        } else {
            console.error(error); // Error general
            alert("Ocurrió un error inesperado");
        }
    }
};
</script>

<template>
    <main>
        <div class="login-container">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="loginUser">
                <div class="form-group">
                    <label for="username">Correo electrónico</label>
                    <input type="email" id="emayl" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="pasword" name="password" required>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form><br>
            <label>¿No tienes una cuenta?</label>
            <router-link to="/register">
                <button>Crear cuenta</button>
            </router-link>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: italic;
}

.login-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 10px 10px 10px 10px rgba(1, 1, 1, 1);
    max-width: 400px;
    width: 100%;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
    width: calc(100% - 20px);
    /* Restar el padding */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    /* Incluir el padding en el ancho total */
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0081CF;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #01436b;
}
</style>
