const constraints = {
    username: {
        format: {
            pattern: "[a-z0-9]+",
            message: "can only contain a-z and 0-9"
          }
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        length: {
            minimum: 8,
            maximum: 16
        }
    },
    fullname: {
        presence: true,
        format: {
            pattern: "[A-Z a-z]+",
            message: "can't contain number"
          }
    },
    state: {
    },
    title: {
    },
    chosenlanguage: {
    }
}
const app =Vue.createApp({
    data() {
        return {
            username: null,
            email: null,
            password: null,
            fullname: "Attapon Jeamjumroensuk",
            title: "Mr.",
            chosenlanguage: null,
            state: "Bangkok",
            followers: "69",
            projects: "14",
            ranks: "199",
            image: "images/profile.jpg",
            cover: "images/cover.jpg",
            languages: [{language_id: 1, language_name:'English'},
                        {language_id: 2, language_name: 'Thailand'},
                        {language_id: 3, language_name: 'Japanese'}],
            errors: [],
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({username: this.username,
                                    email: this.email,
                                    password:this.password,
                                    fullname: this.fullname,
                                    title: this.title,
                                    chosenlanguage: this.chosenlanguage,
                                    state: this.state,},constraints)
            if(this.errors){
                console.log(this.errors)
            }
            else{
                alert("Update Profile successfully.")
            }
            
        }
    }
})

app.mount('#app')
