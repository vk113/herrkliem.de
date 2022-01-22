<script>
    import {e_in_front} from '$lib/settings.js';
    import Movable from '$lib/Movable.svelte';
    import SettingsBlock from '$lib/SettingsBlock.svelte';
    import SettingsItem from '$lib/SettingsItem.svelte';
    export let e_field;
</script>


<Movable bind:t={e_field.t} bind:l={e_field.l} bind:w={e_field.w} bind:h={e_field.h} resizable in_front={$e_in_front}>
    <div slot="settings">
        <SettingsBlock>
            <SettingsItem bind:value={e_field.E.y} name={"E"} unit="V/m" min={0} max={0.1} step={0.001}>
    
            </SettingsItem>
        </SettingsBlock>    
    </div>
    <div slot="content">

        <div class="absolute cursor-none bg-black w-full h-[10%] text-white">
            
        </div>
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            E-Field
        </div>
        <div class="absolute pointer-events-none bg-black bottom-0 left-0 w-full h-[10%]">
            
        </div>
    </div>
</Movable>