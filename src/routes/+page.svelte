<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import 'material-icons/iconfont/material-icons.css'
    import { beforeUpdate, onMount } from 'svelte'
    // Background effects commented out for now
    // import { onDeviceOrientation, onPointermove } from '$lib/background'
    import { fade } from 'svelte/transition'
    import type { PageData } from './$types'
    import Hero from '$lib/hero.svelte'

    let scrollY: number = 0
    let innerHeight: number = 1

    let loaded = false

    let divWidth = 1
    let divHeight = 1

    export let data: PageData

    // Background opacity effect commented out
    // beforeUpdate(() => {
    //     document.documentElement.style.setProperty('--bg-opacity', `${0.25 + 0.5 * Math.min(scrollY / innerHeight, 1)}`)
    // })

    onMount(() => {
        const loadCheck = setInterval(() => {
            if (document.readyState === 'loading') return
            loaded = true
            clearInterval(loadCheck)
        }, 100)
    })
</script>

<svelte:head>
    <title>Cal Animage Alpha</title>
    <link rel="preload" as="image" href="/assets/image/events.webp" />
    <link rel="preload" as="image" href="/assets/image/konshuu.webp" />
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight />
<!-- Device orientation and pointer move events commented out -->
<!-- on:deviceorientation={onDeviceOrientation} -->
<!-- on:pointermove={(e) => onPointermove(e, divWidth, divHeight)} -->

{#if !loaded}
    <div
        transition:fade
        class="fixed z-50 flex h-full w-full items-center justify-center bg-white"
    />
{/if}

<div class="hero flex flex-col" bind:clientWidth={divWidth} bind:clientHeight={divHeight}>
    <Navbar/>
    <Hero />

<main class="page-content">
  <!-- Who We Are Section -->
  <section class="section" id="who-we-are">
    <h2 class="section-title">Who We Are</h2>
    
    <div class="about-content">
      <div class="about-text">
        <p>Cal Animage Alpha is the flagship chapter of a loosely organized international conglomeration of anime clubs all of which share the name "Cal Animage".</p>
        
        <p>Originally just a group of friends CAA met in any number of various rooms on the Berkeley campus; Cal Animage was formally established by Mike Tatsugawa in January 1989.</p>
        
        <p>While the debate is still on as to "who is the oldest anime club," CAA has the distinction and claim to fame of once being "the largest anime club outside of Japan."</p>
        
        <p class="legacy-intro">Many past officers both from CAA and other Cal Animage chapters have gone on to further spread anime. The Society for the Promotion of Japanese Animation (SPJA) was headed by Mike Tatsugawa and runs the annual Anime Expo. Other previous officers have moved on into the anime industry, both domestic and abroad.</p>
        
        <p>With the release of domestic anime, CAA has slowed down quite a bit. Membership has been fairly constant around 100. The main focus of the biweekly Sunday showings has been towards those titles that would have little chance of being released in America, yet popular enough to hold an audience's attention.</p>
      </div>
      
      <div class="about-image">
        <div class="club-photo">
          <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/0BMkHecFMc4" 
          title="Cal Animage Alpha Promotional Video" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Events Section -->
  <section class="section" id="events">
    <h2 class="section-title">Events</h2>
    
    <div class="involvement-content">
      <div class="involvement-info">
        <p>Trivia Nights, Jeopardy, Drawing Workshops, Karaoke and more! We meet on Tuesdays and Thursdays, and all events are open to everyone at Cal.</p>
        <p>Check out our Discord or Instagram to stay up-to-date with our events!</p>
      </div>
      
      <div class="discord-widget-container">
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DRQCwMfEcet/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DRQCwMfEcet/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DRQCwMfEcet/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Cal Animage Alpha (@calanimagealpha)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>
      </div>
    </div>
  </section>
  
  <!-- Konshuu -->
  <section class="section" id="konshuu">
    <h2 class="section-title"><a href="https://issuu.com/konshuu-caa?utm_medium=referral&utm_source=localhost" target="_blank">Konshuu</a></h2>
    
    <div class="involvement-content">
      <div class="involvement-info">
        <p>Cal Animage Alpha has been UC Berkeley's anime club since 1989. Konshuu is Cal Animage Alpha's newsletter, featuring articles and illustrations from both guests and current officers. Each issue includes information about future events and an assortment of articles on anime culture.</p>
        <p>If you are a writer/artist/etc. and want your content removed, feel free to email us at webmaster(at)calanimagealpha.com.</p>
      </div>
      
      <div class="discord-widget-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe 
        style="width:100%; height:600px; border:none;" 
        src="https://e.issuu.com/embed.html?d=konshuu_volume_62_issue_1&u=konshuu-caa" 
        allowfullscreen
        loading="lazy">
        </iframe>
      </div>
    </div>
  </section>

  <!-- How to Get Involved Section -->
  <section class="section" id="get-involved">
    <h2 class="section-title">How to Get Involved</h2>
    
    <div class="involvement-content">
      <div class="involvement-info">
        <p>New Cal student? Interested in joining Cal Animage Alpha? Join our Discord server and introduce yourself!</p>
      </div>
      
      <div class="discord-widget-container">
        <iframe 
          src="https://discord.com/widget?id=424393596465184768&theme=dark" 
          width="100%" 
          height="500" 
          allowtransparency="true" 
          frameborder="0" 
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style="border-radius: 8px;">
        </iframe>
      </div>
    </div>
  </section>
</main>
</div>

<style>
  /* Berkeley Blue: #003262, California Gold: #FDB515 */
  /* Anime-inspired accent: #FF6B9D (soft pink), #4ECDC4 (teal) */
  
  :global(body) {
    background: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #2c3e50;
    line-height: 1.6;
  }

  .page-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 24px;
  }
  
  .section {
    margin-bottom: 100px;
    scroll-margin-top: 20px;
  }
  
  .section-title {
    font-size: 2.75rem;
    font-weight: 600;
    margin-bottom: 48px;
    color: #003262;
    letter-spacing: -0.02em;
  }
  
  .section-title a {
    color: #003262;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .section-title a:hover {
    color: #FDB515;
  }
  
  /* Who We Are Section */
  .about-content {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 60px;
    align-items: start;
  }
  
  @media (max-width: 900px) {
    .about-content {
      grid-template-columns: 1fr;
    }
  }
  
  .about-text p {
    font-size: 1.0625rem;
    line-height: 1.75;
    margin-bottom: 20px;
    color: #34495e;
  }
  
  .about-text .legacy-intro {
    margin-top: 32px;
    padding-top: 32px;
    border-top: 2px solid #FDB515;
  }
  
  .club-photo {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .club-photo iframe {
    display: block;
    border-radius: 4px;
  }
  
  /* Events & Involvement Sections */
  .involvement-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
  
  @media (max-width: 900px) {
    .involvement-content {
      grid-template-columns: 1fr;
    }
  }
  
  .involvement-info p {
    font-size: 1.0625rem;
    line-height: 1.75;
    margin-bottom: 20px;
    color: #34495e;
  }
  
  .discord-widget-container {
    width: 100%;
  }
  
  .discord-widget-container iframe {
    border-radius: 4px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .page-content {
      padding: 40px 20px;
    }
    
    .section {
      margin-bottom: 70px;
    }
    
    .section-title {
      font-size: 2.25rem;
      margin-bottom: 36px;
    }
  }
</style>