import { Calendar } from "lucide-react";

interface EmiData {
  id: string;
  amount: number;
  dueDate: string;
}

interface EmiCardProps {
  emi: EmiData;
}

const EmiCard = ({ emi }: EmiCardProps) => {
  // Format the due date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Calculate days overdue from due date to current date
  const calculateDaysOverdue = (dueDateString: string) => {
    const dueDate = new Date(dueDateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - dueDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return Math.max(0, daysDifference); // Return 0 if not overdue yet
  };

  const daysOverdue = calculateDaysOverdue(emi.dueDate);

  return (
    <li className="border p-3 rounded-lg hover:bg-gray-50 transition-colors w-full">
    <div className="w-full space-y-2">
      <div className="flex w-full justify-between items-center">
        <span className="text-sm font-medium">EMI #{emi.id}</span>
        <span className="text-xs border border-red-600 bg-red-200 rounded-xl px-2 py-0.5 text-red-600">
          {daysOverdue} days overdue
        </span>
      </div>
      
      <div className="flex w-full justify-between items-center">
        <div className="text-lg font-semibold">₹{emi.amount.toLocaleString()}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
          <Calendar size={12} />
          <span>Due: {formatDate(emi.dueDate)}</span>
        </div>
      </div>
    </div>
  </li>
  );
};

const EmiOverview = () => {
  // Sample data with due dates - removed daysOverdue as it's calculated
  const overdueEmis: EmiData[] = [
    { 
      id: "77244", 
      amount: 1680, 
      dueDate: "2024-12-15"
    },
    { 
      id: "77241", 
      amount: 1750, 
      dueDate: "2024-12-20"
    },
    { 
      id: "77237", 
      amount: 2300, 
      dueDate: "2024-12-28"
    },
  ];

  const totalOverdueAmount = overdueEmis.reduce((sum, emi) => sum + emi.amount, 0);
  const totalOverdueCount = overdueEmis.length;

  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">EMI Overview</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="w-full flex items-center justify-between p-3 bg-red-50 rounded-lg mb-4">
  <div className="flex-1">
    <p className="text-red-600 font-semibold">⚠️ Overdue EMIs</p>
    <p className="text-xl pl-9 font-bold text-red-700">{totalOverdueCount}</p>
  </div>
  <div className="flex-1 text-right">
    <p className="text-red-600 font-medium">
      Total Amount ₹{totalOverdueAmount.toLocaleString()}
    </p>
  </div>
</div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Overdue</h3>
        <ul className="space-y-2">
          {overdueEmis.map((emi) => (
            <EmiCard key={emi.id} emi={emi} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmiOverview;