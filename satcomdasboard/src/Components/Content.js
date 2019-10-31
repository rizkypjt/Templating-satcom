import React, { Component } from 'react';
import LineChart from '../Chart/LineChart';
import Dropdown from 'react-dropdown';






const options = [
    { value: '1', uker: 1468, on: '100%', off: '0%', label: 'Zona 1' },
    { value: '2', uker: 2345, on: '100%', off: '0%', label: 'Zona 2' },
    { value: '3', uker: 2462, on: '100%', off: '0%', label: 'Zona 3' },
    { value: '4', uker: 2056, on: '100%', off: '0%', label: 'Zona 4' },
    { value: '5', uker: 978, on: '100%', off: '0%', label: 'Zona 5' },
]

const mystyle = {
    color: "#ffd369",
    padding: "15px",
    fontFamily: "helvetica",
    textAlign: 'center'
};

const title = {
    color: "White",
    fontFamily: "Helvetica",
    textAlign: 'center',
};

const defaultOption = options['0']

class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uker: '',
            on: '',
            off: '',
        }
    }

    _onSelect = (value) => {
        let obj = options.find(o => o.value === value.value);
        console.log(obj);
        this.setState({ uker: obj.uker, on: obj.on, off: obj.off });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <header className="main-header">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/* Content Header (Page header) */}
                            <section className="content-header">
                                <h1>
                                    Dashboard
                                 <small>Control panel</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="take_url"><i className="fa fa-dashboard" /> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>
                            </section>


                            {/* Main content */}
                            <section className="content">

                                <div className="row">
                                    <section className="col-lg-8 connectedSortable">
                                        {/* Map box */}
                                        <div className="box box-solid bg-light-blue-gradient">
                                            <div className="box-header">
                                                {/* tools box */}
                                                <div className="pull-right box-tools">
                                                    <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                                                        <i className="fa fa-calendar" /></button>
                                                    <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{ marginRight: 5 }}>
                                                        <i className="fa fa-minus" /></button>
                                                </div>
                                                {/* /. tools */}
                                                <i className="fa fa-map-marker" />
                                                <h3 className="box-title">
                                                    Zona
                                                </h3>
                                            </div>
                                            <div className="box-body">
                                                <div id="world-map" style={{ height: 250, width: '100%' }} />
                                            </div>
                                            {/* /.box-body*/}
                                            <div className="box-footer no-border">
                                                <div className="row">
                                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                                        <div id="sparkline-1" />
                                                        <div className="knob-label">Visitors</div>
                                                    </div>
                                                    {/* ./col */}
                                                    <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                                                        <div id="sparkline-2" />
                                                        <div className="knob-label">Online</div>
                                                    </div>
                                                    {/* ./col */}
                                                    <div className="col-xs-4 text-center">
                                                        <div id="sparkline-3" />
                                                        <div className="knob-label">Exists</div>
                                                    </div>
                                                    {/* ./col */}
                                                </div>
                                                {/* /.row */}
                                            </div>
                                        </div>
                                    </section>

                                    <div className="col-lg-4 col-sm-6">
                                        {/* small box */}
                                        <div className="small-box bg-blue" style={title}>
                                            <button className="btn btn-block btn-primary btn-lg" >
                                                <Dropdown
                                                    arrowClosed={<span className="arrow-closed" />}
                                                    arrowOpen={<span className="arrow-open" />}
                                                    options={options}
                                                    onChange={this._onSelect}
                                                    value={defaultOption}
                                                    placeholder="Zona" />
                                            </button>

                                            <div className="inner">
                                                <p style={title}>Total Uker </p>
                                                <h3 style={mystyle}>{this.state.uker}</h3>
                                                <p style={title}>Online</p>
                                                <h3 style={mystyle}>{this.state.on}</h3>
                                                <p style={title}>Offline</p>
                                                <h3 style={mystyle}>{this.state.off}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-5">
                                        {/* small box */}
                                        <div className="small-box bg-blue" style={title}>
                                            <button className="btn btn-block btn-primary btn-lg" >
                                                <Dropdown
                                                    arrowClosed={<span className="arrow-closed" />}
                                                    arrowOpen={<span className="arrow-open" />}
                                                    options={options}
                                                    onChange={this._onSelect}
                                                    value={defaultOption}
                                                    placeholder="Zona" />
                                            </button>

                                            <div className="inner">
                                                <p style={title}>Total Uker </p>
                                                <h3 style={mystyle}>{this.state.uker}</h3>
                                                <p style={title}>Online</p>
                                                <h3 style={mystyle}>{this.state.on}</h3>
                                                <p style={title}>Offline</p>
                                                <h3 style={mystyle}>{this.state.off}</h3>
                                            </div>
                                        </div>
                                    </div>
                             





                                        <section className="content">
                                            {/* Small boxes (Stat box) */}
                                            <div className="row">
                                                {/* ./col */}
                                                <div className="col-lg-100 col-xs-100">
                                                    <LineChart />

                                                </div>
                                            </div>
                                        </section>
                                        {/* right col */}
                                    </div>
                                    {/* /.row (main row) */}
                            </section>
                                {/* /.content */}
                        </div>


                            {/* Control Sidebar */}
                            <aside className="control-sidebar control-sidebar-dark" style={{ display: 'none' }}>
                                {/* Create the tabs */}
                                <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                                    <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home" /></a></li>
                                    <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears" /></a></li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    {/* Home tab content */}
                                    <div className="tab-pane" id="control-sidebar-home-tab">
                                        <h3 className="control-sidebar-heading">Recent Activity</h3>
                                        <ul className="control-sidebar-menu">
                                            <li>
                                                <a href="">
                                                    <i className="menu-icon fa fa-birthday-cake bg-red" />
                                                    <div className="menu-info">
                                                        <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>
                                                        <p>Will be 23 on April 24th</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className="menu-icon fa fa-user bg-yellow" />
                                                    <div className="menu-info">
                                                        <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>
                                                        <p>New phone +1(800)555-1234</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">
                                                    <i className="menu-icon fa fa-envelope-o bg-light-blue" />
                                                    <div className="menu-info">
                                                        <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>
                                                        <p>nora@example.com</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">
                                                    <i className="menu-icon fa fa-file-code-o bg-green" />
                                                    <div className="menu-info">
                                                        <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>
                                                        <p>Execution time 5 seconds</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* /.control-sidebar-menu */}
                                        <h3 className="control-sidebar-heading">Tasks Progress</h3>
                                        <ul className="control-sidebar-menu">
                                            <li>
                                                <a href=" ">
                                                    <h4 className="control-sidebar-subheading">
                                                        Custom Template Design
                    <span className="label label-danger pull-right">70%</span>
                                                    </h4>
                                                    <div className="progress progress-xxs">
                                                        <div className="progress-bar progress-bar-danger" style={{ width: '70%' }} />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">
                                                    <h4 className="control-sidebar-subheading">
                                                        Update Resume
                    <span className="label label-success pull-right">95%</span>
                                                    </h4>
                                                    <div className="progress progress-xxs">
                                                        <div className="progress-bar progress-bar-success" style={{ width: '95%' }} />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">
                                                    <h4 className="control-sidebar-subheading">
                                                        Laravel Integration
                    <span className="label label-warning pull-right">50%</span>
                                                    </h4>
                                                    <div className="progress progress-xxs">
                                                        <div className="progress-bar progress-bar-warning" style={{ width: '50%' }} />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href=" ">
                                                    <h4 className="control-sidebar-subheading">
                                                        Back End Framework
                    <span className="label label-primary pull-right">68%</span>
                                                    </h4>
                                                    <div className="progress progress-xxs">
                                                        <div className="progress-bar progress-bar-primary" style={{ width: '68%' }} />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* /.control-sidebar-menu */}
                                    </div>
                                    {/* /.tab-pane */}
                                    {/* Stats tab content */}
                                    <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                                    {/* /.tab-pane */}
                                    {/* Settings tab content */}
                                    <div className="tab-pane" id="control-sidebar-settings-tab">
                                        <form method="post">
                                            <h3 className="control-sidebar-heading">General Settings</h3>
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Report panel usage
                  <input type="checkbox" className="pull-right" defaultChecked />
                                                </label>
                                                <p>
                                                    Some information about this general settings option
                                            </p>
                                            </div>
                                            {/* /.form-group */}
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Allow mail redirect
                  <input type="checkbox" className="pull-right" defaultChecked />
                                                </label>
                                                <p>
                                                    Other sets of options are available
                                            </p>
                                            </div>
                                            {/* /.form-group */}
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Expose author name in posts
                  <input type="checkbox" className="pull-right" defaultChecked />
                                                </label>
                                                <p>
                                                    Allow the user to show his name in blog posts
                                             </p>
                                            </div>
                                            {/* /.form-group */}
                                            <h3 className="control-sidebar-heading">Chat Settings</h3>
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Show me as online
                                             <input type="checkbox" className="pull-right" defaultChecked />
                                                </label>
                                            </div>
                                            {/* /.form-group */}
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Turn off notifications
                                               <input type="checkbox" className="pull-right" />
                                                </label>
                                            </div>

                                            {/* /.form-group */}
                                            <div className="form-group">
                                                <label className="control-sidebar-subheading">
                                                    Delete chat history
                  <a href=" " className="text-red pull-right"><i className="fa fa-trash-o" /></a>
                                                </label>
                                            </div>
                                            {/* /.form-group */}
                                        </form>
                                    </div>
                                    {/* /.tab-pane */}
                                </div>
                            </aside>
                            <div className="control-sidebar-bg" />
                            {/* <Table /> */}

                    </header>
                </div>
                </div >

                );
            }
        }
        
export default Chart;