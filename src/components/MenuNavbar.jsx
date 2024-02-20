"use client";

import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MenuNavbar() {
  //Aquí haremos el manejo de estado para poner un encabezado
  const [encabezado, setEncabezado] = useState("");

  /* Ejemplo de consumo de datos de supabase */
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabaseClient.from("colonias").select();
      setEncabezado(data[7].municipio);
      data;
    };
    fetch();
  });
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{encabezado}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/registers">Registros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
