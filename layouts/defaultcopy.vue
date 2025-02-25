<template>
  <div>
    <header class="bg-blue-800 text-white py-4 shadow-md">
      <nav class="container mx-auto flex items-center justify-between">
        <!-- Logo Section -->
        <div class="text-2xl font-bold">
          <NuxtLink to="/" class="text-white hover:text-gray-300">
            Champions Pharmaceuticals
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <div class="space-x-6 hidden sm:flex">
          <NuxtLink to="/" class="text-white hover:text-gray-300">Home</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-gray-300">About</NuxtLink>
          <!-- <NuxtLink to="/services" class="text-white hover:text-gray-300">Services</NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-gray-300">Contact</NuxtLink> -->
        </div>

        <!-- Mobile Menu Button (For smaller screens) -->
        <div class="sm:hidden">
          <button @click="toggleMenu" class="text-white">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Menu (Dropdown) -->
    <div v-if="isMenuOpen" class="sm:hidden bg-blue-800 text-white py-4 space-y-4">
      <NuxtLink to="/" class="block text-white hover:text-gray-300">Home</NuxtLink>
      <NuxtLink to="/about" class="block text-white hover:text-gray-300">About</NuxtLink>
      <!-- <NuxtLink to="/services" class="block text-white hover:text-gray-300">Services</NuxtLink>
      <NuxtLink to="/contact" class="block text-white hover:text-gray-300">Contact</NuxtLink> -->
    </div>

    <main>
      <slot />
    </main>
  </div>
</template>