<svelte:head>
    <title>Cal Animage Alpha</title>
    <link href="/assets/style/style.css" rel="stylesheet" type="text/css"/>
</svelte:head>

<div class="home-page dim">
    <div class="top-bar">
        <div class="top-bar-item home-title"><a href="/">Cal Animage Alpha</a></div>
        <div class="dummy-spacer" style="flex-grow: 1;"></div>
        <ul class="nav">
            <li class="top-bar-item">
                <a href="#about"><span>About</span></a>
                <ul>
                    <li><a href="/officers/">Officers</a></li>
                    <li><a href="/contact/">Contact Us</a></li>
                </ul>
            </li>
            <li class="top-bar-item">
                <a href="#events"><span>Events</span></a>
                <ul>
                    <li><a href="http://www.calanimedestiny.com" target="_blank">Anime Destiny</a></li>
                    <li><a href="/schedule/">Club Calendar</a></li>
                </ul>
            </li>
            <li class="top-bar-item">
                <a href="#konshuu"><span>Konshuu</span></a>
                <ul>
                    <li><a href="/konshuu/">Read Online</a></li>
                    <li><a href="http://j.mp/konsub" target="_blank">Contribute</a></li>
                </ul>
            </li>
            <li class="top-bar-item">
                <a href="blm/">BLM</a>
                <ul>
                    <li><a href="blm/">BLM</a></li>
                </ul>
            </li>
            <li class="top-bar-item">
                <a href="#membership"><span>Join Us</span></a>
                <ul>
                    <li><a href="https://discord.gg/Xp4MUjG" style="letter-spacing: 1px;">Discord</a></li>
                    <li><a href="mail/">Mailing List</a></li>
                </ul>
            </li>
        </ul>
        <div class="top-bar-item">
            <a href="https://www.facebook.com/calanimagealpha" target="_blank">
                <img src='/assets/image/fb.png' alt="Facebook" style="border:0;">
                </a>
        </div>
        <div class="top-bar-item">
            <a href="https://twitter.com/calanimagealpha" target="_blank">
                <img src='/assets/image/tw.png' alt="Twitter" style="width:33px;height:33px;border:0;">
                </a>
        </div>
        <div class="top-bar-item">
            <a href="https://www.youtube.com/channel/UCqwtuMg539jVEtTYRrtD6kw" target="_blank">
                <img src='/assets/image/yt.png' alt="Youtube" style="width:33px;height:33px;border:0;">
            </a>
        </div>
    </div>
    <div class="home-center">
        <div class="home-caption">UC Berkeley's Anime Club</div>
    </div>
    <div class="info-boxes">
        <div class="info-box" id="first-box">
            <!--                     <div id="next">Next Up

                    <img id="show" src='/assets/image/showing.jpg' alt="Next Showing">

                    <h1 id="series">
                        TBD</h1>

                </div> -->
            <h2>Showings</h2>
            Fridays
            <br> 8 PM PST
        </div>
        <div class="info-box">
            <h2>Socials</h2>
                Tuesdays
            <br> 8 PM PST
        </div>
    </div>
    <div class="dummy-spacer"></div>
    <div class="video-bg">
        <video muted autoplay={true} id="bgvid" loop={true} poster="/assets/image/railgun.jpg">
            <source src="/assets/video/2021.mp4">
        </video>
    </div>
</div>
<div class="below-the-fold">
    <div class="below-the-fold-item" id="about">
        <img src="/assets/image/annie-banner.png">
        <div class="about-text">
            <h2>About CAA</h2> 
            <p>
                Cal Animage Alpha has been UC Berkeley's anime club since 1989. We hold a game night and a social every Thursday. We also have other events. All of these functions are open to the general public for free!
            </p>
            <div class="history">
                <h3>A History of CAA by Rodney Romasata</h3>
                <input class="spoilerbutton" type="button" value="Show" on:click={() => this.value=this.value=='Show'?'Hide':'Show'}>
                <div class="spoiler">
                    <div>
                        <p class="sub">Cal Animage Alpha ("CAA") is the flagship chapter of a loosely organized international conglomeration of anime clubs all of which share the name "Cal Animage" (often, but not always, followed by the Greek letter denoting their entrance and acceptance into the group). Originally just a group of friends (with a VCR) CAA met in any number of various rooms on the University of California, Berkeley campus; Cal Animage was formally established by Mike Tatsugawa in January 1989. </p>
                        <p>While the debate is still on as to "who is the oldest anime club," CAA has the distinction and claim to fame of once being "the largest anime club outside of Japan." In 1994 (the peak of the club's popularity), the club's membership topped out at 329 (although there is some confusion as to the exact number since some didn't pay for membership that year!).</p>
                        <p>Many past officers both from CAA and other Cal Animage chapters have gone on to further spread anime. The Society for the Promotion of Japanese Animation (SPJA) [was] headed by Mike Tatsugawa and runs the annual Anime Expo. Other previous officers have moved on into the anime industry, both domestic and abroad. One in particular has worked on both sides of the Pacific Ocean and has written the liner notes for the AnimEigo release of the Macross DVD.</p>
                        <p>With the release of domestic anime, CAA has slowed down quite a bit. Membership has been fairly constant around 100. The main focus of the biweekly Sunday showings has been towards those titles that would have little chance of being released in America, yet popular enough to hold an audience's attention. A rather tall order, but the club is persisting.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="below-the-fold-item" id="events">
        <div class="about-text">
            <h2>Events</h2>
            <h3>Weeklies</h3>
            <p class="sub">All showings and game nights held by Cal Animage Alpha are open to the general public for free. Anyone interested in anime, manga, and Japanese anime culture is invited to attend these events.</p>
            <p>We're always open to fun event ideas or new games to play during game nights! Have an idea or a suggestion? Share it with an <a href="/officers">officer</a>!</p>
            <h3>Specials</h3>
            <p class="sub">Anime Destiny is our annual anime convention, held right here on campus! For more information, visit our <a href="http://www.calanimedestiny.com" target="_blank">website</a>.</p>
        </div>
        <!-- Facebook integration -->
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcalanimagealpha%2F&tabs=timeline&width=300&height=600&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="300" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="/assets/image/cal-banner.png">
    </div>
    <div class="below-the-fold-item" id="konshuu">
        <img src="/assets/image/annie-beach.png">
        <div class="about-text">
            <h2>Konshuu</h2> 
            <p>
                Konshuu is Cal Animage Alpha's weekly newsletter, featuring articles and fanworks from both guests and current officers. Each issue includes an overview of the series that will be shown/read during weekly meetings, information about future events, and an assortment of articles on anime culture. The latest issue is available for free at each weekly showing, or you can <a href="/konshuu">read it online</a>!
            </p>
            <p>
                Guest submissions are always welcome! To contribute, visit <a href="http://j.mp/konsub" target="_blank">j.mp/konsub</a>.</p>
            <p>If you're interested in becoming a regular contributor to the newsletter, please contact the current head — Athena Chen — about working in the Konshuu department</p>
        </div>
    </div>
    <div class="below-the-fold-item" id="membership">
        <div class="about-text">
            <h2>Join Us</h2>
            <p>New Cal student? Interested in joining Cal Animage Alpha? Join our <a href="https://www.facebook.com/calanimagealpha" target="_blank">Facebook group</a>, like our page, and introduce yourself!</p>
            Also, come to game nights and all our events to meet our officers!
        </div>
        <img src="/assets/image/cal-beach.png">
    </div>
</div>