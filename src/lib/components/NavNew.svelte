<script>
    import {preferredLanguage} from "$lib/stores/lang.js";
    import {handleKey} from "$lib/utils/utils.js";

    export let type = 'book';

    const langMap = {
        about_book: {
            ru: 'О книге',
            en: 'Book'
        },
        about_author: {
            ru: 'Об авторе',
            en: 'Author',
        }
    }

    const setType = (newType) => {
        type = newType;
    }
</script>

<nav class="nav_block">
    <ul class="nav_list">
        <li class="menu menu_book {type === 'book' ? 'active' : ''}" on:keydown={(e) => handleKey(e, 'book', setType)} on:click={() => setType('book')} role="button" tabindex="2">
            <span>{langMap.about_book[$preferredLanguage]}</span>
        </li>
        <li class="menu menu_quest {type === 'quest' ? 'active' : ''}" on:keydown={(e) => handleKey(e, 'quest', setType)} on:click={() => setType('quest')} role="button" tabindex="2">
            <span>???</span>
        </li>
        <li class="menu menu_author {type === 'author' ? 'active' : ''}" on:keydown={(e) => handleKey(e, 'author', setType)} on:click={() => setType('author')} role="button" tabindex="2">
            <span>{langMap.about_author[$preferredLanguage]}</span>
        </li>
    </ul>
</nav>

<style>
    .nav_list {
        display: flex;
        justify-content: space-between;
        column-gap: 5px;
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 13vw;
        height: 13vw;
        max-width: 100px;
        max-height: 100px;
        cursor: pointer;
    }

    .menu_book {
        background-color: var(--background-green);
    }

    .menu_quest {
        background-color: var(--background-blue);
    }

    .menu_author {
        background-color: var(--background-pink);
    }

    .menu:hover {
        opacity: 0.9;
    }

    .menu span {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .menu.active {
        background-color: unset;
    }

    /*.menu_book.active {*/
        /*box-shadow: -1px 2px 15px 3px var(--background-green);*/
        /*border-top-left-radius: 5%;*/
    /*}*/

    /*.menu_quest.active {*/
        /*box-shadow: -1px 2px 15px 3px var(--background-blue);*/
        /*border-top-left-radius: 5%;*/
        /*border-top-right-radius: 5%;*/
    /*}*/

    /*.menu_author.active {*/
        /*box-shadow: -1px 2px 15px 3px var(--background-pink);*/
        /*border-top-right-radius: 5%;*/
    /*}*/

    @media (max-width: 768px) {
        .menu {
            width: 22vw;
            height: 22vw;
        }
    }
</style>