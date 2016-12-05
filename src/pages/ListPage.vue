<template lang="html">
  <div>
    <h1>List of stuff</h1>
    <ol>
      <li v-for="item in items">
          {{ item }}
        </li>
    </ol>
  </div>
</template>

<script>
import  ListItem from './../components/ListComponent'

export default {
  components : {
    'list-item' : ListItem
  },
  data : function(){
    return {
      items : [ 'item 1', 'another item', 'final item']
    }
  }
}
</script>

<style lang="css">
</style>
