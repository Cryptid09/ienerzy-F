const QuickActions = () => {
    return (
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-col gap-3">
          <button className="text-blue-600 text-sm font-medium hover:underline text-left">
            ➕ Add New Lead
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Track Battery
          </button>
        </div>
      </div>
    );
  };
  
  export default QuickActions;
  