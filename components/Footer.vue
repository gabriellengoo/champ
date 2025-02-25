<template>
  <footer class="text-[grey] p-[5vw] md:p-[0] py-8">
    <div
      class="container border-b-[#BDBDBD] border-b-[.1vw] pb-[3vw] mx-auto flex flex-col sm:flex-row justify-between"
    >
      <div class="text-2xl mb-4 sm:mb-0">
        <NuxtLink to="/" class="text-[grey] hover:text-gray-300"
          >Champions Pharmaceuticals</NuxtLink
        >
      </div>
      <div class="space-y-2 sm:space-y-0 sm:flex sm:space-x-6 ">
        <div class="flex md:flex-col md:px-[10vw]">
          <NuxtLink to="/investors" class="hover:text-gray-300 md:p-[0] p-[2vw]"
            >Investors</NuxtLink
          >
          <NuxtLink to="/media" class="hover:text-gray-300 md:p-[0] p-[2vw]">Media</NuxtLink>
          <NuxtLink to="/careers" class="hover:text-gray-300 md:p-[0] p-[2vw]">Careers</NuxtLink>
          <NuxtLink to="/partners" class="hover:text-gray-300 md:p-[0] p-[2vw]"
            >Partners</NuxtLink
          >
        </div>
        <NuxtLink to="/grant-seekers" class="hover:text-gray-300"
          >Grant Seekers</NuxtLink
        >
        <NuxtLink to="/healthcare-professionals" class="hover:text-gray-300"
          >Healthcare Professionals</NuxtLink
        >
        <NuxtLink to="/business-to-business" class="hover:text-gray-300"
          >Business to Business</NuxtLink
        >
        <NuxtLink to="/merchandise" class="hover:text-gray-300"
          >Merchandise</NuxtLink
        >
        <NuxtLink to="/privacy" class="hover:text-gray-300"
          >Privacy Statement</NuxtLink
        >
        <NuxtLink to="/terms" class="hover:text-gray-300"
          >Terms of Use</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-gray-300"
          >Contact Us</NuxtLink
        >
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
        <NuxtLink to="#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faFacebook" />
        </NuxtLink>
        <NuxtLink to="#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faTwitter" />
        </NuxtLink>
        <NuxtLink to="#" class="text-[grey] hover:text-gray-300">
          <FontAwesomeIcon :icon="faLinkedin" />
        </NuxtLink>
        <NuxtLink to="#" class="text-[grey] hover:text-gray-300">
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
