import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
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
                                    <li><a href="index.html"><i className="fa fa-circle-o" />Menu 1</a></li>
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
                                    <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o" /> ChartJS</a></li>
                                    <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o" /> Morris</a></li>
                                    <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o" /> Flot</a></li>
                                    <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o" /> Inline charts</a></li>
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
                                    <li><a href="pages/UI/general.html"><i className="fa fa-circle-o" /> General</a></li>
                                    <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o" /> Icons</a></li>
                                    <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o" /> Buttons</a></li>
                                    <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o" /> Sliders</a></li>
                                    <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o" /> Timeline</a></li>
                                    <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o" /> Modals</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>



            </div>
        );
    }
}

export default Menu;