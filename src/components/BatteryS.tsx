import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { Battery } from '../types/api';

const BatteryStatus = () => {
  const { data: batteries = [], isLoading, error } = useQuery({
    queryKey: ['batteries'],
    queryFn: apiService.getBatteries
  });

  if (isLoading) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Loading battery data...</div>;
  if (error) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Error loading battery data</div>;

  // Calculate battery statistics
  const activeBatteries = batteries.filter((battery: Battery) => battery.status === 'active').length;
  const maintenanceBatteries = batteries.filter((battery: Battery) => battery.status === 'maintenance').length;
  const inactiveBatteries = batteries.filter((battery: Battery) => battery.status === 'inactive').length;

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Battery Status Overview</h2>
      <div className="grid grid-cols-3 text-center gap-2 sm:gap-4">
        <div>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{activeBatteries}</p>
          <p className="text-xs sm:text-sm text-gray-500">Active</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{maintenanceBatteries}</p>
          <p className="text-xs sm:text-sm text-gray-500">Maintenance</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{inactiveBatteries}</p>
          <p className="text-xs sm:text-sm text-gray-500">Inactive</p>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
