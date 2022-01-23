<script>
    export let expended = false;
    import { fade } from "svelte/transition";
</script>
<div class="absolute -top-3 -right-2 bg-gray-100 text-gray-700 {expended?"p-3":"p-1"} rounded-xl shadow-xl opacity-100 z-10">
    <div class="flex flex-row space-x-5 justify-between items-center">
        {#if expended}
        <div transition:fade={{duration:200}} class="">
            <slot/>
        </div>
        {/if}
        <button on:click={()=>{expended = !expended}} class="p-0 m-0">
            {#if expended}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            {:else }
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            {/if}
        </button>
    </div>
</div>