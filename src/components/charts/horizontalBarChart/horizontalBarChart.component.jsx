import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


class HorizontalBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontalBarChart: props.horizontalBarChart,
        }
    }
    render() {
        return(
            <div className='chart'>
                <HorizontalBar
                    data={this.state.horizontalBarChart}
                    options={{  
                        title: {
                            display: true,
                            text: 'Revenue Earning In Different Months',
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

export default HorizontalBarChart;