<script>
   import '@neuekit/reboot/reboot.css'
   import '../app.css'
   import Sidebar from '$lib/Sidebar.svelte'
   import Range from '$lib/Range.svelte'
   import Ribbon from '$lib/Ribbon.svelte'
   import Topic from '$lib/Topic.svelte'
   import { data } from '$lib/store.js'
</script>

<svelte:head>
   <title>Huetastic</title>
</svelte:head>

<Sidebar>
   <Range title="Count" min="6" bind:value="{$data.count}" />
   <Range title="Shift" max="{$data.count}" bind:value="{$data.shift}" />
   <Range title="Jump" min="-100" bind:value="{$data.jump}" />
   <Range title="Hue" max="360" bind:value="{$data.hue}" />
   <hr />
   <Range title="Saturation" bind:value="{$data.sat}" />
   <Range title="Lightness" bind:value="{$data.lig}" />
   <hr />
   <Range title="Saturation" bind:value="{$data.sat2}" />
   <Range title="Lightness" bind:value="{$data.lig2}" />
   <hr />
   <button class="reset" on:click="{() => data.reset()}">
      <svg class="icon"><use xlink:href="/icons.svg#reset" /></svg>
   </button>
</Sidebar>

<main>
   <Ribbon>
      {#each Array($data.count).fill() as _, i}
         <Topic
            --jump="{ $data.jump }"
            --hue="{ ($data.hue / $data.count) * (i + $data.shift) }"
            --sat="{ $data.sat }%"
            --lig="{ $data.lig }%"
            --sat2="{ $data.sat2 }%"
            --lig2="{ $data.lig2 }%"
         />
      {/each}
   </Ribbon>
</main>

<style>
   .load,
   .save {
      inset: auto 40px 40px auto;
      position: absolute;
      z-index: 1;
   }
   
   .load {
      right: 100px;
   }
   
   .reset {
      display: inline-block;
      place-self: flex-start;
      padding: 0;
   }
   
   .icon {
      height: 24px;
      width: 24px;
   }
</style>