'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const App = () => {

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  const count = [220, 100, 300, 150, 200, 156, 300, 250, 500]

  const state = {
    labels: labels,
    datasets: [
      {
        label: '$',
        lineTension: 0.0,
        borderColor: 'rgb(255,20,142)',
        borderWidth: 2,
        data: count,
      },
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
