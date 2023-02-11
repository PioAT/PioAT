<script setup>
import Navbar from "~/src/components/Navbar.vue";
</script>

<template>
  <Navbar />

  <h1>
    Advanced Topics For Computer Science
    <!--<img src = "/images/Ryan Wang 2022.jpg"> -->
  </h1>
  <main>
    <div class="grid-container">
      <div>
        <img src="\images\Ryan Wang 2022.jpg" />
      </div>
      <div>
        <img src="\images\Justin Hu 2022.jpg" />
      </div>
      <div>
        <img src="\images\Brendan 2022.jpg" />
      </div>
      <div>Description 1!</div>
      <div>Description 2!</div>
      <div>Description 3!</div>
    </div>
  </main>
</template>

<style scoped>
img {
  display: block;
  height: 300px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  object-position: 50%, 50%;
}
</style>
