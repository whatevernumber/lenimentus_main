<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { preferredLanguage } from '$lib/stores/lang.js';
    import { onMount } from 'svelte';

    onMount(() => {
        let userLanguage = localStorage.getItem('language');
        preferredLanguage.set(userLanguage || 'ru');
    });

</script>
<Header />
<slot />
<Footer />