<script>
    export let src;
    export let title;
    export let back = "/simulationen";
    import {getContext} from 'svelte';
    let color = getContext("color");
</script>

<a href="{back}" class="flex flex-row mt-2 items-center text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-md duration-100">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg> 
    zurück
</a>
<div class="flex flex-row h-24 items-center bg-white space-x-2 card mt-2 w-full
    {color=='blue'?'text-blue-800':''}
    {color=='red'?'text-red-800':''}
    {color=='green'?'text-green-800':''}
    {color=='pink'?'text-pink-700':''}
    {color=='purple'?'text-purple-800':''}
    {color=='teal'?'text-teal-800':''}
    ">
    {#if src}
    <img {src} alt={title} class="h-24">
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    {/if}      
    <h1 class="font-bold sm:text-5xl text-2xl">
        {title}
    </h1>
</div>