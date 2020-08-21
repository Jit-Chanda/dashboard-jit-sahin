import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './linechart.styles.css';


class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineChart: props.lineChart
        }
    }
    render() {
        return(
            <div className=''>
               <Line
                    data={this.state.lineChart}
                    options={{  
                        title: {
                            display: true,
                            text: 'Vessel Handling In Different Months',
                            fontSize:25
                        },
                        legend: {
                            display: true,
                            position: "right"
                        }
                    }}
                />
            </div>
        )
    }
}

export default LineChart;