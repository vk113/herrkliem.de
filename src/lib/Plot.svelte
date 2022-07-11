<script>
    import * as Pancake from '@sveltejs/pancake';
    export let h;
    const RADIUS = 6371;
    export let func = (h) => {return 1/(2*(1+RADIUS/h))}
    export let x_max;
    export let y_zoom = 1
    export let intervall_size = 0.1;
    export let lim;
    export let step;
    import katex from 'katex';
    $: x_max = Math.max(x_max, h*RADIUS*1.2);


    $: limit = [{x:0, y:lim}, {x:x_max, y:lim}]
    $: interval = [{x:0, y:lim-intervall_size},{x:x_max, y:lim-intervall_size}, {x:x_max, y:lim+intervall_size},{x:0, y:lim+intervall_size}]
    $: points = [...Array(200).keys()].map(x => {return {x: x*x_max/200, y: func(x*x_max/200)}})
    $: delta = 2*RADIUS*(lim-intervall_size)/(1-2*(lim-intervall_size))
    $: delta_path = [{x: delta, y:0}, {x: delta,y:1}]
    $: delta_area = [{x: delta, y:0}, {x: delta,y:1}, {x: x_max, y: 1}, {x: x_max, y: 0}, {x: delta, y:0}]
    console.log(points)

  </script>
  <svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous">
  </svelte:head>
  <div class="flex flex-col h-full">
    <div class="h-5/6 flex flex-row">
        <div class="m-auto w-4">
            <div class="absolute -rotate-90 -translate-x-[35%] -translate-y-[50%]">
                <input type="range" max={1} min={0.01} step={0.01} bind:value={y_zoom}>
                <div>
                    Sichtbarer Anteil
                </div>
            </div>
        </div>
        <div class="chart h-full w-full overflow-hidden">
            <Pancake.Chart x1={0} x2={x_max} y1={0.5-y_zoom/2} y2={0.5+y_zoom/2}>
                <Pancake.Grid vertical count={10} let:value>
                    <div class="grid-line vertical"></div>
                    <span class="x label">{value}</span>
                </Pancake.Grid>
                <Pancake.Grid horizontal count={5} let:value>
                    <div class="grid-line horizontal"></div>
                    <span class="y label">{value}</span>
                </Pancake.Grid>
                <Pancake.Svg>
                  {#if step >= 3}
                  <Pancake.SvgLine data={interval} let:d >
                    <path class="stroke-green-500 fill-green-500 opacity-30"  d={d + "z"} />
                </Pancake.SvgLine>
                {/if}
                    
                    {#if step >= 2}

                    <Pancake.SvgLine data={limit} let:d>
                      <path class="data stroke-green-600 stroke-2" {d}/>
                  </Pancake.SvgLine>
                  {/if}
                  {#if step >= 4}
                    <Pancake.SvgLine data={delta_path} let:d>
                      <path class="data stroke-blue-700" {d}/>
                    </Pancake.SvgLine>
                    <Pancake.SvgLine data={delta_area} let:d>
                      <path class="fill-blue-300 opacity-20" {d}/>
                    </Pancake.SvgLine>
                  {/if}
                  <Pancake.SvgLine data={points} let:d>
                    <path class="data stroke-red-500 stroke-[3px]" {d}/>
                </Pancake.SvgLine>
                  
                    <Pancake.SvgPoint x={h*RADIUS} y={func(h*RADIUS)} let:d>
                        <path class="data stroke-[10px] stroke-red-500" d={d} />
                    </Pancake.SvgPoint>
                    
                </Pancake.Svg>
            </Pancake.Chart>
        </div>
        <div>
        </div>
    </div>
    <div class="w-full  text-center ">
        <div>Entfernung {@html katex.renderToString('h')} in {@html katex.renderToString('km')}</div>
        <input id="x_max" type="range"min={20000} max={2000000} step={0.1} bind:value={x_max}>

    </div>
    </div>
  
  <style>
    .chart {
      padding-bottom: 1em;
      padding-left: 4em;
      padding-right: 2em;
      box-sizing: border-box;
    }
  
    .axes {
      width: 100%;
      height: 100%;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
    }
  
    .y.label {
      position: absolute;
      left: -2.5em;
      width: 2em;
      text-align: right;
      bottom: -0.5em;
    }
  
    .x.label {
      position: absolute;
      width: 4em;
      left: -2em;
      bottom: -22px;
      font-family: sans-serif;
      text-align: center;
    }
  
    path.data {
      stroke-linejoin: round;
      stroke-linecap: round;
      fill: none;
    }

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100%);
	
		border-bottom: 1px dashed #ccc;

	}

	.grid-line.vertical {
		height: 100%;
		border-left: 1px dashed #ccc;
	}

	.grid-line span {
		position: absolute;
		left: 0;
		bottom: -0.5em;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		line-height: 1;
	}


  </style>