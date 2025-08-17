export interface Battery {
  id: number;
  serial_number: string;
  model_id: string;
  status: 'active' | 'maintenance' | 'inactive';
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
  kyc_status: 'verified' | 'pending' | 'rejected';
}

export interface FinanceApplication {
  id: number;
  consumer_id: number;
  battery_id: number;
  amount: number;
  status: 'approved' | 'pending' | 'rejected';
  credit_score: number;
}

export interface FinanceAccount {
  id: number;
  consumer_id: number;
  battery_id: number;
  finance_type: 'lease' | 'loan';
  principal: number;
  emi_amount: number;
  tenure: number;
}

export interface EmiSchedule {
  id: number;
  account_id: number;
  due_date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
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