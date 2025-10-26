<script>
    import {fade} from "svelte/transition";
    import {preferredLanguage} from "$lib/stores/lang.js";

    export let type = "book";

    const langMap = {
        quest_button: {
            ru: 'Начать Усовершенствование',
            en: 'Begin Advancement',
        },
        author_info: {
            ru: "Эл Фарбер — писательница и веб-разработчица из Мурманска, выросшая на произведениях таких мастеров фантастики, как А. Азимов, Г. Гаррисон, Ф. Дик, Дж. Уиндем и Р. Хайнлайн. Путешествия сквозь бесконечную Вселенную, тайны далёких миров и их обитателей, высокотехнологичное будущее и острые социальные проблемы, неотъемлемо шагающие сквозь пространство и время рука об руку с человечеством, вдохновили Фарбер на собственный роман. Первые наброски LENIMENTUS появились в школьные годы, десять лет спустя они были переработаны и развиты в полноценное социально-фантастическое произведение. LENIMENTUS — не только писательский дебют автора, но и личное внутреннее Усовершенствование.",
            en: "L Farber is a hobbyist writer and web-developer from Murmansk. She was raised on the novels of such Sci-Fi masters as A. Asimov, H. Harrison, P. Dick, R. Heinlein. The vast universe, the mysteries of faraway worlds, the technology of the future and the social problems that inevitably follow it through time and space---these have inspired Farber to write her own novels. LENIMENTUS is not only the author's writing debut, but also a personal inner Advancement."
        },
        book_info: {
            ru: "Рано или поздно это должно было случиться. Разработанная человеком сеть искусственных интеллектов, питавшая саму жизнь, обернулась против него. Планета была очищена и преобразована. Остатки человечества укрылись под энергетическим куполом неприступного «Квадрата Совета». Барьер надёжно защищает от угроз извне, но способен ли он уберечь порядок внутри? Есть ли у утративших самих себя людей право на то, чтобы вновь встать во главе мироздания, или их участь предрешена неумолимым Усовершенствованием?",
            en: "It had to happen sooner or later. The Artificial Intelligence network, designed to power every little aspect of human life, has turned against its creators. The planet has been scoured and transformed. What has remained of humanity are now hiding underneath the dome of 'the Council's Square'. The dome is impenetrable for external threats, but can it maintain order and peace within? Do humans have a chance to restore their leading role in the world, or has their fate been decided by unyielding Advancement?"
        }
    }
</script>
{#key type}
<section class="info" in:fade={ {duration: 250} }>
    <div class="info_wrapper {type}">
        <div class="info_main">
            {#if type === "book"}
                <p class="info_text">
                    { langMap.book_info[$preferredLanguage] }
                </p>
                <div class="book_image">
                    <img class="leni_cover" src="img/book-3d.png" alt="LENIMENTUS">
                </div>
            {/if}

            {#if type === 'quest'}
                <div class="quest_wrapper">
                    <img class="quest_image" src="img/quest_logo.png">

                    <button class="start_quest_button">
                        { langMap.quest_button[$preferredLanguage] }
                    </button>

                    <button class="begin_button glitch" on:click={() => window.location = 'http://quest.lenimentus.ru'} style="--text: '{langMap.quest_button[$preferredLanguage]}'">
                        { langMap.quest_button[$preferredLanguage] }
                    </button>
                </div>
            {/if}
            {#if type === 'author'}
                <p class="info_text">
                    { langMap.author_info[$preferredLanguage] }
                </p>
                <div class="book_image">
                    <img class="author_photo" src="img/farber.png" alt="LENIMENTUS">
                </div>
            {/if}
        </div>
    </div>
</section>
{/key}

<style>
    .info {
        width: 100%;
    }

    .info_wrapper {
        display: flex;
        align-items: center;
        padding: 20px 50px;
        height: 50vh;
    }

    /*.info_wrapper.book {*/
    /*    background-color: var(--background-green);*/
    /*    box-shadow: -1px 5px 15px 2px var(--background-green);*/
    /*    border-bottom-left-radius: 10px;*/
    /*    border-bottom-right-radius: 10px;*/
    /*}*/

    .info_wrapper.quest {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /*background-color: var(--background-blue);*/
        /*box-shadow: -1px 5px 15px 2px var(--background-blue);*/
        /*border-bottom-left-radius: 10px;*/
        /*border-bottom-right-radius: 10px;*/
    }

    .info_wrapper.author {
        padding: 20px 30px;
        /*background-color: var(--background-pink);*/
        /*box-shadow: -1px 5px 15px 2px var(--background-pink);*/
        /*border-bottom-left-radius: 10px;*/
        /*border-bottom-right-radius: 10px;*/
        text-align: justify;
    }

    .info_text {
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .author .info_text {
        font-size: 18px;
    }

    .info_main {
        width: 100%;
        height: 100%;
        display: flex;
        column-gap: 25px;
        align-items: center;
    }

    .book_image {
        vertical-align: middle;
    }

    .quest .info_main {
        column-gap: 0;
    }

    .quest_wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        margin: auto;
        width: 35vw;
        height: 45vh;
        /*background: url("/src/lib/img/quest_logo.png") no-repeat;*/
        /*background-size: cover;*/
    }

    .quest_wrapper .quest_image {
        opacity: 1;
        object-fit: contain;
        transition: opacity 0.1 ease-in-out;
    }

    .quest_wrapper:hover {
        width: 100%;
        transition-duration: 0.25s;
        background:
        cadetblue url("/src/lib/img/de-line-3.png");
    }

    .quest_wrapper:hover .start_quest_button {
        margin: auto;
    }

    .quest_wrapper:hover .quest_image {
        position: absolute;
        opacity: 0;
    }

    .start_quest_button {
        align-self: flex-end;
        opacity: 0.5;
        width: 35vw;
        height: 60px;
        background: #B9D28C;
        border: 1px solid #1C284D;
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #1C284D;
        cursor: pointer;
    }

    .start_quest_button:hover {
        border-width: 3px;
        background-color: #E998E3;
        color: #FFFFFF;
        opacity: 1;
    }

    /*.book .book_image {*/
        /*box-shadow: -1px 5px 15px 2px var(--background-green);*/
        /*border-bottom-left-radius: 10px;*/
        /*border-bottom-right-radius: 10px;*/
    /*}*/

    .author .book_image img {
        height: 48vh;
        object-fit: contain;

    }

    .leni_cover {
        object-fit: cover;
        height: 38vh;
        width: auto;
    }

    .start_quest_button {
        display: none;
    }

    .begin_button {
        display: none;
    }

    .quest_wrapper:hover .begin_button {
        max-width: 800px;
        display: block;
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        position: relative;
        padding: 30px 50px;
        line-height: 30px;
        color: #c5cd9ede;
        text-transform: uppercase;
        border: 1px dashed #c5cd9ede;
        background-color: transparent;
        cursor: pointer;
        border-left-color: transparent;
        border-right-color: transparent;
    }

    .begin_button:hover {
        color: #8ACBD5;
        border-color: #8ACBD5;
        border-bottom-color: transparent;
        border-top-color: transparent;
    }

    .quest_wrapper:hover .begin_button.glitch {
        height: 45vh;
        font-size: 50px;
        font-weight: 700;
        line-height: 1.2;
        color: transparent;
        letter-spacing: 4px;
        z-index: 1;
    }

    .quest_wrapper:hover .glitch:before,
    .quest_wrapper:hover .glitch:after {
        content: var(--text);
        display: block;
        position: absolute;
        top: 10vh;
        opacity: 0.8;
    }

    .quest_wrapper:hover .glitch:before {
        animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        color: #8ACBD5;
        z-index: -1;
    }

    .quest_wrapper:hover .glitch:after {
        animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        color: #E998e3;
        z-index: -2;
    }

    .quest_wrapper:hover .start_quest_button {
        display: none;
    }

    @keyframes glitch-color {
        0% {
            transform: translate(0);
        }

        20% {
            transform: translate(-2px, 1px);
        }

        40% {
            transform: translate(-1px, -2px);
        }

        60% {
            transform: translate(1px, 1px);
        }

        80% {
            transform: translate(2px, -1px);
        }

        to {
            transform: translate(0);
        }
    }

    @media (max-width: 1270px) {
        .info_wrapper {
            padding: 15px 30px;
            height: auto;
        }

        .info_wrapper.quest {
            padding: 15px 10px;
        }

        .info_wrapper.book .info_main {
            flex-direction: column-reverse;
        }

        .info_main {
            flex-direction: column;
            row-gap: 20px;
        }

        .author .info_main {
            flex-flow: column-reverse;
        }

        .quest_wrapper:hover .begin_button.glitch {
            font-size: 40px;
        }
    }

    @media (max-width: 1050px) {
        .quest_wrapper:hover .begin_button.glitch {
            font-size: 30px;
        }
    }

    @media (max-width: 1000px) {
        .quest_wrapper {
            width: 350px;
            background-size: contain;
        }
    }

    @media (max-width: 800px) {
        .info_wrapper.quest {
            align-items: flex-start;
        }

        .quest_wrapper:hover .begin_button.glitch {
            font-size: 25px;
        }

        .quest_wrapper:hover .begin_button.glitch {
            padding: 0;
            font-size: 15px;
        }

        .quest_wrapper {
            width: 250px;
            background-size: contain;
        }
    }

    @media (min-width: 1300px) {
        .info_text,
        .author .info_text {
            line-height: normal;
            font-size: 20px;
        }
    }

</style>