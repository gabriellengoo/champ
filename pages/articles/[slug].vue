<template>
  <div class="container mx-auto py-16">
    <NuxtLink to="/" class="text-blue-600 hover:underline">← Back to Home</NuxtLink>

    <div v-if="article" class="mt-8">
      <h1 class="text-3xl font-bold">{{ article.title }}</h1>
      <p class="text-gray-600 mt-2">{{ article.description }}</p>
      <div class="mt-4 md:w-[50vw] w-full text-lg text-gray-800">{{ article.content }}</div>
    </div>
    <div v-else>
      <p class="text-gray-500">Article not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
const articles = ref([
  {
    slug: "understanding-pharmaceuticals",
    title: "Understanding Pharmaceuticals",
    description: "An overview of the pharmaceutical industry and its impact on global healthcare.",
    content: `
      The pharmaceutical industry is responsible for the research, development, and distribution of life-saving drugs. It plays a vital role in healthcare by providing medications for various diseases and improving quality of life.

      Over the years, the pharmaceutical industry has significantly contributed to advancing human health. With the increasing prevalence of chronic diseases and infections, the demand for new drugs and treatments is more critical than ever. Pharmaceuticals cover a broad spectrum, from over-the-counter medications to prescription-only drugs for complex conditions like cancer, diabetes, and cardiovascular diseases.

      In recent years, advancements in biotechnology and artificial intelligence (AI) have accelerated drug discovery. These developments are making treatments more effective and personalized, allowing for more precise medications tailored to individuals' genetic makeup. For example, in oncology, targeted therapies are now available, which specifically attack cancer cells while sparing healthy ones, reducing side effects and improving patient outcomes.

      Moreover, the industry is focusing on improving the efficiency of the entire drug development process. With AI and machine learning, pharmaceutical companies can predict how new compounds will react in the human body, leading to faster and more cost-effective drug development.

      The role of pharmaceuticals extends beyond drug development. They are central to ensuring public health by providing vaccines, antibiotics, and treatments for emerging diseases like COVID-19. Global collaboration among pharmaceutical companies, governments, and international health organizations ensures that medications are accessible to all.
    `
  },
  {
    slug: "new-treatment-innovations",
    title: "New Treatment Innovations",
    description: "Latest advancements in medical treatments and cutting-edge therapies.",
    content: `
      In recent years, healthcare has witnessed extraordinary innovations in treatments that have dramatically changed how we approach both chronic and acute conditions. From gene therapy to immunotherapy, new treatments are offering patients hope where traditional medicine once fell short.

      Gene Therapy has emerged as a groundbreaking treatment for genetic disorders. By altering the genes inside a patient's cells, doctors can correct faulty genes that cause diseases such as cystic fibrosis, muscular dystrophy, and certain forms of blindness. This therapy is still in its infancy, but it holds immense promise for curing previously untreatable conditions.

      Another exciting development is Immunotherapy, which has proven to be particularly successful in treating cancers. Unlike traditional cancer treatments such as chemotherapy, immunotherapy works by boosting the body’s immune system to fight cancer cells. Drugs like checkpoint inhibitors are showing significant success in treating cancers like melanoma and lung cancer, leading to more prolonged survival rates for patients.

      Additionally, mRNA-based vaccines have revolutionized our response to infectious diseases. The development of mRNA vaccines for COVID-19 has been a major milestone, demonstrating the potential for rapid vaccine production and adaptability in the face of new pathogens. Beyond COVID-19, mRNA technology is being explored for vaccines against other infectious diseases, including influenza and Zika virus, as well as for cancer vaccines.

      As we look to the future, new treatment innovations continue to push the boundaries of science and medicine. Gene editing, artificial intelligence, and precision medicine will play significant roles in developing treatments that are more targeted, personalized, and effective.
    `
  },
  {
    slug: "global-health-challenges",
    title: "Global Health Challenges",
    description: "Addressing healthcare issues worldwide and strategies for better public health.",
    content: `
      Healthcare faces numerous global challenges that threaten the well-being of billions of people worldwide. Some of these challenges include infectious diseases, antibiotic resistance, and disparities in healthcare access.

      Infectious diseases such as malaria, tuberculosis, and HIV/AIDS continue to burden healthcare systems, especially in low-income countries. New outbreaks, like the Ebola and COVID-19 pandemics, have shown the vulnerability of global health systems. Public health organizations and pharmaceutical companies must work collaboratively to develop vaccines, treatments, and prevention strategies that can be deployed rapidly in times of crisis.

      Antibiotic resistance is another growing concern. Overuse and misuse of antibiotics have led to the rise of resistant bacteria, rendering many standard antibiotics ineffective. The World Health Organization (WHO) has highlighted antibiotic resistance as one of the biggest threats to global health. Efforts are underway to develop new antibiotics and alternative treatments, but combating resistance requires a multifaceted approach, including better stewardship of existing antibiotics, increased research, and global awareness campaigns.

      Furthermore, unequal access to healthcare remains a significant barrier to improving global health. In many parts of the world, people lack access to essential medicines, vaccines, and medical services. Pharmaceutical companies, governments, and international organizations are working together to address these disparities. Initiatives like affordable drug pricing, the Global Fund, and the GAVI vaccine alliance aim to ensure that everyone, regardless of their location or socioeconomic status, has access to the healthcare they need.
    `
  }
]);

const article = computed(() => articles.value.find(a => a.slug === route.params.slug));
</script>
