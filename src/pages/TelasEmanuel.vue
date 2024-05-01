<template>
    <main>
        <div class="primero">
            <router-link to="/upholstery">
                <div id="tapiceria">
                    <h1>Tapicería</h1>
                </div>
            </router-link>
        </div>
        <div class="segundo">
            <router-link to="/store">
                <div id="tienda">
                    <h1>Tienda</h1>
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
    background-color: #000;
}

#tapiceria,
#tienda {
    flex: 20;
    /* Que ocupen el mismo espacio */
    background-color: burlywood;
}

#tapiceria:hover,
#tienda:hover {
    background-color: rgb(143, 119, 88);
}

a {
    text-decoration: none;
    color: #000;
}

 .primero {
    
    width: 45%;
}
.segundo{
    
    width: 45%;
} 
</style>