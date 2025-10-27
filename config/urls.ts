const DEFAULT_URLS = {
  BOOKING_URL:
    'https://outlook.office.com/bookwithme/user/e1f54d65cfb24ca28cd4034c2b958190@somosawaq.org?anonymous&ep=signature'
}

export const getBookingUrl = (): string => {
  return import.meta.env.VITE_BOOKING_URL || DEFAULT_URLS.BOOKING_URL
}

export const URL_CONFIG = {
  BOOKING: getBookingUrl()
}

export default URL_CONFIG
