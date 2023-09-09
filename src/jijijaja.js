const promedioFinal = (lista) => {
    const prom = (n1,n2) => (n1+n2)
    lista = lista.flat()
    return lista.reduce(prom)/(lista.length)
}
console.log(promedioFinal([[4, 5], [2, 1], [0, 1], [7, 0]] ))
const limpiarNombre= (nombre) =>{
    return nombre.trim().split(" ").filter(n=>n.trim()!=="")
}
console.log(limpiarNombre("             Julian      Estrias            "))
const sortObjects = (lista, key) =>{
    const ordenarK = (n1,n2) => n2[key] - n1[key]
    return lista.sort(ordenarK)
}
console.log(sortObjects([
    {altura: 1.7, puntaje: 7},
    {altura: 1.3, puntaje: 10},
    {altura: 2.0, puntaje: 8}
   ], "altura"))

const limpiarLista = (string) => {
    let [nombre, Curso, ...Notas] = string.split(",")
    nombre = nombre.split(" ").filter(n=>n.trim())
    let name = nombre[0]
    let lastname = nombre[1]
    Notas.pop()
    let Final = Notas.map((str)=>+str).reduce((n1,n2)=>n1+n2)/(Notas.length)
    return {name,lastname,Curso,Notas,Final}
}
console.log(limpiarLista("Victor Garcez ,C,2.59,2.1,4.2,4.7;"))
const bestInClass = (csv) =>{
    csv = csv.trim().slice(0,-1)
    lf = csv.trim().split(";")
    lf = lf.slice(1,lf.length)
    lf = lf.map((estudiante) => limpiarLista(estudiante))
    lf = lf.sort((e1,e2) => e2.Final - e1.Final)
    lf = lf.slice(0,3)
    return lf.map((estudiante) => { name = estudiante.name; lastname = estudiante.lastname;
return {name, lastname}})
}
console.log(bestInClass("Nombres,Curso,Nota 1,Nota 2,Nota 3,Nota 4,Nota final;Alberto Rosas,B,4.21,4.5,3.3,4.7,0;Alejandra Jaramillo,B,4.21,4.2,4.7,4.5,0;Alfonso Martinez,A,4.59,4.5,4.2,4.2,0;Ana Chams       ,B,4.71,4.2,3.5,4.2,0;Andres Suarez ,B,5,4.5,4.7,3.5,0;   Blas Malla,C,3.32,4.2,0,5,0;Bruno Ramirez,A,4.59,3.5,4.1,4.2,0;              Cristian Pinilla,C,3.32,0,3.5,0,0;   Diana Orozco ,C,4.76,4.7,3.5,3.5,0;Eduardo Gonzalez,A,4.71,3.5,3.5,4.7,0;Gabriel Char,A,4.21,3.3,4.7,4.7,0;Gabriela Solar   ,C,4.71,4.7,3.3,3.3,0;Isaac Rodriguez,B,4.76,4.7,4.2,3.5,0;  Javier Hernandez   ,A,4.59,4.7,4.5,3.5,0;Jimena Rojas,C,4.28,4.2,4.5,4.2,0;   Jose Rodriguez,A,3.59,3.5,4.2,4.2,0;Juan Cortissoz,B,3.32,4.7,4.2,4.5,0;Kevin Abello   ,C,3.59,4.7,4.2,4.7,0;Laura Rivera,C,3.59,3.3,3.5,4.5,0;    Marcela Abello        ,A,4.28,3.5,4.5,4.5,0;Mario Leal,B,4.76,4.5,4.5,3.3,0;Martina Santos,C,3.59,5,3.3,4.1,0;  Mauricio Segebre,B,4.59,4.1,4.7,4.5,0;Orlando Garcia,B,4.59,4.2,4.5,4.7,0;Pablo Lopez,C,4.59,3.3,4.5,4.7,0;Paula Gomez,A,4.1,4.5,4.5,4.5,0;  Rafael Verano,A,0,4.5,5,3.5,0;    Renata Osorio  ,C,4.59,4.5,4.7,4.5,0;Victor Garcez         ,C,2.59,2.1,4.2,4.7,0;"))
//: [2.59, 2.1, 4.2, 4.7]