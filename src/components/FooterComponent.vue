<template>
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
            <li class="courses"> <font-awesome-icon :icon="['far', 'circle-right']" /> <span>Pass Plus</span></li>
            <li class="courses"> <font-awesome-icon :icon="['far', 'circle-right']" /> <span>Intensive Course</span></li>
            <li class="courses"> <font-awesome-icon :icon="['far', 'circle-right']" /> <span>Automatic</span></li>
            <li class="courses"> <font-awesome-icon :icon="['far', 'circle-right']" /> <span>Instructor Training</span></li>
          </ul>
        </div>
        <div class="footer_col d_flex">
          <img src="@/assets/img/footer-ad-grid.png" alt="ads grid" class="ads_footer">
          <button class="btn_footer">BOOK NOW</button>
        </div>
      </div>

      <div class="footer_social">
        <div class="social_container d_flex">
            <div class="social_text">
                <p>
                    Copyright 2012 - 2020 | Avada Theme by <span class="green">ThemeFusion</span> | All Rights Reserved | Powered by <span class="green">WordPress</span> 
                </p>
            </div>
            <div class="social_icons d_flex">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'youtube']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
        </div>
      </div> 

    </footer>
</template>

<script>
export default {
    name: 'SiteFooter',
    data() {
        return {

        }
    }
}
</script>
