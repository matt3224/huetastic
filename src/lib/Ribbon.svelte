<div class="ribbon">
   <slot />
</div>

<style>
   .ribbon {
      box-sizing: border-box;
      display: grid;
      gap: 10px;
      grid-auto-flow: column;
      grid-auto-columns: 120px;
      padding: 20px 20px 100px;
      position: relative;
      overflow: auto;
      scroll-padding: 20px;
   }
   
   .ribbon::-webkit-scrollbar {
      display: none;
   }
   
   .ribbon::after {
      content: '';
      height: 100%;
      width: 1px;
   }
   
   :global(.grid .ribbon) {
      gap: 20px;
      grid-auto-flow: initial;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
   }
</style>