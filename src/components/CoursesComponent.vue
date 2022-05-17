<template>
    <div class="course_plans">
        <div class="bg_plans1">
          <div class="plans_container">
              <div class="col-4">
                  <div class="plan_card">
                      <div class="new">NEW</div>
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
        </div>

            <div class="plans_container d_flex">
              <div class="card_percentage d_flex">
                  <div class="full_circle green">
                    <div id="circle_grey_95"></div>
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
                    <div id="circle_green_0"></div>
                      <p>0%</p>
                  </div>
                  <p class="p_text">ACCIDENT RATE</p>
              </div>
          </div>
          
      </div>
</template>

<script>
export default {
    name: 'CoursesComponent'
}
</script>