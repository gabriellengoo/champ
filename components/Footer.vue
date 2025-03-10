<template>
  <footer class="text-[grey] p-[5vw] md:p-[0] py-8">
        <!-- Partners & Affiliates Section -->
        <section class="py-16 pb-[2vw]">
      <div class="container flex flex-col md:items-end items-center mx-auto">
        <h2 class="text-xl mb-[1vw] text-[#b76126] font-bold">Our Partners & Affiliates</h2>
        <div class="grid md:w-[25vw] w-[70%] grid-cols-5 md:grid-cols-5 md:gap-8 gap-6 items-center justify-center pb-[2vw] md:pb-0">
          <!-- Unilever Logo -->
          <a href="https://www.unilever.com/" class="flex none justify-center">
            <img src="/Unilever_logo.webp" alt="Unilever Logo" class="w-[10vw] md:w-[auto]" />
          </a>
          <!-- GOV.UK Logo -->
          <div class="flex justify-center">
            <img src="/gov.png" alt="GOV.UK Logo" class="">
          </div>
            <!-- Nigerian Military Logo -->
            <div class="flex justify-center">
            <img src="/army.png" alt="Nigerian Military Logo" class="">
          </div>
          <!-- Nigeria & UK Flag -->
          <div class="flex justify-center">
            <img src="/nigeria.png" alt="Nigeria & UK Flags" class="">
          </div>
          <div class="flex justify-center">
            <img src="/uk.webp" alt="Nigeria & UK Flags" class="">
          </div>
        
        </div>

        <!-- Domain Name -->
        <!-- <div class="mt-6">
          <p class="text-lg font-semibold text-gray-700">Visit us at <span class="text-[#B66126]">championspharma.com</span></p>
        </div> -->
      </div>
    </section>
    <div
      class="container border-b-[#BDBDBD] border-b-[.1vw] pb-[3vw] mx-auto flex flex-col sm:flex-row justify-between"
    >
      <div class="text-2xl mb-4 sm:mb-0">
        <!-- <NuxtLink to="/" class="text-[grey] hover:text-gray-300">
          Champions Pharmaceuticals
        </NuxtLink> -->
        <a href="./"><img class="w-[30vw] hidden md:block md:w-[20vw]" src="/fist.png" /></a>
      </div>
      <div class="space-y-2 sm:space-y-0 sm:flex sm:space-x-6 ">
        <div class="flex md:flex-col md:pr-[2vw] pr-[0]">
          <NuxtLink to="/footer-links/#investors" class="hover:text-gray-300 md:p-[0] p-[2vw] pl-[0]">
            Investors
          </NuxtLink>
          <NuxtLink to="/footer-links/#media" class="hover:text-gray-300 md:p-[0] p-[2vw]">
            Media
          </NuxtLink>
          <NuxtLink to="/footer-links/#careers" class="hover:text-gray-300 md:p-[0] p-[2vw]">
            Careers
          </NuxtLink>
          <NuxtLink to="/footer-links/#partners" class="hover:text-gray-300 md:p-[0] p-[2vw]">
            Partners
          </NuxtLink>
        </div>
        <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex sm:space-x-6 ">
          <NuxtLink to="/footer-links/#grant-seekers" class="hover:text-gray-300">Grant Seekers</NuxtLink>
        <NuxtLink to="/footer-links/#healthcare-professionals" class="hover:text-gray-300">
          Healthcare Professionals
        </NuxtLink>
        <NuxtLink to="/footer-links/#business-to-business" class="hover:text-gray-300">
          Business to Business
        </NuxtLink>
        <NuxtLink to="/footer-links/#merchandise" class="hover:text-gray-300">Merchandise</NuxtLink>
        <NuxtLink to="/footer-links/#privacy" class="hover:text-gray-300">Privacy Statement</NuxtLink>
        <NuxtLink to="/footer-links/#terms" class="hover:text-gray-300">Terms of Use</NuxtLink>
        <NuxtLink to="/footer-links/#contact" class="hover:text-gray-300">Contact Us</NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-center mt-6">
      <p class="text-sm text-gray-400">
        © 2025 Champions Pharmaceuticals Inc. All rights reserved
      </p>
      <p class="text-sm text-gray-400">
        This information—including product information—is intended only for
        residents of the United Kingdom. The products discussed herein may have
        different labeling in different countries.
      </p>
      <div class="mt-4 flex justify-center space-x-4">
        <NuxtLink to="/footer-links/#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faFacebook" />
        </NuxtLink>
        <NuxtLink to="/footer-links/#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faTwitter" />
        </NuxtLink>
        <NuxtLink to="/footer-links/#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faLinkedin" />
        </NuxtLink>
        <NuxtLink to="/footer-links/#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faInstagram" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped>
/* Add any footer-specific styles here */
</style>
