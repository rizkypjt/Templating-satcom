import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            // <Router>
            <div>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                   
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview menu-open">
                                <a href="take_url">
                                    <i className="fa fa-dashboard" /> <span>Network Performace</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="/home"><i className="fa fa-circle-o" />Home</a></li>
                                    <li className="active"><a href="index2.html"><i className="fa fa-circle-o" />Menu 2</a></li>
                                </ul>
                            </li>
                   
                            <li className="treeview">
                                <a href="take_url">
                                    <i className="fa fa-pie-chart" />
                                    <span>Preventive Maintenance</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o" /> Menu 1</a></li>
                                    <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o" /> Menu 2</a></li>
                                    <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o" /> Menu 3</a></li>
                                    <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" /> Menu 4 </a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="take_url">
                                    <i className="fa fa-laptop" />
                                    <span>Corrective Maintenance</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/UI/general.html"><i className="fa fa-circle-o" /> Menu 1</a></li>
                                    <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o" /> Menu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>
            </div>
            // </Router>
        );
    }
}

export default Menu;