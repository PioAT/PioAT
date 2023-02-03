<script setup>
import HelloWorld from './Deprecated/HelloWorld.vue'
import TheWelcome from './Deprecated/TheWelcome.vue'
</script>

<template>
  <header>
    this is a large set of text!
    <div class="wrapper">
    </div>
  </header>
  
  <main>
    this is in the main!
  </main>
</template>

<style scoped>
header {
  line-height: 4;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    font-size: 40px;
    place-items: start start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
