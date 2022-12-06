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
