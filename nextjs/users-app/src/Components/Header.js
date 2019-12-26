import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    <nav className="navbar navbar-static-top">
                        <a href="take_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>

                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">                            
                                <li className="dropdown user user-menu">
                                    <a href="take_url" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                        <span className="hidden-xs">Admin</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* User image */}
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                            <p>
                                                Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                        
                    
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="take_url" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="take_url" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* Control Sidebar Toggle Button */}
                                <li>
                                    <a href="take_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>


        );
    }
}

export default Header;