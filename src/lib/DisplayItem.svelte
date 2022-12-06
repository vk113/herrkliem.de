<script>
    export let label; 
    export let src;
    export let color;
    export let link;
</script>


<ul>
    <li class="card hover:scale-105 duration-200 hover:shadow-2xl w-48 text-center
    {color=='blue'?'text-blue-800':''}
    {color=='red'?'text-red-800':''}
    {color=='green'?'text-green-800':''}
    {color=='pink'?'text-pink-700':''}
    {color=='purple'?'text-purple-800':''}
    {color=='teal'?'text-teal-800':''}">
        <a href={link}>
            <img {src} alt="" class="h-24 object-contain mx-auto">
            <div class="label text-lg font-bold">
                {label}
            </div>
        </a>
    </li>
</ul>
