/**Estados de Carga 
 * Aun no se llama a la API:IDLE
 * Se llama a la API:Loading
 * Respuesta exitosa: SUCCESS
 * Error en la respuestas: ERROR
*/

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla {
    Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'
}

const variable1 = Talla.Grande
console.log(variable1)


/**Estados de Carga 
 * Aun no se llama a la API:IDLE
 * Se llama a la API:Loading
 * Respuesta exitosa: SUCCESS
 * Error en la respuestas: ERROR
*/

const enum LoadingState { Idle, Loading, Success, Error}

const estado = LoadingState.Success



