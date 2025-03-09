<script>
    export let type = "book";
</script>

<section class="info">
    <div class="info_wrapper {type}">
        <div class="info_main">
            {#if type === "book"}
                <p class="info_text">Рано или поздно это должно было случиться. Разработанная человеком сеть
                    искусственных интеллектов, питавшая саму жизнь, обернулась против него. Планета была очищена и
                    преобразована. Остатки человечества укрылись под энергетическим куполом неприступного «Квадрата
                    Совета». Барьер надёжно защищает от угроз извне, но способен ли он уберечь порядок внутри? Есть ли у
                    утративших самих себя людей право на то, чтобы вновь встать во главе мироздания, или их участь
                    предрешена неумолимым Усовершенствованием?
                </p>
                <div class="book_image">
                    <img class="leni_cover" width="280" src="img/book-3d.png" alt="LENIMENTUS">
                </div>
            {/if}

            {#if type === 'quest'}
                <div class="quest_wrapper">
                    <button class="play_quest" on:click={() => window.location = 'http://89.191.225.149:8081'}>
                        Начать усовершенствование
                    </button>
                </div>
            {/if}
            {#if type === 'author'}
                <p class="info_text">
                    Эл Фарбер — писательница из Мурманска, выросшая на произведениях таких мастеров фантастики,
                    как А. Азимов, Г. Гаррисон, Ф. Дик, Дж. Уиндем и Р. Хайнлайн.
                    Путешествия сквозь бесконечную Вселенную, тайны далёких миров и их обитателей, высокотехнологичное
                    будущее
                    и острые социальные проблемы, неотъемлемо шагающие сквозь пространство и время рука об руку с
                    человечеством, вдохновили Фарбер на собственный роман.
                    Первые наброски LENIMENTUS появились в школьные годы, десять лет спустя они были переработаны и
                    развиты в полноценное социально-фантастическое произведение.
                    LENIMENTUS — не только писательский дебют автора, но и личное внутреннее Усовершенствование.
                </p>
                <div class="book_image">
                    <img class="author_photo" width="300" src="img/farber.jpg" alt="LENIMENTUS">
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .info {
        padding: 0 25px;
    }

    .info_wrapper {
        display: flex;
        align-items: center;
        padding: 20px 100px;
        height: 520px;
    }

    .info_wrapper.book {
        background-color: var(--background-green);
        box-shadow: -1px 5px 15px 2px var(--background-green);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .info_wrapper.quest {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-blue);
        box-shadow: -1px 5px 15px 2px var(--background-blue);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .info_wrapper.author {
        background-color: var(--background-pink);
        box-shadow: -1px 5px 15px 2px var(--background-pink);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .info_text {
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: #1b2645;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .author .info_text {
        font-size: 20px;
    }

    .info_main {
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
        position: relative;
        margin: auto;
        width: 420px;
        height: 520px;
        background: url("/src/lib/img/quest_logo.png") no-repeat center;
    }

    .quest_wrapper:hover {
        transition-duration: 0.35s;
        background: url("/src/lib/img/quest_logo.png") no-repeat center,
                    cadetblue url("/src/lib/img/de-line-3.png");
    }

    .play_quest {
        position: absolute;
        top: 85%;
        left: 20%;
        opacity: 0.5;
        width: 250px;
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
    }

    .play_quest:hover {
        border-width: 3px;
        background-color: #E998E3;
        color: #FFFFFF;
        opacity: 1;
    }

    .book .book_image {
        box-shadow: -1px 5px 15px 2px var(--background-green);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .author .book_image {
        box-shadow: -1px 5px 15px 2px var(--background-pink);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    @media (max-width: 480px) {
        .info_wrapper {
            min-height: 1200px;
        }

        .info_text {
            text-align: left;
        }
    }

    @media (min-width: 480px) and (max-width: 590px) {
        .info_wrapper {
            min-height: 900px;
        }
    }

    @media (min-width: 591px) and (max-width: 1270px) {
        .info_wrapper {
            min-height: 800px;
        }
    }

    /*@media (min-width: 720px) and (max-width: 1200px) {*/
    /*    .info_wrapper {*/
    /*        min-height: 1000px;*/
    /*    }*/
    /*}*/

    @media (max-width: 1270px) {
        .info_wrapper {
            padding: 15px 15px;
        }

        .quest_wrapper {
            width: 280px;
            background-size: cover;
        }

        .play_quest {
            left: 4%;
        }

        .info_main {
            flex-direction: column;
            row-gap: 50px;
        }

        .author .info_main {
            flex-flow: column-reverse;
        }
    }
</style>