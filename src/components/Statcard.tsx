import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  rate?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, rate }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-3 sm:p-4 md:p-5 flex flex-col gap-1 sm:gap-2">
      {/* Title */}
      <p className="text-xs sm:text-sm text-gray-500">{title}</p>

      {/* Value */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</h2>

      {/* Rate */}
      {rate && (
        <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm font-medium">
          <TrendingUp size={14} className="sm:w-4 sm:h-4" /> {rate}
        </div>
      )}
    </div>
  );
};

export default StatCard;
