//Accions asincrones que poden cridar a una mutació
import journalApi from "@/api/journalApi";

export const loadEntries = async ( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')

    const entries = []
    for( let id of Object.keys( data ) ){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)

}


export const updateEntries = async ( { commit }, entryUpdated ) => { //entry ha de ser un paràmetre

    //Extreure només el que necessito //-id
    const { date, picture, text } = entryUpdated

    const dataToSave = { date, picture, text }

    await journalApi.put( `/entries/${ entryUpdated.id }.json`, dataToSave)

    commit('updateEntry', ...entryUpdated)

}

export const createEntries = async (/*{ commit }*/) => {

}
