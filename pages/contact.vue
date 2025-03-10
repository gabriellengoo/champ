<template>
    <div>
      <!-- Contact Page Section -->
      <div class="container mx-auto p-8 pb-[10vw md:pt-[5vw] pt-[25vw]">
        <h1 class="text-2xl mb-6">Contact Us</h1>
        <p class="mb-8 text-2xl">
          If you have a general enquiry about the company or our healthcare business, you can contact championspharma through email at <a href="mailto:contact@championspharma.com" class="text-blue-600">contact@championspharma.com</a>
        </p>
  
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <!-- Contact Form -->
            <form action="https://formspree.io/f/xnnjegge" method="POST" class="space-y-6">
              <div>
                <label for="name" class="block text-lg">Full Name</label>
                <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your full name" />
              </div>
              
              <div>
                <label for="email" class="block text-lg">Email Address</label>
                <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label for="subject" class="block text-lg">Subject</label>
                <input type="text" id="subject" name="subject" required class="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter the subject" />
              </div>
              
              <div>
                <label for="message" class="block text-lg">Message</label>
                <textarea id="message" name="message" required class="w-full p-3 border border-gray-300 rounded-md" rows="5" placeholder="Enter your message"></textarea>
              </div>
  
              <div class="flex justify-start">
                <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
              </div>
            </form>
          </div>
  
          <div>
            <!-- Contact Information -->
            <div>
              <h2 class="text-3xl font-semibold mb-4">Our Office</h2>
              <p class="mb-2"><strong>Address:</strong> 104 Pall Mall, London SW1Y 5EW</p>
              <p class="mb-2"><strong>Email:</strong> <a href="mailto:contact@championspharma.com" class="text-blue-600">contact@championspharma.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    // Additional JavaScript can be added here if needed
  </script>
  
  <style scoped>
    /* Styles for contact page layout */
    form {
      /* background-color: #f9f9f9; */
      padding: 2rem;
      padding-left: 0%;
      border-radius: 0px;
      /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
    }


    form input{
        border: none;
        border-radius: 0px;
        /* padding-top: 2vw; */
        border-bottom: 1px solid #000000;
    }
    form textarea{
        border: none;
        border-radius: 0px;
        /* padding-top: 2vw; */
        border-bottom: 1px solid #000000;
    }

  

    .container {
      max-width: 1200px;
    }
    h1 {
      color: #333;
      /* padding-bottom: 2vw; */
    }
    .text-lg {
      font-size: 1.125rem;
    }
    .text-xl {
      font-size: 1.25rem;
    }
    .text-blue-600:hover {
      color: #1e40af;
    }
  </style>
  