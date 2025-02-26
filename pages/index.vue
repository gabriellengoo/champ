<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-screen bg-black">
      <div class="absolute inset-0 bg-[black]">
        <img class="opacity-[90%] object-cover bg-center h-screen w-screen" src="/hero.jpg"/>
      </div>
      <div class="container h-screen w-screen flex justify-center align-middle flex-col mx-auto text-center text-white relative z-10 py-32">
        <h1>Welcome to Champions Pharmaceuticals</h1>
        <p class="mt-4 banner-tile text-lg">
          We lead the way in innovative healthcare solutions.
        </p>
        <div class="flex justify-center items-center w-[100%]">
          <NuxtLink
            to="/get-started"
            class="mt-6 md:w-[15vw] w-auto p-[1vw] px-6 py-[2vw] border-[.2vw] rounded-[50px] border-[#ffffff] text-white font-semibold transition-all hover:text-[#B66126] hover:bg-[white]"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="articles py-16">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="article-card h-[100%] flex flex-col"
          >
            <a
              :href="article.link"
              target="_blank"
              class="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 h-[40vh]"
            >
              <h3 class="text-xl">{{ article.title }}</h3>
              <p class="text-gray-600">{{ article.description }}</p>
              <p
                class="mt-6 md:w-[10vw] w-[50vw] text-center md:text-left md:p-[.5vw] md:px-6 md:py-[1vw] p-[2vw] border-[.2vw] rounded-[50px] border-[#B66126] text-[#B66126] font-semibold transition-all hover:text-[white] hover:bg-[#B66126] items-center justify-center"
              >
                Read More
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners & Affiliates Section -->
    <section class="py-16 pb-[10vw]">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl mb-8 text-gray-800">Our Partners & Affiliates</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          <!-- Unilever Logo -->
          <div class="flex justify-center">
            <img src="/Unilever_logo.webp" alt="Unilever Logo" class="h-20">
          </div>
          <!-- GOV.UK Logo -->
          <div class="flex justify-center">
            <img src="/gov.png" alt="GOV.UK Logo" class="h-20">
          </div>
          <!-- Nigeria & UK Flag -->
          <div class="flex justify-center">
            <img src="/nigeria.png" alt="Nigeria & UK Flags" class="h-20">
          </div>
          <div class="flex justify-center">
            <img src="/uk.webp" alt="Nigeria & UK Flags" class="h-20">
          </div>
          <!-- Nigerian Military Logo -->
          <div class="flex justify-center">
            <img src="/army.png" alt="Nigerian Military Logo" class="h-20">
          </div>
        </div>

        <!-- Domain Name -->
        <!-- <div class="mt-6">
          <p class="text-lg font-semibold text-gray-700">Visit us at <span class="text-[#B66126]">championspharma.com</span></p>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
const articles = [
  {
    title: "Understanding Pharmaceuticals",
    description: "An overview of the pharmaceutical industry.",
    link: "https://example.com/article1",
  },
  {
    title: "New Treatment Innovations",
    description: "Latest advancements in medical treatments.",
    link: "https://example.com/article2",
  },
  {
    title: "Global Health Challenges",
    description: "Addressing healthcare issues worldwide.",
    link: "https://example.com/article3",
  },
];
</script>


<style scoped>
.hero {
  /* background-image: url('/path/to/hero-image.jpg'); */
  background-size: cover;
  background-position: center;
}
</style>
