"use client";
import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";

const Form = () => {
  /* Vamos a manejar las variables de nuestro formulario */
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [curp, setCurp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState([]);
  const [addressPerson, setAddressPerson] = useState("");

  /* Creamos funcion para mandar datos del formulario */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabaseClient.from("usuarios").insert([
      {
        name: name,
        last_name: last_name,
        curp: curp,
        phone_number: phone_number,
        email: email,
        birthdate: birthdate,
        sex: sex,
        address: addressPerson,
      },
    ]);

    console.log(data);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const { data, error } = await supabaseClient.from("colonias").select("*");
      setAddress(data);
    };

    fetchAddress();
  }, []);

  /*
  TAREA
  - Mandar los formuarios a nuestra base de datos
  - Investigar los tipos de campos del formulario correctos
  - En el campo y el campo dirección, mandar a traer información con useEffect
  */

  return (
    <>
      <form className="form-horizontal">
        <fieldset>
          {/* Form Name */}
          <legend>Registro de personas</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="name">
              Nombre
            </label>
            <div className="col-md-4">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre aquí"
                className="form-control input-md"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="last_name">
              Apellidos
            </label>
            <div className="col-md-4">
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Apellidos aquí"
                className="form-control input-md"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="curpo">
              CURP
            </label>
            <div className="col-md-4">
              <input
                id="curp"
                name="curp"
                type="text"
                placeholder="CURP (18)"
                className="form-control input-md"
                onChange={(e) => setCurp(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="phone_number">
              Teléfono
            </label>
            <div className="col-md-4">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder="Teléfono"
                className="form-control input-md"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="email">
              Correo
            </label>
            <div className="col-md-4">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                className="form-control input-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="birthdate">
              Fecha de Nacimiento
            </label>
            <div className="col-md-4">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="dd/mm/yyyy"
                className="form-control input-md"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="sex">
              Sexo
            </label>
            <div className="col-md-4">
              <select
                id="sex"
                name="sex"
                className="form-control"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="address">
              Dirección
            </label>
            <div className="col-md-4">
              <select
                id="address"
                name="address"
                className="form-control"
                onChange={(e) => setAddressPerson(e.target.value)}
              >
                {address.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  );
};

export default Form;
