class Login {
    constructor() {
        this.state = {
            input_email : false,
            input_password : false,
            input_password2 : false,
        }
    }

    setInputEmail() {
        event.preventDefault()
        this.state.input_email = !this.state.input_email
        console.log(this.state.input_email)
    }

    handleLogin() {
        event.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let helperEmail = document.getElementById('helper_email_error')
        let helperPassword = document.getElementById('helper_password_error')
        
            if(!email) {
                helperEmail.style.display = 'flex'

                setTimeout( () => { 
                    helperEmail.style.display = 'none'
                }, 10000)
            }

            if(!password) {
                helperPassword.style.display = 'flex'

                setTimeout( () => { 
                    helperPassword.style.display = 'none'
                }, 10000)
            }
            
    }
}

const btnLogin = new Login


// class Kucing{
//     constructor(){
//         this.state = {
//             kaki : 4,
//             mata : 2,
//             warna : "putih",
//             sifat : "jinak",
//             suara : "Meow"
//         }
//     }

//     bermain() {
//         console.log("mengejar tikus")
//     }

//     tidur() {
//         console.log("mendengkur")
//     }
// }

// const anggora = new Kucing
// const Persia = new Kucing

// anggora.bermain()
// anggora.tidur()
// console.log(anggora.state.kaki)

// const Mobil = () => {
//     let kriteria = {
//         roda: 4,
//         mesin: true,
//         bahan_bakar : ["bensin", "listrik", "gas"]
//     }

//     const maju = () => {
//         console.log('mobil jalan kedepan...')
//     }
    
//     const mundur =  () => {
//         console.log('mobil jalan kebelakang...')
//     }
    
//     return maju()
// }

// console.log(Mobil)

