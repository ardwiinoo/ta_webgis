import React from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

const ChartView = () => {
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  return (
    // <div className="max-w-full p-3 mx-auto">
    //   <div className="bg-primary max-w-full p-3 mx-auto rounded-xl">
    //   <div className="flex flex-col w-full lg:flex-row">
    //     <div className="grid flex-grow h-auto card bg-base-100 rounded-box place-items-center">
    //     <Bar
    //       data={state}
    //       options={{
    //         title:{
    //           display:true,
    //           text:'Average Rainfall per month',
    //           fontSize:20
    //         },
    //         legend:{
    //           display:true,
    //           position:'right'
    //         }
    //       }}
    //     />  
    //     </div> 
    //     <div className="divider"> </div> 
    //     <div className="grid flex-grow h-auto card bg-base-100 rounded-box place-items-center">
    //     <Bar
    //       data={state}
    //       options={{
    //         title:{
    //           display:true,
    //           text:'Average Rainfall per month',
    //           fontSize:20
    //         },
    //         legend:{
    //           display:true,
    //           position:'right'
    //         }
    //       }}
    //     />  
    //     </div>
    //   </div>
    //   </div>
    // </div>
    
    <div className='w-full px-3'>
      <div className='w-full bg-primary h-auto grid grid-cols-1 md:grid-cols-2 gap-7 p-2 mb-3 rounded-md md'>
        <div className='container w-full rounded-md bg-base-100 p-2'>
        <Bar
          data={state}
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
        <div className='container w-full rounded-md bg-base-100 p-2'>
        <Bar
          data={state}
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
    </div>
    </div>
    
  )
}

export default ChartView