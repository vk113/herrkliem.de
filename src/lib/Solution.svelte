<script>
	import { slide } from "svelte/transition";
    import Overlay from "./Overlay.svelte";
    export let title = "title";
	export let isOpen = false
    let dialogOpen = false;
	const toggle = () =>{
        if(isOpen){
            isOpen = !isOpen
        } else {
            dialogOpen=true
        }
    }
</script>
<style>
	.chevron { transition: transform 0.2s ease-in;}
	
	[aria-expanded=true] .chevron { transform: rotate(-0.25turn); }
</style>
<Overlay bind:open={dialogOpen} on:click={() => {isOpen=true;dialogOpen=false}}/>
<div class="mt-2 mx-2 rounded-lg overflow-hidden border-red-500 border-2 bg-red-100">
    <button on:click={toggle} aria-expanded={isOpen} class="  p-2 flex flex-row justify-between w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    
        <div class="m-auto">
            {@html title}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 chevron">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        
    </button>
    {#if isOpen}
            <hr class="bt-2 border-red-500 border-t-2 mx-2">
        {/if}
    {#if isOpen}
    <div transition:slide={{ duration: 300 }} class=" rounded-b-lg p-2">
        <slot>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque dolores, sit cum id et, possimus voluptas nam optio corrupti sed aliquid? Cumque in fuga aut ipsa vero doloremque dolores!
        </slot>
    </div>
    {/if}
</div>