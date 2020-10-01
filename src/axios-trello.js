import axios from  'axios';

const instanse  = axios.create({
    baseURL: 'https://todolisttrello.firebaseio.com/'
})

export default instanse;