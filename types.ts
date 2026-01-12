
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';

export interface FormError {
  field: keyof ContactFormData;
  message: string;
}
