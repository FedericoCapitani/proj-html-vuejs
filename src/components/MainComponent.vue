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
          <div class="plans_container">
              <div class="col-4">
                  <div class="plan_card">
                      <h3>Courses</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio ducimus, vitae, ullam, quia esse soluta cupiditate odit illum veritatis hic dicta nostrum voluptates mollitia.
                      </p>
                      <button class="courses_info">COURSE INFORMATION</button>
                  </div>
              </div>
              <div class="col-8 d_flex">
                  <div class="courses_card">
                      <img src="@/assets/img/courses-passplus.jpg" alt="">
                      <h4>Pass Plus</h4>
                      <button class="courses_btn">LEARN MORE</button>
                  </div>
                  <div class="courses_card">
                      <img src="@/assets/img/course-intensive.jpg" alt="">
                      <h4>Intensive Course</h4>
                      <button class="courses_btn">LEARN MORE</button>
                  </div>
                  <div class="courses_card">
                      <img src="@/assets/img/courses-instructor.jpg" alt="">
                      <h4> Instructors</h4>
                      <button class="courses_btn">LEARN MORE</button>
                  </div>
              </div>
          </div>
          <div class="plans_container d_flex">
              <div class="card_percentage d_flex">
                  <div class="full_circle grey">
                      <p>95%</p>
                  </div>
                  <p class="p_text">PASS RATE</p>
              </div>
              <div class="card_percentage d_flex">
                  <div class="full_circle green">
                      <p>100%</p>
                  </div>
                  <p class="p_text">REFERRAL RATE</p>
              </div>
              <div class="card_percentage d_flex">
                  <div class="full_circle grey">
                      <p>0%</p>
                  </div>
                  <p class="p_text">ACCIDENT RATE</p>
              </div>
          </div>
      </div>

      <div class="instructors">
          <h2>Your Instructors</h2>
          <div class="instructors_container d_flex">
              <div class="inst_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae impedit accusantium officia hic at obcaecati tenetur repellat maxime ex?
              </div>
              <button class="inst_btn">MORE ABOUT US</button>
          </div>
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