// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
/* Custom styling. Overrides sources where needed. */

/* ADD FONTS */

@import url('https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap');
@import url('https://fonts.cdnfonts.com/css/chunkfive');
/* END FONTS */

html {
    /* font-size: 16pt; */
    max-width: 54rem;
    padding: 1rem;
    margin: auto;
    text-rendering: optimizeLegibility;
    background-color: #000;
}

body {
    font-weight: 400;
    background-color: #000;
    font-family: "Lora", "Courier New", monospace, serif;
    color: white;
    margin: 0px;
    padding-top: 20px;
    padding: 32px;
    border-radius: 20px;
}

#root {
    margin: 0px;
    padding: 0px;
}

.header {
    width: 100%;
    text-align: center;
    margin: 18px 0px;
    padding: 0px;
}

.footer {
    width: 100%;
    text-align: center;
    margin: 10px 0px;
    padding: 5px;
    border-top: 5px solid #64376e;
    perspective: 200px;
}

.main {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
}

#start-text {
    flex-grow: 2;
}

.nav_link {
    display: block;
    margin: 0px auto;
    font-style: italic;
    text-decoration: underline;
}

.nav_link:active,
.nav_link:hover,
.nav_link:link,
.nav_link:visited {
    text-decoration: underline;
}

#pics {
    display: flex;
    flex-flow: column wrap;
}

#pics div {
    flex: 0 0 40%;
}

.img-box {
    margin: 10px auto;
    text-align: center;
}

.vid-box {
    position: relative;
    padding-bottom: 56.25%;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
}

img {
    max-width: 512px;
    min-width: 128px;
    width: 100%;
}

#pitcher_matcher {
    text-align: center;
    padding: 10px;
    background-color: rgb(100, 55, 110);
    border-radius: 30px;
    font-size: 24px;
    font-weight: 600;
    box-sizing: content-box;
}

h1 {
    font-weight: 600;
    margin-bottom: 18px;
}

h2 {
    margin: 0px auto;
    text-align: center;
    font-weight: 600;
    margin-bottom: 18px;
}

h3 {
    margin: 0px auto;
    text-align: center;
    font-weight: 600;
    margin-bottom: 18px;
}

h4 {
    font-weight: 600;
    margin-bottom: 18px;
}

p {
    margin-bottom: 18px;
}

.yellow {
    color: RGB(255, 224, 130);
}

.shelled1,
.shelled2 {
    position: absolute;
    background-color: red;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 700;
    padding: 0 5px;
    border-radius: 5px
}

.shelled1 {
    transform: rotate(-7deg);
    margin-top: 5px;
    margin-left: 30px
}

.shelled2 {
    transform: rotate(10deg);
    margin-top: 6px;
    margin-left: 25px
}

/* BEGIN HEADER STYLES */

.header {
    /* background-color: #333; */
    position: relative;
    border-bottom: 5px solid #64376e;
    perspective: 250px;
}

.header h1 {
    font-family: 'Pacifico';
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 2px 2px 5px #fff, 2px 2px 10px #000;
    color: #9c80a6;
}

.header h2,
.footer h2 {
    font-family: 'ChunkFive', sans-serif;
    color: #FACF33;
    text-shadow: 0px 2px 5px #fff, 0px 2px 10px #000;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: #FACF33;
    transform: rotateX(20deg);
}

/* Subheader styles */
[role="doc-subtitle"] {
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: -1rem;
    margin-bottom: 18px;;
    text-align: center;
}

/* END HEADER STYLES */

/* aside styles for the welcome page */
aside {
    width: calc(2.5rem * 6);
    text-align: center;
    clear: both;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #391c4080;
    border-radius: 8px;
    padding: 4px;
}
.red-aside {
    border: solid medium #cb1e27;
}
.yellow-aside {
    border: solid medium #f8c828;
}
.green-aside {
    border: solid medium #28c160;
}
.blue-aside {
    border: solid medium #108797;
}

/* END aside styles */

/* discord channel replica styles */

/* emulating discord channel mention styles by evie */
.channel {
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    padding: 1px 2px;
    background-color: #3e42d180;
    border-radius: 4px;
}
.channel::before {
    content: "#";
    font-weight: 800;
    padding: 0 2px;
}
.channel:hover {
    background-color: #3e42d1;
}

/* emulating the actual discord channel sidebar styles by evie */

.discord-list {
    background-color: #23252a;
    width: calc(2.5rem * 6.3);
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    color: #7c8085;
    border-radius: 4px;
    padding: 4px;
    margin: 16px;
}

.discord-list h4 {
    font-size: 1rem;
    padding: 4px;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: -1px;
}
.discord-list h4:hover {
    color: #d4d6d7;
}

.discord-list ul li {
    padding: 4px;
    border-radius: 4px;
}
.discord-list ul li:hover {
    background-color: #27292f;
    color: #d4d6d7;
}

.discord-list ul li::before {
    content: "#";
    font-weight: 800;
    padding: 4px 8px 4px 4px;
}

/* END discord */

/* eltrov added this for the BETA tag */
#beta {
    background-color: #505050;
    text-transform: uppercase;
    margin: 10px;
    padding: 5px;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 14px;
    font-weight: 600;
    border-radius: 3px;
    position: absolute;
    left: 10px;
    top: -30px;
}
/* End BETA tag */

/* BEGIN MEDIA QUERIES */

/* 
@media screen and (min-width: 320px) {
    html {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
    #pitcher_matcher {
        font-size: calc(16px + 4 * ((100vw - 320px) / 680));
    }
    .banner h1 {
        font-size: calc(48px + 16 * ((100vw - 320px) / 680));
    }
    .banner h2 {
        font-size: calc(24px + 12 * ((100vw - 320px) / 680));
    }
} */

@media screen and (min-width: 1000px) {
    html {
        font-size: 18px;
    }

    #pitcher_matcher {
        font-size: calc(24px + 8 * ((100vw - 320px) / 680));
    }

    .banner h1 {
        font-size: 64px;
    }

    .banner h2 {
        font-size: 36px;
    }
    .channel {
        padding: 2px 4px;
    }
}

/* END MEDIA QUERIES */
`