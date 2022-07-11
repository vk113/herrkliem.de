<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

    import image from '$lib/earth.jpg';
    import { onMount } from 'svelte';
    export let h;
    export let r;
    export let fov;
    let mounted = false;
    var material = new THREE.MeshBasicMaterial();

    let canvas;
    onMount(() => {
        material.map = new THREE.TextureLoader().load(image, () => {mounted = true});
        }
    )
</script>
<SC.Canvas >
    {#if mounted}
    <SC.Mesh geometry={new THREE.SphereGeometry(r, 64, 64)} {material} />
    {/if}
    <SC.PerspectiveCamera position={[0,r+h,0]} {fov} />
    <SC.OrbitControls enableZoom={false} />
</SC.Canvas>
