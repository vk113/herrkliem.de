<script>
    import {e_in_front} from '$lib/settings.js';
    import Movable from '$lib/Movable.svelte';
    import SettingsBlock from '$lib/SettingsBlock.svelte';
    import SettingsItem from '$lib/SettingsItem.svelte';
    export let b_field;

</script>


<Movable bind:t={b_field.t} bind:l={b_field.l} bind:w={b_field.w} bind:h={b_field.h} resizable in_front={!$e_in_front}>
    <div slot="settings">
        <SettingsBlock>
            <SettingsItem bind:value={b_field.B} name={"B"} min={-0.5} max={0.5} step={0.001}/>
        </SettingsBlock>
    </div>
    <div slot="content">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            B-Field
        </div>
    </div>
    
</Movable>


