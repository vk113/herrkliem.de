<script>
    import {getContext} from 'svelte';
    let color = getContext("color");
    export let choices = [
        {
            text: "Simulieren",
            href: "/simulationen/ziegenproblem/simulieren"
        },
        {
            text: "Berechnen",
            href: "/simulationen/ziegenproblem/berechnen"
        }
    ]
</script>

<div class="flex flex-row space-x-2 w-full justify-around my-2
    ">
    {#each choices as c}
    <a class="p-4 rounded-md shadow-md font-bold hover:scale-105 hover:shadow-xl duration-200
    {color=='blue'?'text-blue-800 bg-blue-200 border-2 border-blue-800':''}
    {color=='red'?'text-red-800 bg-red-200 border-2 border-red-800':''}
    {color=='green'?'text-green-800 bg-green-200 border-2 border-green-800':''}
    {color=='pink'?'text-pink-700 bg-pink-200 border-2 border-pink-700':''}
    {color=='purple'?'text-purple-800 bg-purple-200 border-2 border-purple-800':''}
    {color=='teal'?'text-teal-800 bg-teal-200 border-2 border-teal-800':''}"
    href={c.href}>{c.text}</a>
    {/each}
</div>