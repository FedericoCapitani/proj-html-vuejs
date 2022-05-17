<template>
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
</template>

<script>
export default {
    name: 'InstructorsComponent'
}
</script>