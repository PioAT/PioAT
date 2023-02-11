
<script setup>
import Navbar from "~/src/components/Navbar.vue";

</script>


<template>
  <Navbar/>


  <h1>
    Advanced Topics For Computer Science
    <div class="description"> Welcome to advanced topics in computer science, an innovative course offered 
       at Pioneer High School. Each year, students enroll in this class for the opportunity to 
      explore deeper into their own interests in the computer science field.   </div>

    <div class = "description2">
      One of the best aspects of this course is the freedom to choose. From autonomous cars 
      to quantum computing to game design, advanced topics has it all!
    </div>

  </h1>
  
  <div>
  <a href = "https://www.google.com"> google </a>
  </div>

  <div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
  </div>

</template>




<style scoped>


 
</style>
