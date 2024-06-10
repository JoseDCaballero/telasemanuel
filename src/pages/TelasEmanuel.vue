<script setup>
import { ref, onMounted } from 'vue'

const token = localStorage.getItem('access_token')

onMounted(() => {
    
    // Verificar la autenticación al cargar la página
})
</script>

<template>
    <div v-if="!token" id="no-logged">
        <h1>Para poder acceder a nuestro catálogo de productos, debe iniciar sesión</h1>
        <main>
            <router-link to="/login">
                <button id="loginbtn">Ir al inicio de sesión</button>
            </router-link>            
        </main>
    </div>
    <div v-else>
        <h1>¿Dónde quiere comprar?</h1>
        <main id="main">
            <div class="primero">
                <router-link to="/upholstery">
                    <div id="tapiceria">
                        <h1 class="sombra">Tapicería</h1>
                    </div>
                </router-link>
            </div>
            <div class="segundo">
                <router-link to="/store">
                    <div id="tienda">
                        <h1 class="sombra">Tienda</h1>
                    </div>
                </router-link>
            </div>
        </main>
    </div>
</template>

<style scoped>
#main {
    display: flex;
    justify-content: space-between;
    padding: 0% 9%;
    /*background-color: #0081CF;*/
    height: 75vh;
}

#nologged {
    text-align: center;
}

#tienda {
    flex: 20;
    /* Que ocupen el mismo espacio */
    background-image: url("/src/images/paratienda.png");
    background-size: cover;
    height: 68vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in;
    cursor: pointer;
    border: 4px solid #000;
}

#tapiceria {
    flex: 20;
    /* Que ocupen el mismo espacio */
    background-image: url("/src/images/paratapiceria.png");
    background-size: cover;
    height: 68vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in;
    cursor: pointer;
    border: 4px solid #000;
}

.sombra {
    -webkit-text-stroke: 1.9px black;
    /* Para navegadores WebKit */
    color: white;
    /* Color del texto */
    font-size: 7vw;
    font-family: Arial, Helvetica, sans-serif;
}

#tapiceria:hover {
    background-image: url("/src/images/paratapiceriacopia.png");
    background-size: cover;
}

#tienda:hover {
    background-image: url("/src/images/paratiendacopia.png");
    background-size: cover;
}

a {
    text-decoration: none;
    color: #000;
}

.primero,
.segundo {
    padding-top: 22px;
    width: 45%;
}

h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}

#loginbtn {
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #0081CF;
    border-radius: 5px;
    background-color: #fff;
    color: #0081CF;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

#loginbtn:hover {
    background-color: #0081CF;
    color: #fff;
    transform: scale(1.05);
}

#loginbtn:active {
    background-color: #01436b;
    color: #fff;
    transform: scale(1);
}
</style>