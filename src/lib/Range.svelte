<script>
   export let title
   export let value
   export let min = 0
   export let max = 100
</script>

<div class="label">
  {title}
   <div class="bar">
      <input class="range" type="range" {min} {max} bind:value="{value}">
      <input class="number" type="number" {min} {max} bind:value="{value}">
   </div>
</div>

<style>
   .label {
      align-items: center;
      display: grid;
      gap: 40px;
      grid-template-columns: minmax(0, 1fr) minmax(0, 4fr);
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
   }
   
   .bar {
      border: 1.5px solid var(--perano);
      border-radius: 8px;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 60px;
      padding: 2px;
   }
   
   .number {
      border-radius: 4px;
      color: var(--perano);
      font-weight: 600;
      padding: 0 4px 0 8px;
      transition: all 0.25s ease;
      -webkit-user-select: auto;
      user-select: auto;
   }
   
   .number::selection {
      background-color: var(--mirage);
      color: var(--perano);
   }
   
   .number::-webkit-inner-spin-button {
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 14.5L6 17.5L3 14.5' stroke='%23ACB6F9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3 5.5L6 2.5L9 5.5' stroke='%23ACB6F9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 2px;
      display: block;
      height: 24px;
      width: 10px;
   }
   
   .number:focus::-webkit-inner-spin-button {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 14.5L6 17.5L3 14.5' stroke='%231A1A1F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3 5.5L6 2.5L9 5.5' stroke='%231A1A1F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
   }
   
   .number:focus {
      background-color: var(--perano);
      color: var(--mirage);
      outline: none;
   }
   
   .range {
      -webkit-appearance: none;
      appearance: none;
      background: none;
      height: 28px;
      outline: none;
      padding: 0 3px;
   }
      
   .range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-image: linear-gradient(135deg, var(--perano) 0%, var(--biloba) 100%);
      border-radius: 4px;
      box-shadow: 0 2px 4px black;
      cursor: grab;
      height: 22px;
      transition: all 0.25s ease;
      width: 16px;
   }
   
   .range::-webkit-slider-thumb:active {
      box-shadow: 0 2px 30px var(--bilobaAlpha);
      cursor: grabbing;
      transform: scale(0.95);
   }
</style>