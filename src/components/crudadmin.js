import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


const data = [
    { id: 1, Hora: "24/07/2022 12:40", Folio: "NP310722172022403618", Solicitante :"RICARDO B N", Oficina :"COYOACAN", Tramite: "Pasaporte Ordinario Primera vez", Status: "Programada"},
    { id: 2, Hora: "29/08/2022 16:10", Folio: "NP310722172249803615", Solicitante :"RICARDO B N", Oficina :"COYOACAN", Tramite: "Pasaporte Ordinario Primera vez", Status: "Programada"},
    { id: 3, Hora: "31/10/2022 17:30", Folio: "NP310745123449803615", Solicitante :"RICARDO B N", Oficina :"COYOACAN", Tramite: "Pasaporte Ordinario Primera vez", Status: "Programada" }
  
  ];

  

  class CrudAdmin extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        Hora: "",
        Folio: "",
        Solicitante: "",
        Oficina: "",
        Tramite: "",
        Status: ""      
      },
    };
  
    mostrarModalActualizar = (dato) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };
  
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };
  
    mostrarModalInsertar = () => {
      this.setState({
        modalInsertar: true,
      });
    };
  
    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };
  
    editar = (dato) => {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo[contador].Hora = dato.Hora;
          arreglo[contador].Folio = dato.Folio;
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    };
  
    eliminar = (dato) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.id=this.state.data.length+1;
      var lista= this.state.data;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data: lista });
    }
  
    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    render() {
      
      return (
        <>
          <Container>
  
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hora</th>
                  <th>Folio</th>
                  <th>Solicitante(s)</th>
                  <th>Oficina</th>
                  <th>Trámite</th>
                  <th>Status</th>
                  <th>Acción</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.Hora}</td>
                    <td>{dato.Folio}</td>
                    <td>{dato.Solicitante}</td>
                    <td>{dato.Oficina}</td>
                    <td>{dato.Tramite}</td>
                    <td>{dato.Status}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => this.mostrarModalActualizar(dato)}
                      >
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Editar Registro</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                 Id:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Hora: 
                </label>
                <input
                  className="form-control"
                  name="Hora"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Hora}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Folio: 
                </label>
                <input
                  className="form-control"
                  name="Folio"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Folio}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
  
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
             <div><h3>Insertar Hora</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                  Id: 
                </label>
                
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length+1}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Hora: 
                </label>
                <input
                  className="form-control"
                  name="Hora"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Folio: 
                </label>
                <input
                  className="form-control"
                  name="Folio"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.insertar()}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }
  export default CrudAdmin;