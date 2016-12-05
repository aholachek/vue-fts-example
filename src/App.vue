<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header';

export default {
  name: 'app',
  components: {
    AppHeader,
  }
};
</script>
