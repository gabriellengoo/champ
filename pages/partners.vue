<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center h-screen bg-black  md:pt-[5vw] pt-[15vw]">
        <div class="absolute inset-0 bg-[black]">
          <img class="opacity-[90%] object-cover bg-center h-screen w-screen" src="/part.jpg" />
        </div>
        <div
          class="container h-screen w-screen flex justify-center align-middle flex-col mx-auto text-center text-white relative z-10 py-32">
          <h1>Partnerships</h1>
          <p class="mt-4 banner-tile text-lg w-[50%] mx-auto">
            At Champions Pharmaceuticals, we are committed to partnering with healthcare professionals and patient organizations to enhance healthcare delivery. Through patient-focused support and funding, we aim to improve access to care and achieve better health outcomes across the UK.
          </p>
          
        </div>
      </section>
  
      <!-- Articles Section -->
      <section class="articles py-16 pb-[10vw]">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(article, index) in articles" :key="index" class="article-card h-[100%] flex flex-col">
              <NuxtLink :to="`${article.slug}`"
                class="block p-4 bg-white  h-[40vh]">
                <img :src="article.image" alt="Article Image" class="partim w-[7vw] mx-auto" />
                <h3 class="text-xl">{{ article.title }}</h3>
                <p class="text-gray-600 pt-[2vw]">{{ article.description }}</p>
                <!-- <p
                  class="mt-6 w-[50%] text-center md:text-left md:p-[.5vw] md:px-6 md:py-[1vw] p-[2vw] border-[.2vw] rounded-[50px] border-[#B66126] text-[#B66126] font-semibold transition-all hover:text-[white] hover:bg-[#B66126] items-center justify-center">
                  Read More
                </p> -->
              </NuxtLink>
  
            </div>
          </div>
        </div>
      </section>
  
      <!-- <div>
        <p>Date: 10 December 2024</p>
      </div> -->
  
    </div>
  </template>
  <script setup>
  const articles = [
    {
      slug: "https://www.unilever.com/",
      title: "Unilever",
      description: "Unilever is one of the world’s leading consumer goods companies, with products spanning across categories such as food and beverages, personal care, home care, and health and wellness. Founded in 1930 through the merger of a Dutch margarine company (Margarine Unie) and a British soapmaker (Lever Brothers), Unilever has since grown into a global powerhouse, operating in over 190 countries.",
      image: "/Unilever_logo.webp"
    },
    {
      slug: "/",
      title: "Nigerian Military",
      description: "The Nigerian Military is the armed forces of the Federal Republic of Nigeria, responsible for protecting the country’s sovereignty and maintaining internal security. Established in 1960 following Nigeria’s independence from British colonial rule, the Nigerian Military comprises the Nigerian Army, Nigerian Navy, and Nigerian Air Force, each with its own specialized roles and responsibilities.",
      image: "/army.png"
    },
    {
      slug: "https://www.gov.uk/",
      title: "GOV.UK",
      description: "GOV.UK is the official website of the UK government, providing information on government services, policies, and regulations. Launched in 2012, GOV.UK serves as a central hub for citizens, businesses, and civil servants to access public resources and stay informed on national issues.",
      image: "/gov.png"
    }
  ];
  </script>
  