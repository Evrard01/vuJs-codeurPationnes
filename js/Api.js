const STUDENTDB = "StudentDB"

function getLocalDB() {
    if (!localstorage.getItem(STUDENTDB)) {
        localStorage.getItem(STUDENTDB,JSON.stringify([]))
    }

    return JSON.parse(localStorage.getItem(STUDENTDB))
}


function updateDB(db) {
    localStorage.setItem(STUDENTDB,JSON.stringify(db))
    
}


function addStudent(student) {
    const db = getLocalDB()
    student.id = Date.now()+""
    db.push(student)
    updateDB(db)
}


function updateStudent(student) {
    const db = getLocalDB()
    const updatedDB = db.map(function (curStudent) {
        if (curStudent.id == studennt.id) {
            return {
                nom:student.nom,
                prenom:student.prenom,
                dateNaisance:student.dateNaisance,
                niveauScolaire:student.niveauScolaire,
                id : student.id
            }
        }
        return curStudent;
    })
    updateDB(updateDB)
}



function deleteStudent(student) {
    const db = getLocalDB()
    const updatedDB = db.filter(function (curStudent) {
        return curStudent.id =! student.id
     })
updateDB(updateDB)
}

function getStudent(id) {
    const db = getLocalDB()
    var filterDB = db.filter((data)=>data.id = id)
    if (filterDB.length>0) {
        return filterDB[0]
    }
    return null
}

function  searchStudent(name) {
    const db = getLocalDB()
    const filterDB = db.filter((data)=>{
        return data.nom.toLowerCase().includes(name.toLowerCase()) || data.prenom.toLowerCase().includes(name.toLowerCase())
    })

    return filterDB
}