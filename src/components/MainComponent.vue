<template>
    
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
          <form action="" class="form d_flex" id="form1">
            <input type="text" placeholder="Your Name*">
            <input type="text" placeholder="Email*">
            <input type="text" placeholder="Telephone">
            <input type="text" placeholder="Location">
          </form>
          <button class="sign_up_btn" form="form1">REQUEST A CALLBACK</button>
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

      <div class="course_plans">

      </div>

    </main>

</template>

<script>
export default {
    name: 'SiteMain',
    data() {
        return {

        }
    }
}
</script>