<template>
  
<div>
  Simple click listener:
  <button type="button" class="btn btn-primary" @click="addClick">Click me</button>
  <div>
    total clicks : {{clickCount}}
  </div>
</div>

</template>

<script>
export default {
  data: function() {
    return {
      clickCount: 0
    }
  },
  methods: {
    addClick: function() {
      this.$data.clickCount += 1;
    }
  }
}
</script>
