<template>
  <div>
    <!-- Header -->
    <header class="bg-white text-xl font-semibold fixed top-0 z-[10000] w-full shadow-lg">
      <nav
        class="container md:w-auto w-[100vw] md:mx-auto flex justify-between items-center py-4 px-6"
      >
        <!-- Logo + Links -->
        <div class="flex items-center space-x-6">
          <a href="./" class="px-[2vw] py-[1vw]"><img class="w-[40vw] md:w-[15vw]" src="/fist.png" /></a>
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="hover:text-[#B66126] underline">{{
              translations.home
            }}</NuxtLink>
            <NuxtLink
              to="/about"
              class="hover:text-[#B66126] underline"
              >{{ translations.history }}</NuxtLink
            >
            <NuxtLink to="/partners" class="underline hover:text-[#B66126]"
          >Partnerships</NuxtLink
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
            class="hover:text-[#B66126] underline"
            >{{ translations.contact }}</NuxtLink
          >
          
          <!-- Language Dropdown -->
          <div class="relative">
            <button
              class="hover:text-[#B66126]"
              @click="toggleLanguageDropdown"
            >
              <i class="fas fa-globe text-lg"></i> Language
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
          >Contact Us</NuxtLink
        >
        <NuxtLink to="/partners" class="block py-3 px-6 hover:text-[#B66126]"
          >Partnerships</NuxtLink
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
  try {
    const response = await fetch(`/locales/${locale.value}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translations: ${response.statusText}`);
    }
    translations.value = await response.json();
  } catch (error) {
    console.error("Error loading translations:", error);
  }
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

/* Adding more space for the underline when hovered */
/* Add this to your stylesheet */



/* Basic styling for the link */
.underline {
  text-decoration: none;
  position: relative;
  font-weight: bold;
  color: black;
}

.underline:hover {
  color: #B66126; /* Change color on hover */
}

/* Underline effect on hover */
.underline::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* Thickness of the underline */
  background-color: #B66126; /* Color of the underline */
  transition: width 0.3s ease; /* Smooth transition */
}

.underline:hover::before {
  width: 100%; /* Underline grows to full width */
}

</style>
