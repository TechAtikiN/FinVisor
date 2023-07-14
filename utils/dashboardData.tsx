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

export const transactions = [
  {
    id: 1,
    date: '30/06/2023',
    time: '08:20',
    name: 'John Doe',
    value: '+$300.25',
    status: 'Success',
    paymentMethod: 'Paypal',
  },
  {
    id: 2,
    date: '30/06/2023',
    time: '08:20',
    name: 'Katherine Doe',
    value: '+$230.25',
    status: 'Success',
    paymentMethod: 'Google Pay',
  },
  {
    id: 3,
    date: '30/06/2023',
    time: '08:20',
    name: 'Kevin Smith',
    value: '+$2300.25',
    status: 'Success',
    paymentMethod: 'Credit Card',
  },
  {
    id: 4,
    date: '30/06/2023',
    time: '08:20',
    name: 'David Douglas',
    value: '-$930.25',
    status: 'Failed',
    paymentMethod: 'Net Banking',
  },
  {
    id: 5,
    date: '30/06/2023',
    time: '08:20',
    name: 'Alice D',
    value: '+$20.25',
    status: 'Success',
    paymentMethod: 'Paypal',
  },
  {
    id: 6,
    date: '30/06/2023',
    time: '08:20',
    name: 'James Cameron',
    value: '+$23.25',
    status: 'Success',
    paymentMethod: 'Google Pay',
  },
  {
    id: 7,
    date: '30/06/2023',
    time: '08:20',
    name: 'Michael Bay',
    value: '+$2300.25',
    status: 'Failed',
    paymentMethod: 'Google Pay',
  },
  {
    id: 8,
    date: '30/06/2023',
    time: '08:20',
    name: 'Sofia Jonas',
    value: '+$2300.25',
    status: 'Success',
    paymentMethod: 'Paypal',
  },
  {
    id: 9,
    date: '30/06/2023',
    time: '08:20',
    name: 'Candice Doe',
    value: '+$100.25',
    status: 'Success',
    paymentMethod: 'Paypal',
  },
  {
    id: 10,
    date: '30/06/2023',
    time: '08:20',
    name: 'Kevin Hart',
    value: '+$1200.25',
    status: 'Success',
    paymentMethod: 'Google Pay',
  },
  {
    id: 11,
    date: '30/06/2023',
    time: '08:20',
    name: 'Jane Doe',
    value: '+$20.25',
    status: 'Failed',
    paymentMethod: 'Paypal',
  }
]