import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MarvelApp = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    identificacion: '',
    correo: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del usuario:', formData);
    alert('¡Usuario registrado con éxito!');
    // Aquí podrías enviar los datos a una API o servicio backend
    setFormData({ nombre: '', identificacion: '', correo: '' });
  };

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-4">Marvel Universe</h1>
        <p className="lead">Explorar el mundo de los superhéroes y villanos de Marvel</p>
      </header>

      {/* Formulario de Registro */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Registro de Usuarios</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="identificacion" className="form-label">Identificación</label>
                  <input
                    type="text"
                    className="form-control"
                    id="identificacion"
                    name="identificacion"
                    value={formData.identificacion}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas de Héroes */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Heroe 1"
            />
            <div className="card-body">
              <h5 className="card-title">Heroe 1</h5>
              <p className="card-text">Una breve descripción del héroe de Marvel.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Heroe 2"
            />
            <div className="card-body">
              <h5 className="card-title">Heroe 2</h5>
              <p className="card-text">Una breve descripción del héroe de Marvel.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Heroe 3"
            />
            <div className="card-body">
              <h5 className="card-title">Heroe 3</h5>
              <p className="card-text">Una breve descripción del héroe de Marvel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarvelApp;
