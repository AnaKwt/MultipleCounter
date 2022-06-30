<script lang="ts">
  import { counters } from './stores';
  import CounterList from './CounterList.svelte';
  
  let titleListResult: string;
  function titleList($counters) {
    titleListResult = "";
    for(let counter of $counters){
      titleListResult += titleListResult && counter.title ? `, ${counter.title}`: counter.title; 
    }
    return titleListResult;
  }
</script>

<h1>Multiple counter</h1>

<CounterList />

<div>
  title list: {titleList($counters)}
</div>