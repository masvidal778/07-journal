const months = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny','Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre']
const days   = ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte']


const getDayMonthYear = ( dateString) => {

    const date = new Date( dateString )

    return {
        day: date.getDate(),
        month: months[date.getMonth()],
        yearDay: `${ date.getFullYear() }, ${ days [ date.getDay() ] }`
    }


}

export default getDayMonthYear