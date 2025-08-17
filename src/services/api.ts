// Types remain the same
export interface Battery {
  id: number;
  serial_number: string;
  model_id: string;
  status: string;
  health_score: number;
  current_owner_id: number;
}

export interface BatteryTelemetry {
  id: number;
  battery_id: number;
  voltage: number;
  current: number;
  soc: number;
}

export interface Consumer {
  id: number;
  name: string;
  phone: string;
  email: string;
  pan: string;
  aadhar: string;
  kyc_status: string;
}

export interface ConsumerDocument {
  id: number;
  consumer_id: number;
  document_type: string;
  file_url: string;
  verification_status: string;
}

export interface FinanceApplication {
  id: number;
  consumer_id: number;
  battery_id: number;
  amount: number;
  status: string;
  credit_score: number;
}

export interface FinanceAccount {
  id: number;
  consumer_id: number;
  battery_id: number;
  finance_type: string;
  principal: number;
  emi_amount: number;
  tenure: number;
}

export interface EMISchedule {
  id: number;
  account_id: number;
  due_date: string;
  amount: number;
  status: string;
  payment_date: string | null;
  overdue_days: number;
}

export interface Payment {
  id: number;
  account_id: number;
  amount: number;
  payment_mode: string;
  transaction_id: string;
  timestamp: string;
}

const API_BASE_URL = 'https://mockdatai.onrender.com';

export const apiService = {
  // Batteries
  getBatteries: async () => {
    const response = await fetch(`${API_BASE_URL}/batteries`);
    if (!response.ok) throw new Error('Failed to fetch batteries');
    return response.json();
  },

  getBatteryTelemetry: async () => {
    const response = await fetch(`${API_BASE_URL}/battery_telemetry`);
    if (!response.ok) throw new Error('Failed to fetch battery telemetry');
    return response.json();
  },

  // Consumers (Leads)
  getConsumers: async () => {
    const response = await fetch(`${API_BASE_URL}/consumers`);
    if (!response.ok) throw new Error('Failed to fetch consumers');
    return response.json();
  },

  // Finance
  getFinanceApplications: async () => {
    const response = await fetch(`${API_BASE_URL}/finance_applications`);
    if (!response.ok) throw new Error('Failed to fetch finance applications');
    return response.json();
  },

  getFinanceAccounts: async () => {
    const response = await fetch(`${API_BASE_URL}/finance_accounts`);
    if (!response.ok) throw new Error('Failed to fetch finance accounts');
    return response.json();
  },

  getEmiSchedules: async () => {
    const response = await fetch(`${API_BASE_URL}/emi_schedules`);
    if (!response.ok) throw new Error('Failed to fetch EMI schedules');
    return response.json();
  },

  getPayments: async () => {
    const response = await fetch(`${API_BASE_URL}/payments`);
    if (!response.ok) throw new Error('Failed to fetch payments');
    return response.json();
  }
};