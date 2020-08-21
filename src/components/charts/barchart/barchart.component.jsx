import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barChart: props.barChart,
        }
    }
    render() {
        return(
            <div className='barChart'>
               <Bar className='bg-primary'
                    data={this.state.barChart}
                    options={{  
                        title: {
                            display: true,
                            text: 'Container Handling In Different Months',
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

export default BarChart;