<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-screen bg-black">
      <div class="absolute inset-0 bg-[black]">
        <img class="opacity-[90%] object-cover bg-center h-screen w-screen" src="/hero.jpg" />
      </div>
      <div
        class="container h-screen w-screen flex justify-center align-middle flex-col mx-auto text-center text-white relative z-10 py-32">
        <h1>Welcome to Champions Pharmaceuticals</h1>
        <p class="mt-4 banner-tile text-lg">
          We lead the way in innovative healthcare solutions.
        </p>
        <div class="flex justify-center items-center w-[100%]">
          <NuxtLink to="/about"
            class="mt-6 md:w-[15vw] w-auto p-[1vw] px-6 py-[2vw] border-[.2vw] rounded-[50px] border-[#ffffff] text-white font-semibold transition-all hover:text-[#B66126] hover:bg-[white]">
            More Info
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="articles py-16 pb-[10vw] h-[100%]">
      <div class="container mx-auto">
        <p class=" pl-4 text-lg font-bold">Latest Articles</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div v-for="(article, index) in articles" :key="index" class="article-card h-[100%] flex flex-col">
            <NuxtLink :to="`/articles/${article.slug}`" class="block p-4 bg-white rounded-lg  h-[40vh]">
              <img :src="article.image" alt="Article Image" class="partim2 w-[7vw] mx-auto" />
              <h3 class="text-xl text-[#B66126]">{{ article.title }}</h3>
              <p class="text-gray-600 text-xl">{{ article.description }}</p>
              <!-- <p
                class="mt-6 w-[50%] text-center md:text-left   font-semibold transition-all  items-center justify-center">
                Read More
              </p> -->
            </NuxtLink>

          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
const articles = [
  {
    slug: "understanding-pharmaceuticals",
    title: "About Pharmaceuticals",
    description: "An overview of the pharmaceutical industry and its impact on global healthcare.",
    image: "/about.jpg"
  },
  {
    slug: "new-treatment-innovations",
    title: "New Treatment Innovations",
    description: "Latest advancements in medical treatments and cutting-edge therapies.",
    image: "/under.jpg"
  },
  
  {
    slug: "global-health-challenges",
    title: "Global Health Challenges",
    description: "Addressing healthcare issues worldwide and strategies for better public health.",
    image: "/abph.jpg"
  }
];
</script>



<style scoped>
.hero {
  /* background-image: url('/path/to/hero-image.jpg'); */
  background-size: cover;
  background-position: center;
}
</style>
