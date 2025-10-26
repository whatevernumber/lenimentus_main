<script>
    import About from "$lib/components/About.svelte";
    import NavNew from "$lib/components/NavNew.svelte";

    let type = "book";
</script>

<div class="main_section_wrapper">
    <NavNew bind:type />
    <About bind:type />
</div>

<style>
    .main_section_wrapper {
        padding: 0 20px;
        margin: auto;
        width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 1270px) {
        .main_section_wrapper {
            overflow-x: hidden;
            overflow-y: scroll;
        }

        .main_section_wrapper:has(.quest) {
            overflow-y: hidden;
        }
    }
</style>
