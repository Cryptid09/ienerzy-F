import { Calendar } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { EmiSchedule } from '../types/api';

interface EmiCardProps {
  emi: EmiSchedule;
}

const EmiCard = ({ emi }: EmiCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <li className="border p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors w-full">
      <div className="w-full space-y-2">
        <div className="flex w-full justify-between items-center">
          <span className="text-xs sm:text-sm font-medium">EMI #{emi.id}</span>
          <span className="text-xs border border-red-600 bg-red-200 rounded-xl px-2 py-0.5 text-red-600">
            {emi.overdue_days} days overdue
          </span>
        </div>
        
        <div className="flex w-full justify-between items-center">
          <div className="text-base sm:text-lg font-semibold">₹{emi.amount.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            <Calendar size={12} />
            <span>Due: {formatDate(emi.due_date)}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

const EmiOverview = () => {
  const { data: emiSchedules = [], isLoading, error } = useQuery({
    queryKey: ['emi-schedules'],
    queryFn: apiService.getEmiSchedules
  });

  if (isLoading) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Loading EMI data...</div>;
  if (error) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Error loading EMI data</div>;

  // Filter overdue EMIs
  const overdueEmis = emiSchedules.filter((emi: EmiSchedule) => emi.status === 'overdue');
  
  const totalOverdueAmount = overdueEmis.reduce((sum: number, emi: EmiSchedule) => sum + emi.amount, 0);
  const totalOverdueCount = overdueEmis.length;

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-base sm:text-lg font-semibold">EMI Overview</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline self-start sm:self-auto">
          View All
        </button>
      </div>

      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-red-50 rounded-lg mb-4 gap-2 sm:gap-0">
        <div className="flex-1">
          <p className="text-red-600 font-semibold text-sm sm:text-base">⚠️ Overdue EMIs</p>
          <p className="text-lg sm:text-xl pl-9 font-bold text-red-700">{totalOverdueCount}</p>
        </div>
        <div className="flex-1 sm:text-right">
          <p className="text-red-600 font-medium text-sm sm:text-base">
            Total Amount ₹{totalOverdueAmount.toLocaleString()}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">Recent Overdue</h3>
        <ul className="space-y-2">
          {overdueEmis.slice(0, 3).map((emi: EmiSchedule) => (
            <EmiCard key={emi.id} emi={emi} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmiOverview;