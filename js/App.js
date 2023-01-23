
const App = {
    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentsList: false,
            newEtudiant : {
                nom:"",
                prenom:"",
                dateNaissance:"",
                niveauScolaire:""
            }
        }
    },


    mounted(){
        this.changeState("form")
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
        },

        submitStudent(){
            if (this.newEtudiant.nom ==! "" || this.newEtudiant.prenom ==! "" || this.newEtudiant.dateNaissance ==! "" || this.newEtudiant.niveauScolaire ==! "" ) {
                addStudent(this.newEtudiant)
                console.log("Etudiant enregistrer avec success ! ")
            }
        }
    }
}

Vue.createApp(App).mount('#app')