<script setup>
</script>


<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class = "AT" href="#">Advanced Topics</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Projects</b-nav-item>
          <b-nav-item href="#">Course overview</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

     
        <b-navbar-nav class="ml-auto">
          <!-- Search button and input

          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        -->
   
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>

  <main>
    Advanced Topics For Computer Science
    <div class="wrapper"> woah!</div>
  </main>






  <div>
    <!-- Website INSIDE the website
  <b-embed
    type="iframe"
    aspect="16by9"
    src= https://www.google.com/
    allowfullscreen
  ></b-embed>
    -->
  <a href = "https://www.google.com"> google </a>
</div>

</template>

<style scoped>
header {
  line-height: 2;
}

main{
  text-align: center;
  margin-top:20px;
  font-size: 36px;
  font-family: 'Trebuchet MS', sans-serif;
}

.wrapper{
      text-align: left;
      margin-left: 50px;
      font-size: 20px;
  }
.AT{
  margin-left: 20px;
}

.navbar.navbar-dark.bg-dark{
    background-color: #2f4ac4!important;
 }

 


</style>
