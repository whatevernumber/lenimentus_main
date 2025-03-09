<script>
    export let type = 'book';
</script>

<nav class="nav_block">
    <ul class="nav_list">
        <li class="menu menu_book {type === 'book' ? 'active' : ''}" on:click={() => type = 'book'} role="button">
            <span>О книге</span>
        </li>
        <li class="menu menu_quest {type === 'quest' ? 'active' : ''}" on:click={() => type = 'quest'} role="button">
            <span>???</span>
        </li>
        <li class="menu menu_author {type === 'author' ? 'active' : ''}" on:click={() => type = 'author'} role="button">
            <span>Об авторе</span>
        </li>
    </ul>
</nav>

<style>
    .nav_block {
        padding: 0 25px;
    }

    .nav_list {
        display: flex;
        justify-content: space-between;
        column-gap: 5px;
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 180px;
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
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .menu_book.active {
        box-shadow: -1px 2px 15px 3px var(--background-green);
        border-top-left-radius: 5%;
    }

    .menu_quest.active {
        box-shadow: -1px 2px 15px 3px var(--background-blue);
        border-top-left-radius: 5%;
        border-top-right-radius: 5%;
    }

    .menu_author.active {
        box-shadow: -1px 2px 15px 3px var(--background-pink);
        border-top-right-radius: 5%;
    }

    @media (max-width: 767px) {
        .menu {
            width: 90px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .menu {
            width: 120px;
            height: 120px;
        }
    }
</style>