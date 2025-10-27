declare module '*.svg' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly VITE_BOOKING_URL?: string
  readonly VITE_GOOGLE_CLIENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
