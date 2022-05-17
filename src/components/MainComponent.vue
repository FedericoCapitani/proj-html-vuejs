<template>
    
    <main>
      <JumboComponent/>
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
        <div class="bg_plans1">
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

      <div class="instructors">
          <h2>Your Instructors</h2>
          <div class="instructors_container d_flex">
              <div class="inst_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae impedit accusantium officia hic at obcaecati tenetur repellat maxime ex?
              </div>
              <button class="inst_btn">MORE ABOUT US</button>
          </div>

          <div class="instructors_cards d_flex">
            <div class="card">
              <div class="inst_pic">
                <img src="@/assets/img/instructor-mikehart.jpg" alt="">
                <p class="hover_text">
                  instructor-mikehart
                </p>
              </div>
              <div class="icons">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </div>
              <h3>Mike Hart</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div class="card">
              <div class="inst_pic">
                <img src="@/assets/img/instructor-johnsmith.jpg" alt="">
                <p class="hover_text">
                  instructor-johnsmith
                </p>
              </div>
              <div class="icons">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </div>
              <h3>John Smith</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div class="card">
              <div class="inst_pic">
                <img src="@/assets/img/instructor-angelahart.jpg" alt="">
                <p class="hover_text">
                  instructor-angelahart
                </p>
              </div>
              <div class="icons">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </div>
              <h3>Angela Hart</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
      </div>

      <TestimonialOutput/>
      <LatestNews/>

    <div class="newsletter d_flex">
      <h2>Sign up to our newsletter</h2>
      <input type="text">
      <button class="news_btn">SUBSCRIBE</button>
      <p>(we do not share your data with anybody, and only use it for its inteded purpose)</p>
    </div>
    </main>

</template>

<script>
import JumboComponent from "@/components/JumbotronComponent.vue"
import TestimonialOutput from "@/components/TestimonialsOutputComponent.vue"
import LatestNews from "@/components/LatestNewsComponent.vue"

export default {
  components: {
    JumboComponent,
    TestimonialOutput,
    LatestNews
  },
    name: 'SiteMain',
    data() {
        return {

        }
    }
}
</script>