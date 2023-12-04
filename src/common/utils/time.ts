export function tempoParaSegundos(tempo: string){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")

    const horasEmSegundos = Number (horas) * 3600; //converter horas em segundos
    const minutosEmSegundos = Number (minutos) * 60; //converter minutos em segundos
    //segundos ja esta em segundos, não precisa de conversão

    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}