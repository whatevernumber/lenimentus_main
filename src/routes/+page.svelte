<script>
    import About from "$lib/components/About.svelte";
    import NavNew from "$lib/components/NavNew.svelte";

    let type = "book";
</script>

<NavNew bind:type />
<About bind:type />