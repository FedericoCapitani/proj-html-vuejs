<template>
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
            <input type="text" placeholder="Your Name*" v-model="name">
            <input type="text" placeholder="Email*" v-model="email">
            <input type="text" placeholder="Telephone" v-model="phone_number">
            <input type="text" placeholder="Location" v-model="location">
          </form>
          <button class="sign_up_btn" v-on:click="saveData">REQUEST A CALLBACK</button>
        </div>
      </div>
</template>

<script>
export default {
    name: 'SignUp',
    data(){
        return{
            name: '',
            email: '',
            phone_number: '',
            location: '',
            new_id: 0,
            dati: [
                {
                    id: 0,
                    name: 'test',
                    email: 'test',
                    phone_number: 'test',
                    location: 'test'
                }
            ]
        }
    },
    methods: {
        saveData(){
            this.new_id++
            this.dati.push({id: this.new_id, name: this.name, email: this.email, phone_number: this.phone_number, location: this.location})
            console.log(this.dati)
        }
    }
}
</script>