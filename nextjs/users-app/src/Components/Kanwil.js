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
    kanwils: [],
    newKanwilData: {
      name: '',
    },
    editKanwilData: {
      id: '',
      name: '',
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
    axios.post('http://192.168.1.14:8000/api/kanwils/', this.state.newKanwilData).then((response) => {
      let { kanwils } = this.state;
      console.log('testing', kanwils)
      kanwils.push(response.data);

      this.setState({
        kanwils, newKanwilModal: false, newKanwilData: {
          name: '',
        }
      });
      this._refreshKanwils();
    });
  }
  updateKanwil(e) {
    e.preventDefault();
    let { name } = this.state.editKanwilData;

    axios.put('http://192.168.1.14:8000/api/kanwils/' + this.state.editKanwilData.id, { name
    }).then((response) => {
      this._refreshKanwils();
      this.setState({
        editKanwilModal: false, editKanwilData: { id: '', name: ''  }
      })
    });
  }
  editKanwil(id, name) {
    this.setState({
      editKanwilData: { id, name }, editKanwilModal: !this.state.editKanwilModal
    });
  }
 
  deleteKanwil1 = async (id) => {
    const choice = global.confirm(`delete ${id}?`)
    if (choice) {
      await axios.delete('http://192.168.1.14:8000/api/kanwils/' + id);
      this._refreshKanwils();
    }
  }

  _refreshKanwils() {
    axios.get('http://192.168.1.14:8000/api/kanwils/').then((response) => {
      console.log('res', response.data)
      this.setState({
        kanwils: response.data.kanwils
      })
    });
  }



  render() {
    console.log(this.state.kanwils)
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
                <Label for="name">name</Label>
                <Input id="name" value={this.state.newKanwilData.name} onChange={(e) => {
                  let { newKanwilData } = this.state;

                  newKanwilData.name = e.target.value;

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
                <Label for="name">name</Label>
                <Input id="name" value={this.state.editKanwilData.name} onChange={(e) => {
                  let { editKanwilData } = this.state;

                  editKanwilData.name = e.target.value;

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
                <th>name</th>          
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.kanwils.map(kanwil =>
                  <tr key={kanwil.id}>
                    <td>{kanwil.id}</td>
                    <td>{kanwil.name}</td>              
                    <td>
                      <Button
                        color="success"
                        size="sm"
                        className="mr-2"
                        onClick={this.editKanwil.bind(this, kanwil.id, kanwil.name)}>
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
