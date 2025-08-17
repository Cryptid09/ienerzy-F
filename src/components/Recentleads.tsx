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
          <li key={lead.id} className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 px-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                {lead.name[0]}
              </div>
              <div>
                <p className="font-medium">{lead.name}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>{lead.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span>{lead.pincode}</span>
                  </div>
                </div>
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
