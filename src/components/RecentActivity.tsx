import { Clock, Battery, User, CreditCard } from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'battery' | 'lead' | 'payment' | 'maintenance';
  title: string;
  description: string;
  time: string;
  status?: string;
}

const RecentActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "battery",
      title: "BT202400186",
      description: "iTarang Pro 48V - 48V 50Ah",
      time: "2 hours ago",
      status: "In stock"
    },
    {
      id: "2",
      type: "battery",
      title: "BT202400198",
      description: "iTarang Lite 24V - 24V 30Ah",
      time: "4 hours ago",
      status: "In stock"
    },
    {
      id: "3",
      type: "battery",
      title: "BT202400182",
      description: "iTarang Standard 36V - 36V 25Ah",
      time: "6 hours ago",
      status: "In stock"
    },
    {
      id: "4",
      type: "battery",
      title: "BT202400199",
      description: "iTarang Pro 48V - 48V 50Ah",
      time: "8 hours ago",
      status: "In stock"
    }
  ];

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

  return (
    <div className="bg-white border rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              {getIcon(activity.type)}
              <div>
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </div>
            
            <div className="text-right">
              {activity.status && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {activity.status}
                </span>
              )}
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;