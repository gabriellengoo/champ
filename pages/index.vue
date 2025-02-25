<template>
  <div>
    <!-- Hero Section -->

    <!-- style="background-image: url('/fist.jpeg');" fist.jpeg -->
    <section class="relative bg-cover bg-center h-screen bg-black">
      <div class="absolute inset-0 bg-[black] "><img class="opacity-[90%] object-cover bg-center h-screen w-screen" src="/hero.jpg"/></div>
      <div class="container h-screen w-screen flex justify-center align-middle flex-col mx-auto text-center text-white relative z-10 py-32">
        <h1 class=" ">Welcome to Champions Pharmaceuticals</h1>
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
        <!-- <h2 class="text-3xl  text-center mb-8">Latest Articles</h2> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(article, index) in articles"
            :key="index"
            class="article-card h-[100%] flex flex-col"
          >
            <a
              :href="article.link"
              target="_blank"
              class="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-100  h-[40vh]"
            >
              <h3 class="text-xl ">{{ article.title }}</h3>
              <p class="text-gray-600">{{ article.description }}</p>
              <p
          to="/get-started"
          class="mt-6 md:w-[10vw] w-[50vw] text-center md:text-left md:p-[.5vw] md:px-6 md:py-[1vw] p-[2vw] border-[.2vw] rounded-[50px] border-[#B66126] text-[#B66126] font-semibold transition-all hover:text-[white] hover:bg-[#B66126] items-center justify-center"
        >
          Read More
        </p>
            </a>
        
          </div>
        </div>
      </div>
    </section>

    <!-- Accordion Section -->
    <!-- <section class="accordion py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl  text-center mb-8">FAQs</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in accordionItems" :key="index">
            <button
              @click="toggleAccordion(index)"
              class="w-full text-left bg-blue-500 text-white py-3 px-4 rounded-lg flex justify-between items-center"
            >
              <span>{{ item.question }}</span>
              <span v-if="activeAccordion === index" class="text-lg">-</span>
              <span v-else class="text-lg">+</span>
            </button>
            <div
              v-show="activeAccordion === index"
              class="py-4 px-4 bg-white rounded-lg shadow-md mt-2"
            >
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
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

const accordionItems = [
  {
    question: "What is the company about?",
    answer: "We are a global leader in pharmaceutical research and care.",
  },
  {
    question: "What products do you offer?",
    answer:
      "We offer a wide range of prescription and over-the-counter medicines.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach out to our support team through our contact page.",
  },
  {
    question: "Are your products available worldwide?",
    answer: "Yes, our products are available in over 100 countries.",
  },
  {
    question: "Do you offer health consultations?",
    answer: "Yes, we provide virtual consultations with our experts.",
  },
  {
    question: "How do I become a partner?",
    answer:
      "Visit our Partners page for more information on how to collaborate.",
  },
  {
    question: "Are your products FDA approved?",
    answer: "Yes, all our products meet FDA standards.",
  },
  {
    question: "Do you have any career opportunities?",
    answer:
      "Yes, we are constantly looking for talented individuals. Visit our Careers page.",
  },
];

let activeAccordion = null;

function toggleAccordion(index) {
  activeAccordion = activeAccordion === index ? null : index;
}
</script>

<style scoped>
.hero {
  /* background-image: url('/path/to/hero-image.jpg'); */
  background-size: cover;
  background-position: center;
}
</style>
