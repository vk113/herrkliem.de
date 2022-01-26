<script>
    import {e_in_front, E_min, E_max, E_step} from '$lib/settings.js';
    import Movable from '$lib/Movable.svelte';
    import SettingsBlock from '$lib/SettingsBlock.svelte';
    import SettingsItem from '$lib/SettingsItem.svelte';
    export let e_field;
    export let i;
    let max_density = 30; //minimum distance betwween two arrows
    $: direction_down = e_field.E.y > 0; 
    $: n_of_arrows = Math.max(2, Math.floor(e_field.w/max_density*Math.abs(Math.min(e_field.E.y, $E_max))/$E_max));
    $: arrows = [...Array(n_of_arrows).keys()].map(i => e_field.w/(n_of_arrows+1)*(i+1/2));
</script>


<Movable bind:t={e_field.t} bind:l={e_field.l} bind:w={e_field.w} bind:h={e_field.h} resizable in_front={$e_in_front}>
    <div slot="settings">
        <SettingsBlock >
            <SettingsItem bind:value={e_field.E.y} name={"E"} unit="V/m" min={$E_min} max={$E_max} step={$E_step}>
    
            </SettingsItem>
        </SettingsBlock>    
    </div>
    <div slot="content" >
        <div class="text-green-500 absolute top-[10%] m-1">
            E<sub>{i+1}</sub>
        </div>
        <div class="absolute cursor-none border-2 border-gray-700 w-full h-[10%] text-white">
        </div>
        <div class="absolute top-[10%] h-[80%] w-full border-2 border-green-500 overflow-hidden opacity-50">
            
            {#each arrows as arrow}
            <div style="left:{arrow}px;transform: {direction_down?"":`translateX(${-e_field.w + max_density}px) rotate(180deg)`}" class="absolute w-full text-green-500">
                <svg class="w-auto text-green-500" viewBox="200 0 802 2670" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5; height:{e_field.h*0.8}px">
                    <g transform="matrix(1,0,0,1,0,4.144e-05)">
                        <g id="ArtBoard1" transform="matrix(1,0,0,0.980632,-744.06,-202.579)">
                            <rect x="744.06" y="206.58" width="801.696" height="2721.84" style="fill:none;"/>
                            <g transform="matrix(1,0,0,1.01975,-15.4388,-57.2451)">
                                <path class="stroke-current" d="M1153.82,318.152L1153.82,2885.83" style="fill:none;stroke-width:30px;"/>
                            </g>
                            <g transform="matrix(1,0,0,1.01975,91.1739,79.2564)">
                                <path class="stroke-current" d="M907.733,2636.54L1048.33,2754.74L1188.05,2633.01" style="fill:none;stroke-width:30px;"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            {/each}
        </div>
        <div class="absolute pointer-events-none border-2 border-gray-700 bottom-0 left-0 w-full h-[10%]">
            
        </div>
    </div>
</Movable>