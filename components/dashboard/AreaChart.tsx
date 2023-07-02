'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const App = () => {

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  const count1 = [2000, 100, 300, 5000, 200, 1560, 3000, 2500, 500]
  const count2 = [100, 1190, 30, 500, 2100, 1500, 3000, 4050, 200]

  const state = {
    labels: labels,
    datasets: [
      {
        label: '$',
        lineTension: 0.4,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: 'rgb(255,20,142)',
        borderWidth: 2,
        data: count1,
        fill: {
          target: 'origin',
          above: 'rgb(255,20,142,0.3)',   // Area will be red above the origin
          below: 'rgba(58, 79, 122, 1)'    // And blue below the origin
        }
      },
      {
        label: '$',
        lineTension: 0.4,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 2,
        data: count2,
        fill: {
          target: 'origin',
          above: 'rgb(53, 162, 235, 0.23)',   // Area will be red above the origin
          below: 'rgba(255, 198, 211, 1)'    // And blue below the origin
        }
      }
    ],
    options: {
      plugins: {
        filler: {
          propagate: true
        }
      }
    }
  }
  ChartJS.register(...registerables, CategoryScale)
  ChartJS.defaults.color = '#FDF5E6';
  return (
    <div className=''>
      <Line
        width={600}
        height={300}
        data={state}
        style={{ color: '#FDF5E6' }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Monthly Expense',
            },
            legend: {
              display: true,
              position: 'left',
              fullSize: false,
            }
          }
        }}
      />
    </div>
  )
}

export default App
