<script lang="ts">
  import { counters, counterItem } from './stores';
  import CounterList from './CounterList.svelte';
  
  let titleListResult: string;

  function titleList(counters: Array<counterItem>) {
    titleListResult = "";
    for(let counter of counters) {
      titleListResult += titleListResult && counter.title ? `, ${counter.title}`: counter.title; 
    }
    return titleListResult;
  }
  
  $: sum = $counters.reduce((previousValue, currentValue) => previousValue + currentValue.count, 0);
</script>

<div class="App">
  <h1>Multiple counter</h1>
  <CounterList />
  <p>
    title list: {titleList($counters)}
  </p>
  <p>
    sum of count: {sum}
  </p>
</div>

<style>
  .App {
    text-align: center;
  }
  p {
    margin: 0;
  }
</style>