import type { OrderItem } from "./orderItem";
export type PaymentStatus = 'Unpaid' | 'Paid';
export type PaymentMethod = 'Cash' | 'Check';
export type OrderStatus = 'Pending' | 'Complete'

export interface Order {
  id: number;
  scoutId: number;
  customerId: number;
  streetAddressId: number;
  serviceId: number;
  items: OrderItem[];
  notes?: string;
  orderStatus: OrderStatus;
  dateCreated: Date;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  checkNumber?: number;
}
