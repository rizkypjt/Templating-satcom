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

class Ukers extends Component {
    state = {
        ukers: [],
        newUkerData: {
            name: '',
            user_id: '',
            kanwil_id: ''
        },
        editUkerData: {
            id: '',
            name: '',
            user_id: '',
            kanwil_id: ''
        },
        newUkerModal: false,
        editUkerModal: false
    }

    componentWillMount() {
        this._refreshUkers();
    }

    toggleNewUkerModal() {
        this.setState({
            newUkerModal: !this.state.newUkerModal
        });
    }

    toggleEditUkerModal() {
        this.setState({
            editUkerModal: !this.state.editUkerModal
        });
    }

    addUker(e) {
        e.preventDefault();
        axios.post('http://192.168.1.14:8000/api/ukers/', this.state.newUkerData).then((response) => {
            let { ukers } = this.state;
            console.log('testing', ukers)
            ukers.push(response.data);

            this.setState({
                ukers, newUkerModal: false, newUkerData: {
                    name: '',
                    user_id: '',
                    kanwil_id: ''
                }
            });
            this._refreshUkers();
        });
    }
    updateUker(e) {
        e.preventDefault();
        let { name, user_id, kanwil_id } = this.state.editUkerData;

        axios.put('http://192.168.1.14:8000/api/ukers/' + this.state.editUkerData.id, {
            name, user_id, kanwil_id
        }).then((response) => {
            this._refreshUkers();
            this.setState({
                editUkerModal: false, editUkerData: { id: '', name: '', user_id: '', kanwil_id: '' }
            })
        });
    }
    editUker(id, name, user_id, kanwil_id) {
        this.setState({
            editUkerData: { id, name, user_id, kanwil_id }, editUkerModal: !this.state.editUkerModal
        });
    }

    deleteUker1 = async (id) => {
        const choice = global.confirm(`delete ${id}?`)
        if (choice) {
            await axios.delete(`http://192.168.1.14:8000/api/ukers/` + id);
            this._refreshUkers();
        }
    }

    _refreshUkers() {
        axios.get(`http://192.168.1.14:8000/api/ukers/`).then((response) => {
            console.log('res', response.data)
            this.setState({
                ukers: response.data.ukers
            })
        });
    }



    render() {
        console.log(this.state.ukers)
        return (
            <div className="App container">
                <MenuList />
                <h1>Uker</h1>
                <Button
                    className="my-3"
                    color="primary"
                    onClick={this.toggleNewUkerModal.bind(this)}>
                    Add Uker
        </Button>

                <Modal isOpen={this.state.newUkerModal} toggle={this.toggleNewUkerModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewUkerModal.bind(this)}>Add a new Uker</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">name</Label>
                            <Input id="name" value={this.state.newUkerData.name} onChange={(e) => {
                                let { newUkerData } = this.state;

                                newUkerData.name = e.target.value;

                                this.setState({ newUkerData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">User id</Label>
                            <Input id="name" value={this.state.newUkerData.user_id} onChange={(e) => {
                                let { newUkerData } = this.state;

                                newUkerData.user_id = e.target.value;

                                this.setState({ newUkerData });
                            }} />
                        </FormGroup>

                                                
                        <FormGroup>
                            <Label for="name">User Kanwil</Label>
                            <Input id="name" value={this.state.newUkerData.kanwil_id} onChange={(e) => {
                                let { newUkerData } = this.state;

                                newUkerData.kanwil_id = e.target.value;

                                this.setState({ newUkerData });
                            }} />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addUker.bind(this)}>Add Uker</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewUkerModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.editUkerModal} toggle={this.toggleEditUkerModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditUkerModal.bind(this)}>Edit a new Uker</ModalHeader>
                    <ModalBody>

                        <FormGroup>
                            <Label for="name">name</Label>
                            <Input id="name" value={this.state.editUkerData.name} onChange={(e) => {
                                let { editUkerData } = this.state;

                                editUkerData.name = e.target.value;

                                this.setState({ editUkerData });
                            }} />
                        </FormGroup>
                        
                        
                        <FormGroup>
                            <Label for="name">User Id</Label>
                            <Input id="name" value={this.state.editUkerData.user_id} onChange={(e) => {
                                let { editUkerData } = this.state;

                                editUkerData.user_id = e.target.value;

                                this.setState({ editUkerData });
                            }} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">Kanwil Id</Label>
                            <Input id="name" value={this.state.editUkerData.kanwil_id} onChange={(e) => {
                                let { editUkerData } = this.state;

                                editUkerData.kanwil_id = e.target.value;

                                this.setState({ editUkerData });
                            }} />
                        </FormGroup>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateUker.bind(this)}>Update Uker</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditUkerModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>Id User</th>
                            <th>Id Kanwil</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ukers.map(uker =>
                                <tr key={uker.id}>
                                    <td>{uker.id}</td>
                                    <td>{uker.name}</td>
                                    <td>{uker.user_id}</td>
                                    <td>{uker.kanwil_id}</td>
                                    <td>
                                        <Button
                                            color="success"
                                            size="sm"
                                            className="mr-2"
                                            onClick={this.editUker.bind(this, uker.id, uker.name, uker.user_id, uker.kanwil_id)}>
                                            Edit
                    </Button>
                                        <Button
                                            color="danger"
                                            size="sm"
                                            onClick={this.deleteUker1.bind(this, uker.id)}>
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

export default Ukers;
