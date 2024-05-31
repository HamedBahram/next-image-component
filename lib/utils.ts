import { type ClassValue, clsx } from 'clsx'
import { getPlaiceholder } from 'plaiceholder'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
