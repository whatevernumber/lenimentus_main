<script>
    import { preferredLanguage } from '$lib/stores/lang.js';

    const setLanguage = (lang) => {
        localStorage.setItem('language', lang);
        preferredLanguage.set(lang);
    }
</script>

<header class="header">
    <div class="header_author">
        <a href="mailto:lenimentus@protonmail.com">L Farber</a>
    </div>
    <section class="header_title">
        <h1 class="leni-h1">L E N I M E N T U S</h1>
        <div class="language_choice">
            <div class="language_button { $preferredLanguage === 'ru' ? 'active' : ''}" on:click={() => setLanguage('ru')} role="button" tabindex="1">
                ru
            </div>
            <div class="language_button { $preferredLanguage === 'en' ? 'active' : ''}" on:click={() => setLanguage('en')} role="button" tabindex="2">
                en
            </div>
        </div>
    </section>
</header>

<style>

    .header_author {
        margin-top: 5px;
        padding-right: 6px;
        font-size: 32px;
        color: white;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        line-height: 39px;
        text-align:right;
        text-shadow: -1px -1px 0 var(--background-blue),1px -1px 0 var(--background-pink);
    }

    .header_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
    }

    .header_title h1 {
        font-style: normal;
        line-height: 100px;
        color: #FFFFFF;
        font-size: 65px;
        text-shadow: -1px -1px 0 var(--background-blue),1px -1px 0 var(--background-pink),-1px 1px 0 var(--background-green),1px 1px 0 var(--background-green);
    }

    .language_choice {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .language_button {
        background-image: url('/img/special_group.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        padding: 10px 10px;
        cursor: pointer;
    }

    .language_button.active {
        text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    }

    @media (max-width: 950px) {
        .header_title h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 767px) {
        .header_title h1 {
            font-size: 25px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .header_title {
            font-size: 38px;
        }
    }
</style>