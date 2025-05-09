<title>CAA Maid Cafe 2025</title>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap" rel="stylesheet">
<script>
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte';

let slideIndex = 0;
const slides = [
  "/assets/image/maidcafe/1.jpg",
  "/assets/image/maidcafe/2.jpg",
  "/assets/image/maidcafe/3.jpg"
];

const images = [
    '/assets/image/maidcafe/cards/1.png',
    '/assets/image/maidcafe/cards/6.png',
    '/assets/image/maidcafe/cards/2.png',
    '/assets/image/maidcafe/cards/7.png',
    '/assets/image/maidcafe/cards/5.png',
    '/assets/image/maidcafe/cards/3.png',
    '/assets/image/maidcafe/cards/8.png',
    '/assets/image/maidcafe/cards/4.png'
  ];

  let stack = [];
  let currentIndex = 0;
  function flyFade(node, params) {
  return {
    delay: params.delay || 0,
    duration: params.duration || 400,
    css: (t, u) => {
      const fadeCss = fade(node, params).css(t, u);
      const flyCss = fly(node, { ...params, easing: cubicOut }).css(t, u);
      return `${fadeCss}; ${flyCss}`;
    }
  };
}
  const maxImages = 8; // Limit the number of images to 8
  function addImage() {
    const angle = Math.floor(Math.random() * 12) - 6; // -10 to +10
    const nextImage = {
      src: images[currentIndex],
      rotation: angle,
      id: Date.now() // ensures unique key for transition
    };

    stack = [...stack.slice(-maxImages + 1), nextImage];

    currentIndex = (currentIndex + 1) % images.length;
  }

  // Deal a new photo every 8 seconds
  const interval = setInterval(addImage, 8000);
  onMount(addImage); // show first image right away

function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
}

// Automatically change slides every 3 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
}, 6000);
</script>
  <Navbar />
  <!--div class="bg-yellow-200 text-yellow-900 text-center py-2 font-semibold">
    🚧 This page is under construction! Check back for updates. 🚧
  </div-->
  <div class="bg-gradient-to-br from-blue-100 to-pink-100 font-sans">
    <div class="px-6 py-14 max-w-5xl mx-auto text-center">
        <h1 class="text-pink-600 text-5xl font-bold mb-1 font-fun">Cal Animage Alpha presents</h1>
        <h1 class="text-pink-500 text-8xl font-bold mb-8 font-fun">Maid Cafe 2025</h1>
  
      <!-- Slideshow Container -->
      <div class="slideshow-container relative mb-4">
        {#each slides as slide, index}
          {#if index === slideIndex}
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              class="slideshow-image"
              transition:fade={{ duration: 1000 }}
            />
          {/if}
        {/each}
      
        <!-- Navigation buttons -->
        <a
          class="prev absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl font-bold text-white bg-gray-800 bg-opacity-50 p-3 cursor-pointer"
          on:click={() => plusSlides(-1)}
          >&#10094;</a
        >
        <a
          class="next absolute top-1/2 transform -translate-y-1/2 right-0 text-3xl font-bold text-white bg-gray-800 bg-opacity-50 p-3 cursor-pointer"
          on:click={() => plusSlides(1)}
          >&#10095;</a
        >
      </div>
      <p class="text-center text-gray-600 text-sm mb-8">
        Photos from Maid Cafe 2024
      </p>

      
        <a
          href="https://forms.gle/3prmJgSKuX5AMqz46"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mb-8 rounded-full border border-pink-500 bg-white text-pink-500 px-6 py-2 text-lg hover:bg-pink-50 transition-colors duration-200"
          style="font-family: 'Fredoka', sans-serif;"
        >
          RSVP Now!
        </a>

      <!-- When & Where Bubble -->
      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-14 shadow-xl shadow-pink-100 text-left">
        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">🎀 When & Where</h2>

        <p class="text-lg text-gray-700 leading-relaxed">
            Join us on <strong>Friday, May 9th, 2025</strong> from <strong>5 PM – 9 PM</strong> at the 
            <strong>North Berkeley Senior Center</strong> located at <strong>1901 Hearst Ave, Berkeley, CA</strong>! 💕
          </p>
        
          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            <strong>Walking Directions:</strong> From UC Berkeley campus, head north on Oxford Street until you reach the northwest corner of campus by Barker Hall. 
            Turn left on Hearst Avenue and continue west for 5 minutes — the Senior Center will be on your right!
          </p>

          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            <strong>Transit Directions:</strong> AC Transit route 79 from the south side of campus takes you directly outside the North Berkeley Senior Center. From the Downtown Berkeley BART plaza, you can also take bus 51B or 52 to University Ave.
            at Martin Luther King Jr. Way (by Trader Joe's), and walk 2 blocks north.
          </p>
        
          <div class="mt-6 rounded-3xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2226.9894638571445!2d-122.27032306395039!3d37.87342194490234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857e9897690f3b%3A0x32927cbae7ff54df!2sNorth%20Berkeley%20Senior%20Center!5e0!3m2!1sen!2sus!4v1745907712131!5m2!1sen!2sus"
              width="100%"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        <img src="/assets/image/maidcafe/senior_center.png" alt="Venue" class="rounded-3xl mt-8 object-cover mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
      </div>
  
      <!-- What's Happening Bubble -->
      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-14 shadow-xl shadow-pink-100 text-left">
        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">☕ What’s Happening?</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Enjoy sweet treats and drinks served by our charming maids and butlers! There will be:
        </p>
        <ul class="list-disc pl-6 text-lg text-gray-700 leading-relaxed mt-4">
          <li>✨ Table-side games and performances</li>
          <li>📸 Photo ops with maids and props</li>
        </ul>
        <img src="/assets/image/maidcafe/Food.png" alt="Menu" class="rounded-3xl mt-6 object-cover w-full mx-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" >
      </div>


      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-4 shadow-xl shadow-pink-100 text-left overflow-x-hidden">

        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">👀 Meet our cast!</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Here's a brief introduction of a few of the maids and butlers who are looking forward to your visit!
        </p>

        <div class="photo-stack relative max-w-[450px] aspect-[4/5] mx-auto mt-11 mb-5 max-w-sm mx-auto">
          {#each stack as photo (photo.id)}
            <img
              src={photo.src}
              alt="Maid Cafe"
              class="absolute top-0 left-0 w-full rounded-lg shadow-xl transition-transform duration-700 ease-out"
              style="transform: rotate({photo.rotation}deg);"
              transition:flyFade="{{ x: 100, duration: 700 }}"
            />
          {/each}
        </div>

      </div>


  
      <!-- Pricing & Add-Ons Bubble -->
      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-14 shadow-xl shadow-pink-100 text-left">
        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">💸 Pricing & Add-Ons</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Our standard <strong>$20 package</strong> includes:
        </p>
        <ul class="list-disc pl-6 text-lg text-gray-700 leading-relaxed mt-4">
          <li>🎟️ Admission to the event</li>
          <li>🍰 Food and drinks</li>
          <li>📸 One Polaroid with a maid or butler</li>
          <li>✨ Performances and activities, like decorating polaroids</li>
        </ul>
        <p class="text-lg text-gray-700 leading-relaxed mt-6">
          You can also purchase exciting extras, such as:
        </p>
        <ul class="list-disc pl-6 text-lg text-gray-700 leading-relaxed mt-4">
          <li>📸 Additional Polaroids</li>
          <li>💃 Personalized maid/butler dance performances</li>
        </ul>
        <!--img src="/assets/image/maidcafe/pricing.jpg" alt="Pricing options" class="rounded-3xl mt-6 w-full object-cover" /-->
      </div>
  
      <!-- Dress Up Bubble -->
      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-14 shadow-xl shadow-pink-100 text-left">
        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">💖 Dress Up!</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Guests are welcome to dress in cosplay or cute cafe-style outfits! We’ll even have a mini photo booth corner. 📷
        </p>

      </div>


      <div class="bg-white border-4 border-dashed border-pink-300 rounded-3xl p-8 mb-14 shadow-xl shadow-pink-100 text-left">
        <h2 class="font-fun text-blue-500 text-4xl font-bold mb-6">💌 Reserve your seat now!</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          To get an accurate headcount, we prefer our guests to RSVP in advance, but guests without reservations are also welcome!<br>
          
          <b>Update 5/8/2025:</b> We are now able to <b>accept cash</b> at the door, alongside virtual payment methods of Venmo, PayPal, or Zelle. RSVP still requires virtual payment.
        </p>
        
        <h3 class="font-fun text-blue-500 text-2xl font-bold mb-2 mt-4">We look forward to your presence, ojou/goshujin-sama! (*´∀`)~♥</h3>

        <a
          href="https://forms.gle/3prmJgSKuX5AMqz46"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block my-4 rounded-full border border-pink-500 bg-white text-pink-500 px-6 py-2 text-lg hover:bg-pink-50 transition-colors duration-200"
          style="font-family: 'Fredoka', sans-serif;"
        >
          RSVP
        </a>
        
      </div>
  
    </div>
  </div>
  
  
  <style>
  .slideshow-container {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .slideshow-image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    object-fit: cover;
    z-index: 1;
  }

  .prev,
  .next {
    z-index: 2;
  }

  .font-fun {
    font-family: 'Fredoka', sans-serif;
    text-shadow:
      -2px -2px 0 white,
      2px -2px 0 white,
      -2px 2px 0 white,
      2px 2px 0 white;
  }

  .photo-stack {
    perspective: 1000px;
  }

  </style>
