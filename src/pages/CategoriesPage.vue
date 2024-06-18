<template>
    <main>
        <h1>{{ categoryName }}</h1>
        <div v-if="loading">Cargando...</div>
        <div v-else class="category-container">
            <div class="category-card" v-for="fabric in fabrics" :key="fabric.id">
                <div class="card-content">
                    <img class="category-image" :src="fabric.url" alt="Imagen del producto">
                    <div class="category-details">
                        <h3 class="category-name">{{ fabric.name }}</h3>
                        <button @click="addToCart" class="comprar-btn">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
h1 {
    font-size: 3rem; /* Ajustar el tamaño del título según tus preferencias */
    margin-bottom: 20px;
    text-align: center;
}

.category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Distribución equitativa de las tarjetas */
    gap: 20px;
}

.category-card {
    width: 250px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
}

.category-card:hover {
    transform: translateY(-5px); /* Efecto de elevación al hacer hover */
}

.card-content {
    padding: 10px;
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

.comprar-btn {
    background-color: #0081CF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.comprar-btn:hover {
    background-color: #00568b;
}
</style>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryName = decodeURIComponent(route.params.categoryName);

const fabrics = ref([]);
const loading = ref(true);

const addToCart = () => {
    alert("Se añadió al carrito");
}

onMounted(async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_TELASEMANUEL + `/fabrics/category/${encodeURIComponent(categoryName)}`);
        fabrics.value = response.data;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching fabrics:', error);
    }
});
</script>
