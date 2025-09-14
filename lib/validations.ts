import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(64, { message: 'Password must be at most 64 characters' }),
})

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters' })
      .max(50, { message: 'Name must be at most 50 characters' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(64, { message: 'Password must be at most 64 characters' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      }),
    confirmPassword: z.string().min(1, { message: 'Password confirmation is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    newPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    confirmNewPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Password do not match',
    path: ['confirmNewPassword'],
  })

export const fullNameSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name at least 3 characters' }),
})

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
})

export const productSchema = z.object({
  title: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  price: z.string(),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  category: z.string(),
  image: z.string(),
  imageKey: z.string(),
})
