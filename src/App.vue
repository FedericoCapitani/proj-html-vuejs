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

      <div class="sign-up">
        <div class="sign-up_info">
          <h3>Get Behind The Wheel</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae labore, possimus doloremque nam nemo similique eum maiores quos beatae suscipit?</p>
          <p class="small_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae officiis rerum natus eveniet iure obcaecati optio fugiat laborum. Neque obcaecati labore porro recusandae, dolor repudiandae sapiente doloremque ut est?</p>
        </div>
        <div class="sign-up_form">
          <h3>First Lesson Free!</h3>
          <p>When you make a block booking with us your first lesson is included free</p>
          <form action="" class="form">
            <input type="text" placeholder="Your Name*">
            <input type="text" placeholder="Email*">
            <input type="text" placeholder="Telephone">
            <input type="text" placeholder="Location">
          </form>
        </div>
      </div>

    </main>

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
