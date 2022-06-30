<script lang="ts">
  import { counters, counterItem } from './stores';

  function removeCounter(deleteCounter: counterItem) {
    $counters = $counters.filter(counter => counter !== deleteCounter)
  }
  
  function addCounter() {
    $counters = $counters.concat({count: 0, title: "new"});
  }
</script>

{#each $counters as counter}
  <div class="counterBox">
    <input
			bind:value={counter.title}
		>
    <span>{ counter.count }</span>
    <div class="counterButton">
      <button on:click={() => counter.count += 1}>+</button>
      <button on:click={() => counter.count >= 1 ? counter.count -= 1: null}>-</button>
      <button on:click={() => counter.count = 0}>0</button>
      <button class="deleteButton" on:click={() => removeCounter(counter)}>x</button>
    </div>
  </div>
{/each}
<button on:click={addCounter}>add new counter</button>

<style>
  .counterBox {
    padding: 8px;
    margin: 0 auto 16px;
    height: auto;
    display: flex;
    max-width: 320px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    background: rgba(0, 0, 0, 0.02);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  input {
    margin: 0;
    max-width: 140px;
    border-radius: 5px;
    border: none;
  }

  button {
    margin: 0;
    padding: 3px 9px;
    border-radius: 5px;
  }
  
  button:hover {
    background: #ddd;
  }

  .deleteButton {
    background: none;
    border: none;
  }
</style>