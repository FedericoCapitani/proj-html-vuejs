<template>
    
    <div class="testimonials">
        <div class="testim_container" v-for="item in testimonials" :key="item.id">
            <h3>Testimonials</h3>
            <p>Here's what our happy drivers had to say about our services:</p>
            <img :src="item.img" alt="">
            <p> {{item.message}} </p>
            <p> {{item.name}} </p>
        </div>

    </div>

</template>

<script>
export default {
    name: 'TestimonialComponent',
    data() {
        return {
            selected_img: 0,
            testimonials: [
                {
                    id: 1,
                    img: "@/assets/img/testimonial-sophia.png",
                    name: "Sophia Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 2,
                    img: "@/assets/img/testimonial-grant.png",
                    name: "Grant Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 3,
                    img: "@/assets/img/testimonial-kate.png",
                    name: "Kate Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 4,
                    img: "@/assets/img/testimonial-harold.png",
                    name: "Harold Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 5,
                    img: "@/assets/img/testimonial-kelly.png",
                    name: "Kelly Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                }
            ]
        }
    },
    methods: {

    }
}
</script>