<aside class="sidebar">
   <header class="title">Huetastic</header>
   <slot />
   <footer class="foot">
      <div class="made">Made by Design™</div>
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
   
   .title {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 40px;
   }
   
   .foot {
      align-items: center;
      display: flex;
      justify-content: space-between;
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
      padding: 0;
      transition: background-position 275ms ease;
   }
   
   .made:hover {
      background-position: 50% 100%
   }
   
   .made:active {
      background-position: 0 100%
   }
   
   .mode {
      background-color: var(--perano);
      border-radius: 50%;
      cursor: pointer;
      height: 44px;
      margin: -4px;
      overflow: hidden;
      width: 44px;
   }
   
   .sun, .moon {
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
</style>