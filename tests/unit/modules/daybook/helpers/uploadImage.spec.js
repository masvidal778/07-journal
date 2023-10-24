import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from "@/modules/daybook/helpers/uploadImage";

cloudinary.config({
    cloud_name: 'xxx',
    api_key: 'xxx',
    api_secret: 'xxx'
})

describe("testing uploadImage", () => {

    test('should upload a file and return url', async() => {
        const { data } = await axios.get('https://res.cloudinary.com/xxx/image/upload/v1697048344/wibhrg2otqmhoqdcg3kc.jpg',{
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

        const image = await uploadImage( file )

        expect( typeof image.secure_url).toBe('string')

        await cloudinary.v2.api.delete_resources( [image.public_id] )

    })
})