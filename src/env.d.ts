/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: string
  readonly VITE_TRY_ENV: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}