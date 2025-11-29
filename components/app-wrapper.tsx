"use client"

import { LanguageTransitionProvider } from '@/components/language-transition-provider'

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <LanguageTransitionProvider>
      {children}
    </LanguageTransitionProvider>
  )
}