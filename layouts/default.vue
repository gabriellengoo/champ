<template>
  <div>
    <!-- Header -->
    <header class="bg-white fixed top-0 z-[10000] w-full shadow-lg">
      <nav
        class="container md:w-auto w-[100vw] md:mx-auto flex justify-between items-center py-4 px-6"
      >
        <!-- Logo + Links -->
        <div class="flex items-center space-x-6">
          <a href="./"><img class="w-[30vw] md:w-[20vw]" src="/fist.png" /></a>
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="hover:text-[#B66126] hover:underline">{{
              translations.home
            }}</NuxtLink>
            <NuxtLink
              to="/about"
              class="hover:text-[#B66126] hover:underline"
              >{{ translations.history }}</NuxtLink
            >
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <div class="border-l-2 border-gray-300 h-6"></div>

          <!-- Search Button & Input -->
          <div class="relative">
            <button class="hover:text-[#B66126]" @click="toggleSearch">
              <i class="fas fa-search text-lg"></i>
            </button>
            <input
              v-if="isSearchOpen"
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="absolute top-8 left-0 w-[15vw] rounded-md px-2 py-1"
            />
          </div>

          <NuxtLink
            to="/contact"
            class="hover:text-[#B66126] hover:underline"
            >{{ translations.contact }}</NuxtLink
          >

          <!-- Language Dropdown -->
          <div class="relative">
            <button
              class="hover:text-[#B66126]"
              @click="toggleLanguageDropdown"
            >
              <i class="fas fa-globe text-lg"></i>
            </button>
            <div
              v-if="isLanguageOpen"
              class="absolute top-8 left-0 bg-white border shadow-md rounded-md"
            >
              <button
                class="block px-4 py-2 hover:bg-gray-200"
                @click="changeLanguage('en')"
              >
                English
              </button>
              <button
                class="block px-4 py-2 hover:bg-gray-200"
                @click="changeLanguage('fr')"
              >
                French
              </button>
              <button
                class="block px-4 py-2 hover:bg-gray-200"
                @click="changeLanguage('yo')"
              >
                Yoruba
              </button>
            </div>
          </div>
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
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all z-20"
      >
        <NuxtLink to="/" class="block py-3 px-6 hover:text-[#B66126]"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="block py-3 px-6 hover:text-[#B66126]"
          >History</NuxtLink
        >
        <NuxtLink to="/contact" class="block py-3 px-6 hover:text-[#B66126]"
          >Contact</NuxtLink
        >
      </div>
    </header>

    <!-- Main Content -->
    <main class="mt-[5vw]">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
const translations = ref({});

const loadTranslations = async () => {
  const response = await fetch(`/locales/${locale.value}.json`);
  translations.value = await response.json();
};

watchEffect(() => {
  loadTranslations();
});

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref("");
const isLanguageOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) searchQuery.value = ""; // Reset input when closing
};

const toggleLanguageDropdown = () => {
  isLanguageOpen.value = !isLanguageOpen.value;
};

const changeLanguage = (lang) => {
  locale.value = lang; // Set new language
  isLanguageOpen.value = false; // Close dropdown
};
</script>

<style scoped>
/* Optional custom styles for better mobile experience */
button {
  justify-content: center;
  align-items: center;
}
</style>
