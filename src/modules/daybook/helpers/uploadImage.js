import axios from 'axios'

const uploadImage = async ( file ) => {

    if ( !file ) return

    try {

        const formData = new FormData()
        formData.append('upload_preset', 'curs-vue-fh')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dqkxcuput/image/upload'
        const { data } = await axios.post(url, formData)

        return data.secure_url

    } catch (error) {
        console.log('Error al carregar la imatge, reviseu els logs')
        console.log(error)
        return null
    }
}

export default uploadImage