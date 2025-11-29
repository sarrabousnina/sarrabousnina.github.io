"use client"

import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useLanguageStore } from '@/stores/language-store'

type Locale = 'en' | 'fr'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore()

  const switchLanguage = (newLocale: Locale) => {
    // Simple language switch
    setLocale(newLocale)

    // Ensure the page remains scrollable
    setTimeout(() => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = ''
      }
      if (document.documentElement.style.overflow === 'hidden') {
        document.documentElement.style.overflow = ''
      }
    }, 10)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="
        rounded-lg px-3 py-2
        hover:bg-white/5
        transition-all duration-200
        hover:scale-105
        flex items-center justify-center
        text-emerald-400 hover:text-emerald-300
        min-w-[50px]
      "
      title={`Switch to ${locale === 'en' ? 'Français' : 'English'}`}
      onClick={() => {
        // Toggle between languages
        const newLocale = locale === 'en' ? 'fr' : 'en'
        switchLanguage(newLocale)
      }}
    >
      {/* Flag only */}
      <span className="text-xl leading-none filter hue-rotate-180">
        {locale === 'en' ? '🇬🇧' : '🇫🇷'}
      </span>
    </Button>
  )
}