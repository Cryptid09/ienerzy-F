import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { Battery } from '../types/api';

const BatteryStatus = () => {
  const { data: batteries = [], isLoading, error } = useQuery({
    queryKey: ['batteries'],
    queryFn: apiService.getBatteries
  });

  if (isLoading) return <div className="bg-white border rounded-xl shadow-sm p-5">Loading battery data...</div>;
  if (error) return <div className="bg-white border rounded-xl shadow-sm p-5">Error loading battery data</div>;

  // Calculate battery statistics
  const activeBatteries = batteries.filter((battery: Battery) => battery.status === 'active').length;
  const maintenanceBatteries = batteries.filter((battery: Battery) => battery.status === 'maintenance').length;
  const inactiveBatteries = batteries.filter((battery: Battery) => battery.status === 'inactive').length;

  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <h2 className="text-lg font-semibold mb-4">Battery Status Overview</h2>
      <div className="grid grid-cols-3 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900">{activeBatteries}</p>
          <p className="text-sm text-gray-500">Active</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{maintenanceBatteries}</p>
          <p className="text-sm text-gray-500">Maintenance</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{inactiveBatteries}</p>
          <p className="text-sm text-gray-500">Inactive</p>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
