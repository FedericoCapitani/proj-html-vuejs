<template>
    
    <div class="testimonials">
        <div class="testim_container" v-for="item in testimonials" :key="item.id" v-show="item.id == (selected_img + 1)">
            <div class="selected">
                <h3>Testimonials</h3>
                <p>Here's what our happy drivers had to say about our services:</p>
                <img :src="item.img" alt="immagine testimonial">
                <p class="msg"> {{item.message}} </p>
                <p class="name"> {{item.name}} </p>
            </div>
        </div>
        <div class="selezione_testimonials">
            <div class="testimonial" v-for="(item, index) in testimonials" :key="item.id" @click="selezionato(index)">
                <div class="cerchio">
                    <div :class="index === selected_img ? 'active':''"></div>
                </div>
            </div>
        </div>
        <!-- <div class="testim_container">
            <h3>Testimonials</h3>
            <p>Here's what our happy drivers had to say about our services:</p>
            <img src="@/assets/img/testimonial-grant.png" alt="">
            <p class="msg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias molestias qui porro corrupti fuga itaque eius quidem neque vel tenetur!</p>
            <p class="name">Grant Jones</p>
        </div> -->
    </div>

</template>

<script>

export default {
    name: 'TestimonialOutput',
    data() {
        return {
            selected_img: 0,
            testimonials: [
                {
                    id: 1,
                    img: require("@/assets/img/testimonial-sophia.png"),
                    name: "Sophia Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 2,
                    img: require("@/assets/img/testimonial-grant.png"),
                    name: "Grant Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 3,
                    img: require("@/assets/img/testimonial-kate.png"),
                    name: "Kate Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 4,
                    img: require("@/assets/img/testimonial-harold.png"),
                    name: "Harold Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                },
                {
                    id: 5,
                    img: require("@/assets/img/testimonial-kelly.png"),
                    name: "Kelly Jones",
                    message: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended"
                }
            ]
        }
    },
    methods: {
        selezionato(i){
            this.selected_img = i
        }
    }
}
</script>