import { BanknotesIcon, ChartBarIcon, CurrencyDollarIcon, DocumentChartBarIcon, WalletIcon } from '@heroicons/react/24/solid'

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
    icons: <ChartBarIcon />,
    name: 'Savings',
    value: '$6700.25',
    percent: '+4.4%'
  },
  {
    icon: <WalletIcon />,
    name: 'Balance',
    value: '$530.25',
    percent: '-0.54%'
  },
]