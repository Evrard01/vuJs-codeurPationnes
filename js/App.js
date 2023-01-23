const App = {
    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentsList: false,
        }
    },


    mounted(){
        this.changeState("home")
    },


    methods: {
        goToHome() {
            this.changeState("home")
        },
        
        goToShowCreateForm() {
            this.changeState("form")
        },

        goToShowStudentsList() {
            this.changeState("list")

        },

        changeState(destination) {
            this.showHome = false
            this.showCreateForm = false
            this.showStudentsList = false

            switch (destination) {
                case "home":
                    this.showHome = true
                    break;
                case "form":
                    this.showCreateForm = true
                    break;
                case "list":
                    this.showStudentsList = true
                    break;

                default:
                    this.showHome = true
                    break;
            }
        }
    }
}

Vue.createApp(App).mount('#app')