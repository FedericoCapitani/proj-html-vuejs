<template>
  <div id="app">
    
    <header>
      <div class="header_container">
        <div class="ads_container">
          <div class="ads">
          <div class="ads_item">
            we have a 95% Successfull Pass Rate!
          </div>
          <div class="ads_item">
            Give us a call to book your tuition! 1-800-555-555
          </div>
        </div>
        </div>
        <div class="navbar">
          <div class="logo">
            <img src="@/assets/img/avada-drivers-logo-2x-300x58.png" alt="company logo">
          </div>
          <div class="links" v-for="link in nav_links" :key="link.id">
            <a href="#"> {{link.text}} </a>
          </div>
        </div>
      </div>
    </header>

    <main>

      <div class="jumbotron">
        <div class="jumbo_text">
          <h2>
            Drive with Avada
          </h2>
          <p> We offer the finest tuition money can buy</p>
        </div>
      </div>

    </main>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      nav_links: [
        {
          id: 1,
          text: "HOME"
        },
        {
          id: 2,
          text: "ABOUT"
        },
        {
          id: 3,
          text: "PRICES"
        },
        {
          id: 4,
          text: "COURSES"
        },
        {
          id: 5,
          text: "LOCATIONS"
        },
        {
          id: 6,
          text: "BLOG"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
