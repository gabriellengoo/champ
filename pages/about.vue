<template>
  <section class="container md:p-[2vw] p-[5vw] pt-[10vw] mx-auto py-16 flex flex-col lg:flex-row">
    <!-- Left Side: Accordion Information -->
    <div class="w-full lg:w-1/2 space-y-6">
      <h2 class="text-3xl font-semibold">About Us</h2>

      <div class="space-y-4">
        <div v-for="(section, index) in sections" :key="index">
          <div>
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
        <h2 class="text-lg font-semibold">Our History</h2>
        <p class="text-gray-700 text-lg mt-4">
          Founded in 1992 by Micheal F. Ngoo, our company was officially registered on June 4, 1993.  
          The vision was born during Nigeria’s military era, when the Nigerian Army Medical Corps played a crucial role in pharmaceutical distribution. The need for regulated, high-quality medicines in a rapidly evolving healthcare system contributed to the eventual formation of NAFDAC (National Agency for Food and Drug Administration and Control).  
          Our journey has been defined by a commitment to ensuring safe, accessible, and effective medicines across Nigeria and beyond.
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
    content: 'Our mission is to improve global health by ensuring access to high-quality, life-saving medicines. Since our founding, we have worked tirelessly to bridge the gap between medical supply and demand, providing pharmaceutical solutions that meet the highest standards of safety and efficacy.'
  },
  {
    title: 'Our Values',
    content: 'Integrity, innovation, and impact define our core values. We believe in rigorous quality control, ethical business practices, and a commitment to advancing medical accessibility. Through strategic partnerships and cutting-edge research, we continue to drive progress in the pharmaceutical industry.'
  }
];

function toggleAccordion(index) {
  activeAccordion.value = activeAccordion.value === index ? null : index;
}
</script>
