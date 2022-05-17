<template> 
  <main>
    <JumboComponent/>
    <SignUp/>
    <CallComponent/>
    <CoursesComponent/>
    <InstructorsComponent/>
    <TestimonialOutput/>
    <LatestNews/>
    <NewsLetter/>
    </main>
</template>

<script>
import JumboComponent from "@/components/JumbotronComponent.vue"
import SignUp from "@/components/SignUpComponent.vue"
import CallComponent from "@/components/CallComponent.vue"
import CoursesComponent from "@/components/CoursesComponent.vue"
import InstructorsComponent from "@/components/InstructorsComponent.vue"
import TestimonialOutput from "@/components/TestimonialsOutputComponent.vue"
import LatestNews from "@/components/LatestNewsComponent.vue"
import NewsLetter from "@/components/NewsLetterComponent.vue"

export default {
  components: {
    JumboComponent,
    SignUp,
    CallComponent,
    CoursesComponent,
    InstructorsComponent,
    TestimonialOutput,
    LatestNews,
    NewsLetter
  },
    name: 'SiteMain',
    data() {
        return {

        }
    }
}
</script>