<script>
   import { data } from '$lib/store.js'
   
   let files
   let input
   
   function save() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify($data))
      const AnchorNode = document.createElement('a')
      
      AnchorNode.setAttribute('href', dataStr)
      AnchorNode.setAttribute('download', 'huetastic.json')
      
      document.body.appendChild(AnchorNode) // required for firefox
      
      AnchorNode.click()
      AnchorNode.remove()
   }
   
   $: if (files && files[0].type.endsWith('json')) {
      const reader = new FileReader()
      
      reader.addEventListener('load', e => $data = JSON.parse(e.target.result))
      reader.readAsText(files[0])
   }
</script>

<aside class="sidebar">
   <header class="head">
      Huetastic
      <input style="display: none" type="file" bind:files bind:this="{input}">
      <button class="load" title="load" on:click="{() => input.click()}">
         <svg class="icon"><use xlink:href="/icons.svg#up" /></svg>
      </button>
      <button class="save" title="save" on:click="{save}">
         <svg class="icon"><use xlink:href="/icons.svg#down" /></svg>
      </button>
   </header>
   <slot />
   <footer class="foot">
      <div class="made" data-version="pkg.version">Made by Design™</div>
      <div class="layout" on:click="{() => document.body.classList.toggle('grid')}">
         <div class="glyph"></div>
         <div class="glyph"></div>
         <div class="glyph"></div>
         <div class="glyph"></div>
      </div>
      <div class="mode" on:click="{() => document.body.classList.toggle('dark')}">
         <svg class="sun"><use xlink:href="/icons.svg#sun" /></svg>
         <svg class="moon"><use xlink:href="/icons.svg#moon" /></svg>
      </div>
   </footer>
</aside>

<style>
   .sidebar {
      display: flex;
      flex-direction: column;
      -webkit-user-select: none;
      user-select: none;
   }
   
   .head {
      align-items: center;
      display: flex;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 40px;
      margin-right: -8px;
   }
   
   .load {
      margin-left: auto;
   }
   
   .icon {
      height: 24px;
      margin-left: 4px;
      width: 24px;
   }
   
   .foot {
      display: flex;
      margin-top: auto;
   }
   
   .made {
      background-image: linear-gradient(90deg, var(--manhattan) 33.33%, var(--plum) 33.33%, var(--plum) 66.66%, var(--perano) 66.66%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 300% 100%;
      background-position: 100%;
      cursor: pointer;
      font-weight: 600;
      margin-right: auto;
      padding: 0;
      transition: background-position 275ms ease;
   }
   
   .made:hover {
      background-position: 50% 100%
   }
   
   .made:active {
      background-position: 0 100%
   }
   
   .made::after {
      color: var(--perano);
      content: attr(data-version);
      display: block;
      font-size: 12px;
      opacity: 0.5;
      position: absolute;
      transform: translateZ(0);
      -webkit-text-fill-color: initial;
   }
   
   .mode,
   .layout {
      background-color: var(--perano);
      border-radius: 50%;
      cursor: pointer;
      height: 36px;
      margin: 0 -4px 0 16px;
      overflow: hidden;
      width: 36px;
   }
   
   .layout {
      display: grid;
      gap: 2px;
      grid-template-columns: repeat(4, 4px);
      grid-template-rows: repeat(1, 8px);
      place-content: center;
   }
   
   .glyph {
      background-color: var(--mirage);
      border-radius: 2px;
      height: 100%;
      width: 100%;
   }
   
   .sun,
   .moon {
      fill: var(--mirage);
      height: 20px;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: left 0.5s 0.5s ease, top 0.5s 0.5s ease, fill 0.5s ease;
      width: 20px;
   }
   
   .sun {
      left: 50%;
      top: 50%;
   }
   
   .moon {
      left: 150%;
      top: 75%;
   }
   
   :global(.dark .mode) {
      background-color: var(--black);
   }
   
   :global(.dark .sun) {
      fill: var(--perano);
      left: -50%;
      top: 75%;
   }
   
   :global(.dark .moon) {
      fill: var(--perano);
      left: 50%;
      top: 50%;
   }
   
   :global(.grid .layout) {
      grid-template-columns: repeat(2, 5px);
      grid-template-rows: repeat(2, 8px);
   }
</style>