<script>
    export let title;
    export let i;
    export let bonus = false;
    export let id ="";
    import {getContext} from 'svelte';

    let color = getContext("color")
</script>

<div class:opacity-80={bonus} class="card w-full relative group text-sm sm:text-normal" {id}>
    <div class="absolute bg-white h-8 w-8 -left-11 rounded-full border-gray-500 border-4 group-hover:scale-[1.1]  duration-200  
     
    {color=='blue'?'group-hover:bg-blue-200 group-hover:border-blue-800':''}
    {color=='red'?'group-hover:bg-red-200 group-hover:border-red-800':''}
    {color=='green'?'group-hover:bg-green-200 group-hover:border-green-800':''}
    {color=='pink'?'group-hover:bg-pink-200 group-hover:border-pink-800':''}
    {color=='purple'?'group-hover:bg-purple-200 group-hover:border-purple-800':''}
    {color=='teal'?'group-hover:bg-teal-200 group-hover:border-teal-800':''}
    "></div>
    <h3 class="
    {color=='blue'?'text-blue-800':''}
    {color=='red'?'text-red-800':''}
    {color=='green'?'text-green-800':''}
    {color=='pink'?'text-pink-700':''}
    {color=='purple'?'text-purple-800':''}
    {color=='teal'?'text-teal-800':''}
    ">{@html `${i?bonus?"Bonusaufgabe "+i + ": ":"Aufgabe "+i + ": ":""} ${title?title:""}`}</h3>
    <article class="text-gray-900">
        <slot/>
    </article>
</div>