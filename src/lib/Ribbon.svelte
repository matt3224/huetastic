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
      padding: 40px 20px 100px;
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
</style>