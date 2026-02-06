<!-- Hero.svelte -->
<script>
  import { onMount } from 'svelte';
  
  const heroImages = [
    { 
      id: 1, 
      src: 'assets/image/hero1.png', 
      alt: 'Anime club members at an event',
      title: 'CAL ANIMAGE ALPHA ',
      subtitle: 'ANIME & MANGA COMMUNITY',
      description: 'Cal Animage Alpha is UC Berkeley\'s anime club since 1989.',
      link: '/about'
    },
    { 
      id: 2, 
      src: 'assets/image/hero2.jpg',  
      alt: 'Dangan-Werewolf event',
      title: 'EVENTS',
      subtitle: 'TUESDAYS AND THURSDAYS',
      description: 'Join us for weekly events and become a general member!',
      link: '/events'
    },
    { 
      id: 3, 
      src: 'assets/image/hero3.jpg',  
      alt: 'Anime Destiny 2026',
      title: 'UPCOMING EVENTS',
      subtitle: 'Maid Cafe and Anime Destiny',
      description: 'Stay tuned for our Anime convention Anime Destiny in the Fall, or our Maid cafe in the Spring.',
      link: '/events'
    },
  ];
  
  let currentIndex = 0;
  let autoplayInterval;
  
  const SLIDE_DURATION = 8000;
  
  function goToImage(index) {
    currentIndex = index;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  }
  
  function handleKeyPress(event, callback) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
  
  onMount(() => {
    autoplayInterval = setInterval(nextImage, SLIDE_DURATION);
    
    return () => {
      clearInterval(autoplayInterval);
    };
  });
</script>

<div class="hero-container">
  <!-- Background slider -->
  <div class="hero-slider" style="transform: translateX({-currentIndex * 100}%)">
    {#each heroImages as image}
      <div 
        class="hero-slide" 
        style="background-image: url('{image.src}')"
        aria-label={image.alt}
      />
    {/each}
  </div>
  
  <div class="image-overlay" />
  
  <!-- Navigation zones -->
  <button 
    class="nav-zone left" 
    on:click={prevImage}
    aria-label="Previous slide"
  />
  <button 
    class="nav-zone right" 
    on:click={nextImage}
    aria-label="Next slide"
  />
  
  <!-- Content -->
  <div class="hero-content">
    <div class="text-slider" style="transform: translateX({-currentIndex * 100}%)">
      {#each heroImages as image}
        <div class="text-slide">
          <div class="hero-text">
            <a href={image.link} class="title-link">
              <h1 class="main-title">{image.title}</h1>
            </a>
            <h2 class="subtitle">{image.subtitle}</h2>
            <p class="hero-description">{image.description}</p>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Indicators -->
    <div class="sliding-indicators">
      {#each heroImages as _, index}
        <button 
          class="sliding-line-container"
          on:click={() => goToImage(index)}
          aria-label="Go to slide {index + 1}"
        >
          <div class="sliding-line">
            <div class="sliding-progress" class:active={index === currentIndex} />
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .hero-container {
    position: relative;
    height: 80vh;
    min-height: 500px;
    overflow: hidden;
    color: white;
  }
  
  .hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.7s ease;
  }
  
  .hero-slide {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: #1a1a2e;
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%);
    pointer-events: none;
    z-index: 1;
  }
  
  .nav-zone {
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    background: transparent;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .nav-zone.left {
    left: 0;
  }
  
  .nav-zone.right {
    right: 0;
  }
  
  .nav-zone:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .hero-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    z-index: 3;
    overflow: hidden;
  }
  
  .text-slider {
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.7s ease;
  }
  
  .text-slide {
    flex: 0 0 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-text {
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
  }
  
  .title-link {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transition: opacity 0.3s ease;
  }
  
  .title-link:hover {
    opacity: 0.8;
  }
  
  .main-title {
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    margin: 0 0 10px 0;
    text-transform: uppercase;
  }
  
  .subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    opacity: 0.9;
    margin: 0 0 20px 0;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .sliding-indicators {
    display: flex;
    gap: 16px;
  }
  
  .sliding-line-container {
    cursor: pointer;
    padding: 8px 0;
    background: transparent;
    border: none;
  }
  
  .sliding-line {
    width: 50px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }
  
  .sliding-progress {
    width: 0%;
    height: 100%;
    background-color: white;
    transition: width 0.3s ease;
  }
  
  .sliding-progress.active {
    animation: slideProgress 8s linear;
  }
  
  @keyframes slideProgress {
    from { width: 0%; }
    to { width: 100%; }
  }
  
  @media (max-width: 768px) {
    .main-title {
      font-size: 2rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .hero-description {
      font-size: 0.95rem;
    }
    
    .nav-zone {
      width: 15%;
    }
  }
</style>