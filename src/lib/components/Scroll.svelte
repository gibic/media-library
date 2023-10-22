<script lang="ts">
    import { scrollPosition } from '$lib/stores/modalStore';
    import { onMount, beforeUpdate  } from 'svelte';
  
    let unsubscribe = () => {};

    onMount(() => {
    const handleScroll = () => {
        scrollPosition.set(window.scrollY);
        localStorage.setItem('scrollY', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    unsubscribe = () => {
        window.removeEventListener('scroll', handleScroll);
    };
    });

    beforeUpdate(unsubscribe);
</script>