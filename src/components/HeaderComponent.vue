<template>
    <header>
      <div class="header_container">
        <div class="ads_container">
          <div class="ads d_flex">
          <div class="ads_item">
            we have a 95% Successfull Pass Rate!
          </div>
          <div class="ads_item">
            <font-awesome-icon :icon="['fas', 'phone']" /><span> Give us a call to book your tuition! 1-800-555-555</span>
          </div>
        </div>
        </div>
        <div class="navbar d_flex">
          <div class="logo">
            <img src="@/assets/img/avada-drivers-logo-2x-300x58.png" alt="company logo">
          </div>
          <div class="links d_flex">
            <div v-for="link in nav_links" :key="link.id">
                <a href="#"> {{link.text}} </a>
            </div>
          </div>
          <button class="btn_nav">BOOK NOW</button>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'SiteHeader',
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