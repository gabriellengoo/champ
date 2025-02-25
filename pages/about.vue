<template>
  <section class="container md:p-[2vw] p-[5vw] pt-[10vw] mx-auto py-16 flex flex-col lg:flex-row">
    <!-- Left Side: Accordion Information -->
    <div class="w-full lg:w-1/2 space-y-6">
      <h2 class="text-3xl font-semibold">About Us</h2>
      <!-- <p class="text-gray-700 text-lg">
        We are committed to improving health worldwide by providing access to essential medicines. Our company values innovation, quality, and safety in all our healthcare solutions. Since our founding, we have focused on bridging the gap between medical supply and demand, ensuring communities worldwide receive the treatment they need.
      </p> -->
      
      <div class="space-y-4">
        <div v-for="(section, index) in sections" :key="index">
          <div class="">
            <button 
              @click="toggleAccordion(index)" 
              class="w-full text-left px-6 py-3 flex justify-between items-center border-b-black border-b-[.1vw] focus:outline-none"
            >
              <span class="font-medium text-xl">{{ section.title }}</span>
              <span v-if="activeAccordion === index" class="md:text-[2vw] text-[5vw]">-</span>
              <span v-else class="md:text-[2vw] text-[5vw]">+</span>
            </button>
            <div v-if="activeAccordion === index" class="px-6 py-3 text-gray-700">
              <p>{{ section.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- History Section -->
      <div class="mt-8">
        <h2 class="text-lg">History</h2>
        <p class="text-gray-700 text-lg mt-4">
          Established in 1993, our company played a crucial role in the early development of pharmaceutical trade in Nigeria. Our first major transaction involved supplying medicines to the Nigerian Army, marking the beginning of a trusted relationship with the healthcare sector.  
          Rooted in Africa’s rich trading history, we trace our origins back to the Royal Nigeria Company, a key player in commerce during the colonial era. This company eventually became part of the United African Company (UAC), a historic trading powerhouse that was later acquired by Unilever.  
          Through these historical foundations, our mission has always been clear: to expand the reach of quality medicines, connecting Africa to the world.
        </p>
      </div>
    </div>

    <!-- Right Side: Image -->
    <div class="w-full pl-[2vw] lg:w-1/2 mt-8 lg:mt-0">
      <img src="/about.jpg" alt="About Us Image" class="w-full h-auto rounded-lg shadow-lg">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeAccordion = ref(null);

const sections = [
  {
    title: 'Our Mission',
    content: 'We are committed to improving health worldwide by providing access to essential medicines.'
  },
  {
    title: 'Our Values',
    content: 'We value innovation, quality, and safety in all our healthcare solutions.'
  }
];

function toggleAccordion(index) {
  activeAccordion.value = activeAccordion.value === index ? null : index;
}
</script>
