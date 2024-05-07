<script setup>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<template>
    <div class="espacio">

    </div>
    <div class="down">
    <footer class="footer">
        <div class="contact-info">
            <h2>Contacto</h2>
            <p>Correo electrónico: <a id="di" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMqjBKSSZwTkBjjPLTQVsGJgQrjPhdvdXpPQsmCwjcgLNnZskZtRGNRZcbClZjrgqBDZFhv" target="_blank">emanuel.tapiceria7@gmail.com</a></p>
            <p>Teléfono: +52 1234567890</p>
        </div>
        <div class="general-info">
            <h2>¡Síguenos en nuestras redes sociales!</h2>
            <p><a class="media" href="https://www.facebook.com/profile.php?id=61558219467442" target="_blank">Facebook</a></p>
            <p><a class="media" href="https://www.instagram.com/tapiceriaemanuel/" target="_blank">Instagram</a></p>
        </div>
        <button @click="scrollToTop">Ir hacia arriba</button>
    </footer>
</div>
</template>

<style scoped>
footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 97.1%;    
}

.contact-info, .general-info {
    width: 50%;
    display: inline-block;    
    vertical-align: top;
}

.contact-info h2,
.general-info h2 {
    border-bottom: 1px solid white;    
    padding-bottom: 10px;
}
a{
    color: #fff;
    text-decoration: underline;
}
a:hover{
    color: #dbdbdb;
}
button {
    background-color: #ff4081;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;    
    display: inline-block;
    font-size: 12px;
    border-radius: 25px;
    cursor: pointer;    
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

button:hover {
    background-color: #f50057;
    transform: scale(1.1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}
.espacio{
    padding-top: 4vh;
}
</style>