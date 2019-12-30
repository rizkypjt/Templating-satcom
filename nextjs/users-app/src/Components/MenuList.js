import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


class MenuList extends Component {
    render() {
        return (
            <div>
                <div className="App container">
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="users">Users</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="Kanwils">Kanwils</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="ukers">Ukers</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                </div>
                );
            }
        }
        
export default MenuList;