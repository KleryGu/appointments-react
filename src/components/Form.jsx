/*
Reglas Hooks:
- No pueden ir por fuera de componentes. Tienen que ir inmediatamente después de que fue declarada la función.
- No se pueden registrar de forma condicional.
- No se pueden registrar después de un return.
*/ 

import {useState, useEffect} from 'react';


const Form = () => {

const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const handleSubmit = () => {
  e.preventDefault();
  console.log('Enviando formulario')
} /*Para múltiples líneas se debería generar otra función*/
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form 
      
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        
        <div className="mb-5">
          <label htmlFor= "mascota"className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value= {nombre}
            onChange={(e) => setNombre(e.target.value)} /*callback*/
          />
        </div>

          <div className="mb-5">
            <label htmlFor= "propietario"className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value= {propietario}
              onChange={(e) => setPropietario(e.target.value)}
            
            />
          </div>

          <div className="mb-5">
            <label htmlFor= "email"className="block text-gray-700 uppercase font-bold">Correo Electrónico</label>
            <input 
              id="email"
              type="email"
              placeholder="Correo Electrónico Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value= {email}
              onChange={(e) => setEmail(e.target.value)}
            
            />
          </div>

          <div className="mb-5">
            <label htmlFor= "alta"className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value= {fecha}
              onChange={(e) => setFecha(e.target.value)}
            
            />
          </div>

          <div className="mb-5">
            <label htmlFor= "sintomas"className="block text-gray-700 uppercase font-bold">Sintomas</label>
           <textarea 
            id= "sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value= {sintomas}
            onChange={(e) => setSintomas(e.target.value)}

           />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 text-center cursor-pointer transition-all"
            value="Agregar Paciente"

          />

      </form>
    </div>
  )
}

export default Form



