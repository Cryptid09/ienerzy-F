import BatteryStatus from '../components/BatteryS'
import StatCard from '../components/Statcard'
import EmiOverview from '../components/EMI'
import QuickActions from '../components/QuickA'
import RecentLeads from '../components/Recentleads'
import RecentActivity from '../components/RecentActivity'

const Dashboard = () => {
  return (
    <div className="pt-3 p-6 space-y-6">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your iTarang dealer portal</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Leads" 
          value={6} 
          rate="17%" 
        />
        <StatCard 
          title="Active Batteries" 
          value={56} 
          rate="32 deployed this week" 
        />
        <StatCard 
          title="Overdue EMIs" 
          value={9} 
          rate="₹2.3L pending collection" 
        />
        <StatCard 
          title="Monthly Revenue" 
          value="₹4.2L" 
          rate="+15% from last month" 
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          <RecentLeads />
          <BatteryStatus />
          <RecentActivity />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <EmiOverview />
          <QuickActions />
        </div>
      </div>
    </div>
  )
}

export default Dashboard