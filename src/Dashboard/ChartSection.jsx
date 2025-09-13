import RevenueChart from './RevenueChart'
import SalesCategory from './SalesCategory'


function ChartSection() {
  return (
    <div className='flex'>
      <RevenueChart/>
      <SalesCategory/>
    </div>
  )
}

export default ChartSection
