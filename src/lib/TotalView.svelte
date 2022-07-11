<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
    import image from '$lib/earth.jpg';
    import { onMount } from 'svelte';
    export let h;
    export let r = 2;
    export let fov;
    let mounted = false;
    var material = new THREE.MeshBasicMaterial();
    let u = 0
    let t = 0
    $: s = Math.sqrt((h+r)**2-r**2)
    $: alpha = Math.acos(s/(h+r))
    $: t = Math.sin(alpha)*s
    // $: t = Math.sqrt(1-s**2/(h+r)**2)*Math.sqrt((h+r)**2+r**2)
    $: u = Math.sqrt(s**2-t**2)
    onMount(() => {
        material.map = new THREE.TextureLoader().load(image, () => {mounted = true});
        }
    )
</script>
<SC.Canvas >
    {#if mounted}
    <SC.Mesh position={[0, -3+r+h, 0]} geometry={new THREE.SphereGeometry(0.05, 16, 16)} material={new THREE.MeshBasicMaterial( { color: "red" })}/>
    <SC.Mesh position={[0, -3, 0]} geometry={new THREE.SphereGeometry(r, 64, 64)} {material} />
    <SC.Mesh position={[0, -3+r+h-u/2, 0]} geometry={new THREE.ConeGeometry(t, u, 64)} material = {new THREE.MeshBasicMaterial( { color: "#dd0000", wireframe: true})} />
    {/if}
    <SC.PerspectiveCamera position={[10,0,0]} {fov} />
    <SC.OrbitControls enableZoom={true} />
</SC.Canvas>
