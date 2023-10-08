//Síncrones. Modifiquen l'state
export const setEntries =  ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

}

export const updateEntry =  ( state, entryUpdated ) => { //receive entry updated

    //crea un nou array on només hi ha els id de l'store i els compara amb els id de l'entryUpdated
    const index = state.entries.map( e => e.id ).indexOf( entryUpdated.id )
    state.entries[ index ] = entryUpdated


}

export const addEntry =  ( /*state*/ ) => {

}