import React, { Component } from 'react';

class Table extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = 'js/data.js';
        script.async = true;

        document.body.appendChild(script);
    }


    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">STOP CLOCK</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>IP</th>
                                                    <th>MODEL</th>
                                                    <th>YEAR</th>
                                                    <th>COST</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>OmniWeb 5.5</td>
                                                    <td>OSX.4+</td>
                                                    <td>420</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>iPod Touch / iPhone</td>
                                                    <td>iPod</td>
                                                    <td>420.1</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>S60</td>
                                                    <td>S60</td>
                                                    <td>413</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Opera 7.0</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>Opera 7.5</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>Opera 8.0</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>Opera 8.5</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>Opera 9.0</td>
                                                    <td>Win 95+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>Opera 9.2</td>
                                                    <td>Win 88+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>Opera 9.5</td>
                                                    <td>Win 88+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>Opera for Wii</td>
                                                    <td>Wii</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Nokia N800</td>
                                                    <td>N800</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Konqureror 3.1</td>
                                                    <td>KDE 3.1</td>
                                                    <td>3.1</td>
                                                    <td>C</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Konqureror 3.3</td>
                                                    <td>KDE 3.3</td>
                                                    <td>3.3</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Konqureror 3.5</td>
                                                    <td>KDE 3.5</td>
                                                    <td>3.5</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Internet Explorer 4.5</td>
                                                    <td>Mac OS 8-9</td>
                                                    <td>-</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Internet Explorer 5.1</td>
                                                    <td>Mac OS 7.6-9</td>
                                                    <td>1</td>
                                                    <td>C</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Internet Explorer 5.2</td>
                                                    <td>Mac OS 8-X</td>
                                                    <td>1</td>
                                                    <td>C</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>NetFront 3.1</td>
                                                    <td>Embedded devices</td>
                                                    <td>-</td>
                                                    <td>C</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>NetFront 3.4</td>
                                                    <td>Embedded devices</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Dillo 0.8</td>
                                                    <td>Embedded devices</td>
                                                    <td>-</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>All others</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>U</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>IP</th>
                                                    <th>MODEL</th>
                                                    <th>YEAR</th>
                                                    <th>COST</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                              </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
            </div>

        );
    }
}

export default Table;