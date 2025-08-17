const QuickActions = () => {
    return (
      <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Actions</h2>
        <div className="flex flex-col gap-2 sm:gap-3">
          <button className="text-blue-600 text-sm font-medium hover:underline text-left">
            ➕ Add New Lead
          </button>
          <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base">
            Track Battery
          </button>
        </div>
      </div>
    );
  };
  
  export default QuickActions;
  