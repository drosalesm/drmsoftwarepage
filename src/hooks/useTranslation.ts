import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import en from '@/translations/en.json';
import es from '@/translations/es.json';

const translations: { [key: string]: any } = { en, es };

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  // Destructure the new isFading state
  const { language, changeLanguage, isFading } = context;

  const translationsObject = translations[language] || {};

  return {
    translations: translationsObject,
    changeLanguage,
    currentLanguage: language,
    isFading, // <-- EXPOSE THE NEW STATE
  };
};