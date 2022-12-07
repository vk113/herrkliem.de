<script>
    import Modal from '$lib/Modal.svelte';
    import {createEventDispatcher} from 'svelte';
    export let open;

    
</script>

<Modal bind:open={open} on:click>
    Möchtest du wirklich die Lösungen schon sehen?
</Modal>