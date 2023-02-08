<script setup>


</script>


<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark" style = "background-color: aqua;" >
      <b-navbar-brand class = "AT" href="#">Advanced Topics</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Projects">
          <b-dropdown-item href="#">2022</b-dropdown-item>
          <b-dropdown-item href="#">2023</b-dropdown-item>
          <b-dropdown-item href="#">2024</b-dropdown-item>
          <b-dropdown-item href="#">2025</b-dropdown-item>
         </b-nav-item-dropdown>
          <b-nav-item href="#">Course overview</b-nav-item>
        </b-navbar-nav>


     
        <b-navbar-nav class="ml-auto">



            <template #button-content>
              <em>User</em>
            </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>

  <main>
    Advanced Topics For Computer Science
    <div class="wrapper"> Welcome to advanced topics in computer science, a </div>
  </main>



  <div>

  <a href = "https://www.google.com"> google </a>
</div>

</template>