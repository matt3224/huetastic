<div class="topic"></div>

<style>
   .topic {
      --hsl: hsl(var(--hue) var(--sat) var(--lig));
      --hsl2: hsl(calc(var(--hue) + var(--jump)) var(--sat2) var(--lig2));
      
      cursor: pointer;
      position: relative;
      transition: all 0.25s ease;
      will-change: transform;
   }
   
   .topic::before,
   .topic::after {
      background-image: -webkit-radial-gradient(0% 0%, var(--hsl), var(--hsl2));
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
</style>