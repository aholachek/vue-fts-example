<template lang="html">

  <div>
    <h1>List Render Demo</h1>
    <p>
      Currently selected item is: {{selected}}
    </p>
    <ol>
      <li v-for="item in items">
        &nbsp;
        <label v-bind:for="item">
          <input type="radio" v-model="selected" v-bind:value="item" v-bind:id="item">
           {{ item }}
         </label>
      </li>
    </ol>
  </div>

</template>

<script>
import ListItem from './../components/ListComponent'

export default {
  components: {
    'list-item': ListItem
  },
  data: function() {
    return {
      items: ['item 1', 'item 2', 'item 3'],
      selected: 'item 1'
    }
  }
}
</script>
