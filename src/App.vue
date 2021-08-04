<template>
  <div class="app">
    <div class="app__content">
      <div class="app__option"></div>
      <div class="app__game"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Option from "@comp/Option.vue";

export default Vue.extend({
  components: {
    Option,
  },
});
</script>

<style lang="scss">
.app {
  @include flex(center, center);
  height: 100vh;

  font-family: "Times New Roman", Times, serif;

  &__content {
    max-width: 600px;
  }
}
</style>
