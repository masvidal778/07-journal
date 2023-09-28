//Portar informació de l'state que es pot processar
//export const myGetter = ( state ) => {
//return state
//}

export const getEntriesByTerm = ( state ) => ( term = '' ) => {
    if( term.length === 0 ) return state.entries

    return state.entries.filter( entry =>

        entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) )

}

//id com argument
export const getEntryById = ( state ) => (id = '') => {

    const entry = state.entries.find( entry => entry.id === id )

    if(!entry) return

    return { ...entry }

}