<script>
   import { fly } from 'svelte/transition'
   
   let copied = false
   
   async function copy({ target }) {
      const from = getComputedStyle(target).getPropertyValue('--from')
      const to = getComputedStyle(target).getPropertyValue('--to')
      
      await navigator.clipboard.writeText(`radial-gradient(0% 0%, ${from}, ${to})`)
      
      copied = true
      setTimeout(() => copied = false, 3000)
   }
</script>

<div class="topic" on:click="{copy}">
   {#if copied}
      <div class="copied" in:fly="{{ y: 30 }}" out:fly="{{ y: -30 }}">Copied</div>
   {/if}
</div>

<style>
   .topic {
      --from: hsl(var(--hue1) var(--sat1) var(--lig1));
      --to: hsl(var(--hue2) var(--sat2) var(--lig2));
      
      cursor: pointer;
      position: relative;
      transition: all 0.25s ease;
      will-change: transform;
   }
   
   .topic::before,
   .topic::after {
      background-image: -webkit-radial-gradient(0% 0%, var(--from), var(--to));
      border-radius: 14px;
      background-size: 100%;
      content: '';
      transition: all 0.25s ease;
   }
   
   .topic::before {
      filter: blur(40px);
      inset: 20px 10px 0px;
      position: absolute;
      will-change: filter;
   }
   
   .topic::after {
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.1), 0 1px 1px rgba(0,0,0,0.1), inset 0 -40px 80px 0px rgba(0, 0, 0, 0);
      display: block;
      padding-top: 130%;
      z-index: 1;
   }
   
   .topic:hover {
      transform: scale(1.05);
   }
   
   .topic:hover::after {
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.1), 0 1px 1px rgba(0,0,0,0.1), inset 0 -40px 80px 0px rgba(0, 0, 0, 0.05);
   }
   
   .topic:active::before,
   .topic:active::after {
      transform: scale(0.95);
   }
   
   :global(.dark .topic::before) {
      opacity: 0.5;
   }
   
   .copied {
      color: rgba(255,255,255,1);
      display: grid;
      font-size: 20px;
      font-weight: 600;
      inset: 0;
      mix-blend-mode: overlay;
      place-content: center;
      position: absolute;
      z-index: 2;
   }
</style>