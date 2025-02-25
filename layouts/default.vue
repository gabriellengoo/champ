<template>
  <div>
    <!-- Header -->
    <header class="bg-white fixed top-0 z-[10000] w-full shadow-lg">
      <nav class="container md:w-auto w-[100vw] md:mx-auto flex justify-between items-center py-4 px-6">
        <!-- Logo + Links -->
        <div class="flex items-center space-x-6">
          <img class="w-[30vw] md:w-[20vw]" src="/fist.png" />
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="hover:text-[#B66126] hover:underline">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-[#B66126] hover:underline">History</NuxtLink>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <div class="border-l-2 border-gray-300 h-6"></div>
          <button class="hover:text-[#B66126]">
            <i class="fas fa-search text-lg"></i>
          </button>
          <NuxtLink to="/contact" class="hover:text-[#B66126] hover:underline">Contact</NuxtLink>
          <NuxtLink to="#" class="hover:text-[#B66126]">
            <i class="fas fa-globe text-lg"></i>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-2xl text-[#B66126]" 
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all z-20">
        <NuxtLink to="/" class="block py-3 px-6 hover:text-[#B66126]">Home</NuxtLink>
        <NuxtLink to="/about" class="block py-3 px-6 hover:text-[#B66126]">History</NuxtLink>
        <NuxtLink to="/contact" class="block py-3 px-6 hover:text-[#B66126]">Contact</NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="mt-16">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Footer from "~/components/Footer.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Optional custom styles for better mobile experience */
button {
  /* display: inline-flex; */
  justify-content: center;
  align-items: center;
}
</style>
