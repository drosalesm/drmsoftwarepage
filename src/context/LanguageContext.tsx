import  { createContext, useState, PropsWithChildren } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  isFading: boolean; // 1. Add a new state for the animation
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('es'); // Your default is Spanish
  const [isFading, setIsFading] = useState(false); // 2. Initialize the fading state

  // 3. This is the core of the new logic. We create an animated language change.
  const changeLanguage = (lang: Language) => {
    // Don't do anything if we're already fading or switching to the same language
    if (isFading || lang === language) return;

    // Start the fade-out animation
    setIsFading(true);

    // Wait for the fade-out animation to finish (e.g., 300ms)
    setTimeout(() => {
      // After fading out, change the language
      setLanguage(lang);
      // And start the fade-in animation
      setIsFading(false);
    }, 300); // This duration should match your CSS transition duration
  };

  const value = {
    language,
    changeLanguage,
    isFading, // 4. Provide the new state to the rest of the app
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};