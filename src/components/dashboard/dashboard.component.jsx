import React, {Component} from 'react';
import './dashboard.styles.css';
import BarChart from '../charts/barchart/barchart.component';
import LineChart from '../charts/linechart/linechart.component';
import HorizontalBarChart from '../charts/horizontalBarChart/horizontalBarChart.component';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          barChart: {},
          lineChart:{},
          horizontalBarChart: {}
        }
      }

      componentWillMount() {
        this.getChartData();
      }

      getChartData() {
        //We'll do API calls from here later
        this.setState({
          barChart: {
            labels: ['January','February','March','Aril','June','July'],
            datasets: [
                {
                    label: 'Containers',
                    data: [
                        123,
                        541,
                        654,
                        326,
                        986,
                        115
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)',
                        'rgba(180,99,99,0.6)',
                        'rgba(200,15,10,0.6)',
                        'rgba(10,150,50,0.6)',
                        'rgba(12,200,200,0.6)',
                        'rgba(12,150,200,0.6)'
                    ]
                }
            ]
        },
        lineChart: {
          labels: ['January','February','March','Aril','June','July'],
          datasets: [
              {
                  label: 'Revenue',
                  data: [
                      123,
                      541,
                      654,
                      326,
                      986,
                      115
                  ],
                  backgroundColor:[
                      'rgba(255,99,132,0.6)',
                      'rgba(180,99,99,0.6)',
                      'rgba(200,15,10,0.6)',
                      'rgba(10,150,50,0.6)',
                      'rgba(12,200,200,0.6)',
                      'rgba(12,150,200,0.6)'
                  ]
              }
          ]
      },
      horizontalBarChart: {
        labels: ['January','February','March','Aril','June','July'],
        datasets: [
            {
                label: 'Vessel',
                data: [
                    123,
                    541,
                    654,
                    326,
                    986,
                    115
                ],
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(180,99,99,0.6)',
                    'rgba(200,15,10,0.6)',
                    'rgba(10,150,50,0.6)',
                    'rgba(12,200,200,0.6)',
                    'rgba(12,150,200,0.6)'
                ]
            }
        ]
      }
        })
    }


    render() {
        return(
            <div className='dashboard'>
                <h2>Dashboard</h2><hr />
                <div className="dashboard__charts">
                    <BarChart barChart={ this.state.barChart }/>
                    <LineChart lineChart={this.state.lineChart}/>
                    <HorizontalBarChart horizontalBarChart={this.state.horizontalBarChart} />
                </div>
            </div>
        )
    }
    
}

export default Dashboard;