<script setup></script>

<template>
  <header>
    <b-navbar
      sticky
      toggleable="lg"
      type="dark"
      variant="dark"
      style="background-color: aqua"
      class="navbar"
    >
      <b-navbar-brand class="AT" href="\">Advanced Topics</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Projects">
          <b-dropdown-item href="\2023Projects\">2023</b-dropdown-item>
          <b-dropdown-item href="#">2024</b-dropdown-item>
          <b-dropdown-item href="#">2025</b-dropdown-item>
          <b-dropdown-item href="#">2026</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <template #button-content> </template>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>
