interface Lead {
    id: number;
    name: string;
    phone: string;
    email: string;
    pincode: string;
    status?: "new" | "kyc_pending" | "kyc_verified" | "in_progress";
  }
  
  const leads: Lead[] = [
    { id: 1, name: "Sanchit", phone: "9123456789", email: "sanchit23@gmail.com", pincode: "790124", status: "new" },
    { id: 2, name: "Vikash Yadav", phone: "919076543210", email: "vikash@gmail.com", pincode: "700064", status: "kyc_pending" },
    { id: 3, name: "Rahul Sharma", phone: "919876543210", email: "rahul.sharma@gmail.com", pincode: "560001", status: "kyc_verified" },
    { id: 4, name: "Priya Patel", phone: "919876543211", email: "priya.patel@gmail.com", pincode: "411004", status: "in_progress" },
    { id: 5, name: "Amit Kumar", phone: "919876543212", email: "amit.kumar@gmail.com", pincode: "420001", status: "new" },
  ];
  
  const RecentLeads = () => {
    return (
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Leads</h2>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
  
        <ul className="divide-y">
          {leads.map((lead) => (
            <li key={lead.id} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                  {lead.name[0]}
                </div>
                <div>
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.phone} • {lead.email} • {lead.pincode}</p>
                </div>
              </div>
              <span className={`
                text-xs px-2 py-1 rounded-full font-medium
                ${lead.status === "new" && "bg-blue-100 text-blue-600"}
                ${lead.status === "kyc_pending" && "bg-orange-100 text-orange-600"}
                ${lead.status === "kyc_verified" && "bg-green-100 text-green-600"}
                ${lead.status === "in_progress" && "bg-yellow-100 text-yellow-600"}
              `}>
                {lead.status?.replace("_", " ")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentLeads;
  