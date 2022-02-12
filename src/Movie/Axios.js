import Axios from 'axios'

const app = Axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default app