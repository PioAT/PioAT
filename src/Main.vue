<script setup></script>

<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="info">
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
      

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>

  <main>
    Advanced Topics For Computer Science
    <div class="wrapper"> A website for CS!!!</div>
  </main>
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
      font-size: 30px;
  }
.AT{
  margin-left: 20px;
}
/*
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
} */
</style>
