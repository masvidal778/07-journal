import uploadImage from "@/modules/daybook/helpers/uploadImage";
import axios from 'axios'
describe("testing uploadImage", () => {

    test('should loads a file and returns the url', async () => {

        const { data } = await axios.get('https://res.cloudinary.com/dqkxcuput/image/upload/v1697048344/wibhrg2otqmhoqdcg3kc.jpg',{
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url).toBe('string')

    })
})