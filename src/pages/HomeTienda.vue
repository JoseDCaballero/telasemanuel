<template>
    <main>
        <div>
            <h1>Bienvenido a la tienda virtual de <router-link to="/about"><a>Telas Emanuel</a></router-link></h1>
        </div>
        <!--<div v-else>
            <button>Añadir nueva categoría</button>
        </div>-->
        <h2>A continuación se mostrarán nuestros productos disponibles por categorías</h2>
        <div v-if="loading">Cargando...</div>
        <div v-else class="category-container">
            <div class="category-card" v-for="category in categories" :key="category.name" @click="() => goToCategory(category.name)">
                <img class="category-image" :src="category.url" alt="Imagen de la categoría">
                <div class="category-details">
                    <h3 class="category-name">{{ category.name }}</h3>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
h1 {
    font-size: 7vh;
}

a {
    color: #000;
    text-decoration: none;
}

main {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}

.category-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Distribución automática de columnas */
    gap: 20px; /* Espacio entre tarjetas */
    justify-items: center; /* Centra las tarjetas horizontalmente */
}

.category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 100%; /* Ocupa todo el ancho del contenedor padre */
    max-width: 300px; /* Ancho máximo de cada tarjeta */
}

.category-card:hover {
    cursor: pointer;
    background-color: rgb(148, 146, 146);
}

.category-image {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.category-details {
    padding: 10px;
    text-align: center;
}

.category-name {
    font-size: 1.5rem;
    margin-top: 10px;
}
</style>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const goToCategory = (categoryName) => {
    router.push(`/category/${encodeURIComponent(categoryName)}`);
}

const categories = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_TELASEMANUEL + '/categories/');
        categories.value = response.data;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});
</script>
