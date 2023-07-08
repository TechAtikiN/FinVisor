'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const App = () => {

  const labels = ['Shopping', 'Travel', 'Food', 'Subscriptions', 'Others']
  const count = [200, 100, 300, 500, 200]

  const state = {
    labels: labels,
    datasets: [
      {
        label: '$',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(5, 199, 132)',
          'rgb(54, 16, 235)',
        ],
        borderColor: 'rgb(0,0,0, 0.1)',
        borderWidth: 2,
        data: count,
      },
    ],
    options: {
      spacing: 5,
      radius: '100%',
      cutout: '70%',
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
    <div className='max-w-[560px] mx-auto'>
      <Doughnut
        height={250}
        width={200}
        data={state}
        style={{ color: '#FDF5E6' }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'left',
              fullSize: true,
            }
          }
        }}
      />
    </div>
  )
}

export default App
