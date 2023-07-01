import React from 'react'
import Chart from 'chart.js/auto'
import { Bar, Pie } from 'react-chartjs-2'

const ChartView = ({labels1, data1, label1, labels2, data2, label2}) => {
  const state1 = {
    labels: labels1,
    datasets: [
      {
        label: label1,
        backgroundColor: '#36A2EB',
        borderColor: '#fff',
        borderWidth: 1,
        data: data1
      }
    ]
  }

  const state2 = {
    labels: labels2,
    datasets: [
      {
        label: label2,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
        data: data2
      }
    ]
  }

  return (
    
    <div className='w-full px-3 mt-3'>
      <div className='w-full bg-base-100 h-auto grid grid-cols-1 md:grid-cols-2 gap-7 p-2 mb-3 rounded-md md'>
        <div className='container w-full rounded-md bg-base-300 p-2'>
        <Bar
          data={state1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />  
        </div>
        <div className='container w-full h-[320px] rounded-md bg-base-300 p-2' style={{ display: 'flex', justifyContent: 'center' }}>
          <Pie
            data={state2}
            options={{
              title: {
                display: true,
                text: 'Topicwise Distribution',
                fontSize: 18,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
    </div>
    </div>
    
  )
}

export default ChartView