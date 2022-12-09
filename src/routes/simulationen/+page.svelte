<script>
    import DisplayItem from "$lib/DisplayItem.svelte";
</script>

<div class="flex justify-center items-center h-screen container mx-auto">
    <div class="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between md:w-full flex-wrap">
        <DisplayItem src={"/vertauschte_briefe.png"} label="Wichteln" link="/simulationen/wichteln" color="blue"/>
        <DisplayItem src={"/ziegenproblem.png"} label="Ziegenproblem" link="/simulationen/ziegenproblem" color="green"/>
        <DisplayItem src={"/geburtstagsproblem.png"} label="Geburtstagsproblem" link="/simulationen/geburtstagsproblem" color="pink"/>
        <DisplayItem src={"/efron.png"} label="Efrons Würfel" link="/simulationen/efronswuerfel" color="teal"/>
        <DisplayItem src={"/kniffel.png"} label="Kniffel" link="/simulationen/kniffel" color="red"/>
    </div>
</div>
<!-- <div class="fixed bottom-0 left-0 right-0 w-full text-white pb-2">
    <div class="text-center">    
        <a href="/simulationen/info" class=" mt-2 items-center text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-md duration-100">
            Info
        </a>
    </div>
</div> -->
