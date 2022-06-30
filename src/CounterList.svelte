<script lang="ts">
  import { counters } from './stores';

  function removeCounter(deleteCounter: {count:number, title:string}) {
    $counters = $counters.filter(counter => counter !== deleteCounter)
  }
  
  function addCounter(){
    $counters = $counters.concat({count: 0, title: "new"});
  }
</script>

{#each $counters as counter}
  <div>
    <button on:click={() => removeCounter(counter)}>x</button>
    <button on:click={() => counter.count -= 1}>-</button>
    <span>{ counter.count }</span>
    <button on:click={() => counter.count += 1}>+</button>
    <button on:click={() => counter.count = 0}>Reset</button>
    <input
			bind:value={counter.title}
		>
  </div>
{/each}
<button on:click={addCounter}>add new counter</button>