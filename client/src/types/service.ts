export type ServiceType = 'Drop' | 'Spread'

export interface Service {
  id: number;
  serviceType: ServiceType;
  price: number;
};
