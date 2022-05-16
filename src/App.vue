<template>
  <div id="app">
    
    <SiteHeader/>

    <main>

      <div class="jumbotron">
        <div class="jumbo_text">
          <h2>
            Drive with Avada
          </h2>
          <p> We offer the finest tuition money can buy</p>
        </div>
      </div>

      <div class="sign-up d_flex">
        <div class="sign-up_info">
          <h3>Get Behind The Wheel</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae labore, possimus doloremque nam nemo similique eum maiores quos beatae suscipit?</p>
          <p class="small_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae officiis rerum natus eveniet iure obcaecati optio fugiat laborum. Neque obcaecati labore porro recusandae, dolor repudiandae sapiente doloremque ut est?</p>
        </div>
        <div class="sign-up_form d_flex">
          <h3>First Lesson Free!</h3>
          <p>When you make a block booking with us your first lesson is included free</p>
          <form action="" class="form d_flex">
            <input type="text" placeholder="Your Name*">
            <input type="text" placeholder="Email*">
            <input type="text" placeholder="Telephone">
            <input type="text" placeholder="Location">
          </form>
        </div>
      </div>

      <div class="call">
        <div class="call_container d_flex">
          <div class="call_text">
            <h3>Start Learning to Drive Today</h3>
            <p>Give us a call to schedule your first driving lesson</p>
          </div>
          <div class="call_number">
            <p>
              <font-awesome-icon :icon="['fas', 'phone']" /><span> 1-800-555-555</span>
            </p>
          </div>
        </div>
      </div>

    </main>

    <footer>
      <div class="footer_links d_flex">
        <div class="footer_col">
          <img src="@/assets/img/avada-drivers-logo-1x.png" alt="logo avada small">
          <p class="info">Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time</p>
        </div>
        <div class="footer_col">
          <h4>CONTACT DETAILS</h4>
          <ul>
            <li> <font-awesome-icon :icon="['fas', 'house']" /><span style="margin-left: 2px"> 12345 Nort Main Street, </span> <p>New York, NY 555555</p> </li>
            <li> <font-awesome-icon :icon="['fas', 'phone']" /><span style="margin-left: 6px"> 1.800.555.6789</span> </li>
            <li> <font-awesome-icon :icon="['fas', 'envelope']" /><span style="margin-left: 10px"> info@your-domain.com</span> </li>
            <li> <font-awesome-icon :icon="['fas', 'link']" /><span style="margin-left: 4px"> Theme-Fusion.com</span> </li>
          </ul>
        </div>
        <div class="footer_col">
          <h4>COURSES</h4>
          <ul>
            <li class="courses"> <span>Pass Plus</span></li>
            <li class="courses"> <span>Intensive Course</span></li>
            <li class="courses"> <span>Automatic</span></li>
            <li class="courses"> <span>Instructor Training</span></li>
          </ul>
        </div>
        <div class="footer_col d_flex">
          <img src="@/assets/img/footer-ad-grid.png" alt="ads grid" class="ads_footer">
          <button class="btn_footer">BOOK NOW</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SiteHeader from "@/components/HeaderComponent.vue"

export default {
  name: 'App',
  components: {
    SiteHeader
  },
  
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
