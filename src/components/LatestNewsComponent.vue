<template>
    <div class="latest_news">
        <div class="news_container">
          <h2>Latest News</h2>
          <div class="container">
            <div class="col_half">
              <img src="@/assets/img/blog-choosecar-700x441.jpg" alt="news_img_1">
              <h3>What Car to Start With?</h3>
              <p class="small">February 7th 2019 | <span class="green">0 Comments</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div class="col_half">
              <img src="@/assets/img/blogpost-10and2-700x441.jpg" alt="news_img_2">
              <h3>Avada Driving School Expanding</h3>
              <p class="small">February 7th 2019 | <span class="green">0 Comments</span></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <button class="news_btn">MORE FROM THE BLOG</button>
        </div>
        <div class="angle_bg"></div>
      </div>
</template>

<script>
export default {
    name: "LatestNews",
    data() {
      return{}
    }
}
</script>