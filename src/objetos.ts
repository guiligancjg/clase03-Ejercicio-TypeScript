type Direccion = {
    numero: number,
    calle: string,
    pais: string
}


type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}


const objeto: Persona =  {
    id: 1, 
    nombre: '', 
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'ChanchitiLandia'
    }
}

//objeto.nombre = 'Hola mundo'

const arr: Persona[] = []

