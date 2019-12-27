import React, { Component } from 'react';
import axios from 'axios';
import MenuList from './MenuList'
import {
  Input, FormGroup,
  Label, Modal, ModalHeader,
  ModalBody, ModalFooter,
  Table, Button,
}
  from 'reactstrap';

class Kanwils extends Component {
  state = {
    kanwil: [],
    newKanwilData: {
      role: '',
      name: '',
      email: ''
    },
    editKanwilData: {
      id: '',
      role: '',
      name: '',
      email: ''
    },
    newKanwilModal: false,
    editKanwilModal: false
  }

  componentWillMount() {
    this._refreshKanwils();
  }

  toggleNewKanwilModal() {
    this.setState({
      newKanwilModal: !this.state.newKanwilModal
    });
  }

  toggleEditKanwilModal() {
    this.setState({
      editKanwilModal: !this.state.editKanwilModal
    });
  }

  addKanwil(e) {
    e.preventDefault();
    axios.post('http://192.168.1.24:8000/api/kanwils/', this.state.newKanwilData).then((response) => {
      let { kanwil } = this.state;
      console.log('testing', kanwil)
      kanwil.push(response.data);

      this.setState({
        kanwil, newKanwilModal: false, newKanwilData: {
          role: '',
          name: '',
          email: ''
        }
      });
      this._refreshKanwils();
    });
  }
  updateKanwil(e) {
    e.preventDefault();
    let { role, name, email } = this.state.editKanwilData;

    axios.put('http://192.168.1.24:8000/api/kanwils/' + this.state.editKanwilData.id, {
      role, name, email
    }).then((response) => {
      this._refreshKanwils();

      this.setState({
        editKanwilModal: false, editKanwilData: { id: '', role: '', name: '', email: '' }
      })
    });
  }
  editKanwil(id, role, name, email) {
    this.setState({
      editKanwilData: { id, role, name, email }, editKanwilModal: !this.state.editKanwilModal
    });
  }
  deleteKanwil(id) {
    axios.delete('http://192.168.1.24:8000/api/kanwils/' + id).then((response) => {
      this._refreshKanwils();
    });
  }

  deleteKanwil1 = async (id) => {
    await axios.delete('http://192.168.1.24:8000/api/kanwils/' + id);
    this._refreshKanwils();
  }

  _refreshKanwils() {
    axios.get('http://192.168.1.24:8000/api/kanwils/').then((response) => {
      console.log('res', response.data)
      this.setState({
        kanwil: response.data.kanwil
      })
    });
  }



  render() {
    console.log(this.state.kanwil)
    return (
      <div  className="App container">
          <MenuList />
          <h1>Kanwil</h1>
          <Button
            className="my-3"
            color="primary"
            onClick={this.toggleNewKanwilModal.bind(this)}>
            Add Kanwil
        </Button>

          <Modal isOpen={this.state.newKanwilModal} toggle={this.toggleNewKanwilModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewKanwilModal.bind(this)}>Add a new Kanwil</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="role">role</Label>
                <Input id="role" value={this.state.newKanwilData.role} onChange={(e) => {
                  let { newKanwilData } = this.state;

                  newKanwilData.role = e.target.value;

                  this.setState({ newKanwilData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="name">name</Label>
                <Input id="name" value={this.state.newKanwilData.name} onChange={(e) => {
                  let { newKanwilData } = this.state;

                  newKanwilData.name = e.target.value;

                  this.setState({ newKanwilData });
                }} />
              </FormGroup>

              <FormGroup>
                <Label for="email">email</Label>
                <Input id="email" value={this.state.newKanwilData.email} onChange={(e) => {
                  let { newKanwilData } = this.state;

                  newKanwilData.email = e.target.value;

                  this.setState({ newKanwilData }); 
                }} />
              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addKanwil.bind(this)}>Add Kanwil</Button>{' '}
              <Button color="secondary" onClick={this.toggleNewKanwilModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.editKanwilModal} toggle={this.toggleEditKanwilModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditKanwilModal.bind(this)}>Edit a new Kanwil</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="role">role</Label>
                <Input id="role" value={this.state.editKanwilData.role} onChange={(e) => {
                  let { editKanwilData } = this.state;

                  editKanwilData.role = e.target.value;

                  this.setState({ editKanwilData });
                }} />
              </FormGroup>
              <FormGroup>
                <Label for="name">name</Label>
                <Input id="name" value={this.state.editKanwilData.name} onChange={(e) => {
                  let { editKanwilData } = this.state;

                  editKanwilData.name = e.target.value;

                  this.setState({ editKanwilData });
                }} />
              </FormGroup>

              <FormGroup>
                <Label for="email">email</Label>
                <Input id="email" value={this.state.editKanwilData.email} onChange={(e) => {
                  let { editKanwilData } = this.state;

                  editKanwilData.email = e.target.value;

                  this.setState({ editKanwilData });
                }} />
              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateKanwil.bind(this)}>Update Kanwil</Button>{' '}
              <Button color="secondary" onClick={this.toggleEditKanwilModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>


          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>role</th>
                <th>name</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.kanwils.map(kanwil =>
                  <tr key={kanwil.id}>
                    <td>{kanwil.id}</td>
                    <td>{kanwil.role}</td>
                    <td>{kanwil.name}</td>
                    <td>{kanwil.email}</td>
                    <td>
                      <Button
                        color="success"
                        size="sm"
                        className="mr-2"
                        onClick={this.editKanwil.bind(this, kanwil.id, kanwil.role, kanwil.name, kanwil.email)}>
                        Edit
                    </Button>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={this.deleteKanwil1.bind(this, kanwil.id)}>
                        Delete
                    </Button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
    );
  }
}

export default Kanwils;
