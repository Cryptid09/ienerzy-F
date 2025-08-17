const BatteryStatus = () => {
    return (
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold mb-4">Battery Status Overview</h2>
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">37</p>
            <p className="text-sm text-gray-500">In Stock</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-500">Deployed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-500">Under Service</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BatteryStatus;
  