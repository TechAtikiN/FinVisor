import { BanknotesIcon, ChartBarIcon, ChartBarSquareIcon, CurrencyDollarIcon, DocumentChartBarIcon, QueueListIcon, WalletIcon } from '@heroicons/react/24/solid'

export const tags = [
  {
    icon: <CurrencyDollarIcon />,
    name: 'Income',
    value: '$2300.25',
    percent: '+1.4%'
  },
  {
    icon: <BanknotesIcon />,
    name: 'Expenses',
    value: '$2300.25',
    percent: '-1.4%'
  },
  {
    icon: <WalletIcon />,
    name: 'Balance',
    value: '$530.25',
    percent: '-0.54%'
  },
  {
    icon: <ChartBarSquareIcon />,
    name: 'Savings',
    value: '$9800.25',
    percent: '+0.24%'
  },
]

export const recentTransactions = [
  {
    name: 'John Doe',
    value: '+$2300.25',
    date: '30/06/2023',
    time: '08:20'
  },
  {
    name: 'Rachel Green',
    value: '-$300',
    date: '24/06/2023',
    time: '12:00'
  },
  {
    name: 'Ross Geller',
    value: '+$200.25',
    date: '20/06/2023',
    time: '2:00'
  },
  {
    name: 'Monica Adams',
    value: '-$2000.25',
    date: '12/06/2023',
    time: '12:00'
  },
  {
    name: 'Joey Tribbiani',
    value: '+$20.25',
    date: '1/06/2023',
    time: '12:00'
  }
]

export const upcomingBills = [
  {
    name: 'Netflix subscription',
    value: '$10.99',
    date: '30/06/2023',
  },
  {
    name: 'Adobe Inc',
    value: '$30.95',
    date: '24/06/2023',
  },
  {
    name: 'Grammarly',
    value: '$5.25',
    date: '20/06/2023',
  },
  {
    name: 'Medium Corportaion',
    value: '$12.95',
    date: '12/06/2023',
  },
]

export const investingOptions = [
  {
    icon: <ChartBarIcon />,
    name: 'Stocks',
    value: '$2300.25',
    percent: '+1.4%'
  },
  {
    icon: <WalletIcon />,
    name: 'FD & Savings',
    value: '$2300.25',
    percent: '-1.4%'
  },
  {
    icon: <QueueListIcon />,
    name: 'Mutual Funds',
    value: '$530.25',
    percent: '-0.54%'
  },
  {
    icon: <ChartBarSquareIcon />,
    name: 'Crypto',
    value: '$9800.25',
    percent: '+0.24%'
  },
]
