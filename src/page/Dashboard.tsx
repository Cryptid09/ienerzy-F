import BatteryStatus from '../components/BatteryS'
import StatCard from '../components/Statcard'
import EmiOverview from '../components/EMI'
import QuickActions from '../components/QuickA'
import RecentLeads from '../components/Recentleads'
import RecentActivity from '../components/RecentActivity'

const Dashboard = () => {
  return (
    <div className="pt-3 p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-600">Welcome to your iTarang dealer portal</p>
      </div>
      
      {/* Stats Grid - Responsive with better mobile layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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

      {/* Main Content Grid - Responsive layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Takes full width on mobile, 2 columns on larger screens */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          <RecentLeads />
          <BatteryStatus />
          <RecentActivity />
        </div>

        {/* Right Column - Full width on mobile, single column on larger screens */}
        <div className="space-y-4 sm:space-y-6">
          <EmiOverview />
          <QuickActions />
        </div>
      </div>
    </div>
  )
}

export default Dashboard