'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const App = () => {

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  const count = [200, 100, 300, 500, 200, 156, 300, 250, 500]

  const state = {
    labels: labels,
    datasets: [
      {
        label: '$',
        lineTension: 0.4,
        backgroundColor: [
          'rgba(255, 9, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
        ],
        data: count,
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
      <Bar
        width={400}
        height={260}
        data={state}
        style={{ color: '#FDF5E6' }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
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
