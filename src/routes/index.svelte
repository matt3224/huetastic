<script>
   import '@neuekit/reboot/reboot.css'
   import '../app.css'
   import Sidebar from '$lib/Sidebar.svelte'
   import Range from '$lib/Range.svelte'
   import Ribbon from '$lib/Ribbon.svelte'
   import Topic from '$lib/Topic.svelte'
   
   let count = 12
   let shift = 0
   let jump = -30
   let hue = 360
   let sat = 100
   let lig = 48
   let sat2 = 100
   let lig2 = 48
</script>

<svelte:head>
   <title>Huetastic</title>
</svelte:head>

<Sidebar>
   <Range title="Count" min="{6}" bind:value="{count}" />
   <Range title="Shift" max="{count}" bind:value="{shift}" />
   <Range title="Jump" min="-100" bind:value="{jump}" />
   <Range title="Hue" max="360" bind:value="{hue}" />
   <hr />
   <Range title="Saturation" bind:value="{sat}" />
   <Range title="Lightness" bind:value="{lig}" />
   <hr />
   <Range title="Saturation" bind:value="{sat2}" />
   <Range title="Lightness" bind:value="{lig2}" />
</Sidebar>

<main>
   <Ribbon>
      {#each Array(count).fill() as _, i}
         <Topic
            --jump="{ jump }"
            --hue="{ (hue / count) * (i + shift) }"
            --sat="{ sat }%"
            --lig="{ lig }%"
            --sat2="{ sat2 }%"
            --lig2="{ lig2 }%"
         />
      {/each}
   </Ribbon>
</main>