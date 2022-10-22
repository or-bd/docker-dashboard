export const APP = '_app';
export const SERVICE = '_service';
export const AUTH_TOKEN = (): string => localStorage.getItem('token') as string;
