'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Line, PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const App = () => {

  const labels = ['Stocks', 'FD', 'Mutual Funds', 'Crypto', 'Others']
  const count = [2200, 1000, 2200, 1500, 2000]

  const state = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: count,
      borderColor: '#000',
      backgroundColor: [
        'rgb(255, 99, 12)',
        'rgb(75, 192, 92)',
        'rgb(255, 205, 126)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  }

  ChartJS.defaults.color = '#fff'
  ChartJS.register(...registerables, CategoryScale)
  return (
    <div className=''>
      <PolarArea
        width={380}
        height={380}
        data={state}
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
