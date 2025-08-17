import { Clock, Battery, User, CreditCard } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { Battery as BatteryType } from '../types/api';

const RecentActivity = () => {
  const { data: batteries = [], isLoading, error } = useQuery({
    queryKey: ['batteries'],
    queryFn: apiService.getBatteries
  });

  if (isLoading) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Loading activity data...</div>;
  if (error) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Error loading activity data</div>;

  const getIcon = (type: string) => {
    switch (type) {
      case 'battery':
        return <Battery size={16} className="text-green-600" />;
      case 'lead':
        return <User size={16} className="text-blue-600" />;
      case 'payment':
        return <CreditCard size={16} className="text-purple-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'maintenance':
        return 'bg-orange-100 text-orange-700';
      case 'inactive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-base sm:text-lg font-semibold">Recent Battery Activity</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline self-start sm:self-auto">
          View All
        </button>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {batteries.slice(0, 4).map((battery: BatteryType) => (
          <div key={battery.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors gap-2 sm:gap-0">
            <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
              {getIcon('battery')}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">{battery.serial_number}</h3>
                <p className="text-xs sm:text-sm text-gray-600 truncate">{battery.model_id} - Health: {battery.health_score}%</p>
              </div>
            </div>
            
            <div className="text-left sm:text-right self-start sm:self-auto">
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(battery.status)}`}>
                {battery.status}
              </span>
              <p className="text-xs text-gray-500 mt-1">Current</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;