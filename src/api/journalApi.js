
import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-7ad5b-default-rtdb.europe-west1.firebasedatabase.app'
})

// console.log( process.env.NODE_ENV ) // TEST during testing

export default journalApi


