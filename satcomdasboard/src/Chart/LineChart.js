import React from "react";
import Chart from "react-apexcharts";


class LineChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },

                title: {
                    text: 'Page Statistics',
                    align: 'left'
                },
                markers: {
                    size: 0,

                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Maret', 'Aprl', 'May', 'Jun', 'Jul', 'Augst', 'Sept',
                        'Oct', 'Nov', 'Desc'
                    ],
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
            series: [{
                name: "Session Duration",
                data: [105, 202, 389, 24, 383, 26, 21, 202, 126, 118, 115, 120]
            },
            {
                name: "Page Views",
                data: [305, 241, 362, 442, 513, 218, 229, 237, 236, 251, 232, 235]
            },
            {
                name: 'Total Visits',
                data: [297, 257, 374, 499, 575, 338, 262, 247, 282, 256, 245, 347]
            }
            ],
        }
    }

    render() {
        return (
            <section className="col-lg-12 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="nav-tabs-custom">
                    <div className="tab-content no-padding">
                    <div className="tab-content no-padding">
                        <div id="chart">
                            <Chart options={this.state.options} series={this.state.series} type="line" height="350" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default LineChart;