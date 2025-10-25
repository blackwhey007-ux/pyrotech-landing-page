import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(50, 'Name darf maximal 50 Zeichen lang sein'),
  
  phone: z.string()
    .min(10, 'Telefonnummer muss mindestens 10 Zeichen lang sein')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  
  email: z.string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .min(1, 'E-Mail ist erforderlich'),
  
  eventType: z.string()
    .min(1, 'Bitte wählen Sie einen Eventtyp aus'),
  
  preferredDate: z.string()
    .optional(),
  
  message: z.string()
    .max(500, 'Nachricht darf maximal 500 Zeichen lang sein')
    .optional(),
  
  privacyAccepted: z.boolean()
    .refine(val => val === true, 'Sie müssen die Datenschutzbedingungen akzeptieren')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
