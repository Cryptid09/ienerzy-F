import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api';
import type { Consumer } from '../types/api';

const RecentLeads = () => {
  const { data: consumers = [], isLoading, error } = useQuery({
    queryKey: ['consumers'],
    queryFn: apiService.getConsumers
  });

  if (isLoading) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Loading leads...</div>;
  if (error) return <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">Error loading leads</div>;

  // Map kyc_status to our existing status format
  const getStatusColor = (kycStatus: string) => {
    switch (kycStatus) {
      case 'verified':
        return 'bg-green-100 text-green-600';
      case 'pending':
        return 'bg-orange-100 text-orange-600';
      case 'rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold">Recent Leads</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline self-start sm:self-auto">View All</button>
      </div>

      <ul className="divide-y">
        {consumers.map((consumer: Consumer) => (
          <li key={consumer.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 px-2 cursor-pointer gap-3 sm:gap-0">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">
                {consumer.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm sm:text-base truncate">{consumer.name}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs text-gray-500 mt-1">
                  <div className="flex items-center gap-1 min-w-0">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span className="truncate">{consumer.phone}</span>
                  </div>
                  <div className="flex items-center gap-1 min-w-0">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="truncate">{consumer.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(consumer.kyc_status)} self-start sm:self-auto flex-shrink-0`}>
              {consumer.kyc_status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentLeads;
