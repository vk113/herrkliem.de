<script>
    import {e_in_front} from '$lib/settings.js';

</script>


  <!-- Toggle B -->
<div class="flex items-center justify-center">

    <label for="toggleB" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
        <!-- input -->
        <input type="checkbox" id="toggleB" bind:checked={$e_in_front} class="sr-only">
        <!-- line -->
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <!-- dot -->
        <div class="dot absolute left-1 top-1 bg-red-500 w-6 h-6 rounded-full transition"></div>
        </div>
        <!-- label -->
    </label>

</div>
  
  
<style lang="postcss">
    /* Toggle B */
    input:checked ~ .dot {
        @apply transform translate-x-full bg-green-500;
    }
</style>