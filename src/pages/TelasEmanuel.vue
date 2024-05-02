<template>
    <h1>¿Dónde quiere comprar?</h1>
    <main>        
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
</template>

<style scoped>
main {
    display: flex;
    justify-content: space-between;
    padding: 0% 9%;
    /*background-color: #0081CF;*/
    height: 75vh;        
}

#tienda{
    flex: 20;
    /* Que ocupen el mismo espacio */
    background-image: url("/src/images/paratienda.png");
    background-size: cover;
    height: 68vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in;   
    cursor:pointer;
    border: 4px solid #000;
}

#tapiceria{
    flex: 20;
    /* Que ocupen el mismo espacio */
    background-image: url("/src/images/paratapiceria.png");
    background-size: cover;
    height: 68vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in;   
    cursor:pointer;
    border: 4px solid #000;
}

.sombra{    
    -webkit-text-stroke: 1.9px black; /* Para navegadores WebKit */
    color: white; /* Color del texto */
    font-size: 7vw;
    font-family: Arial, Helvetica, sans-serif;
}

#tapiceria:hover{
    background-image: url("/src/images/paratapiceriacopia.png");    
    background-size: cover;
}

#tienda:hover{
    background-image: url("/src/images/paratiendacopia.png");
    background-size: cover;
}

a {
    text-decoration: none;
    color: #000;
}

 .primero, .segundo {    
    padding-top: 22px;
    width: 45%;
}

h1{
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}
</style>