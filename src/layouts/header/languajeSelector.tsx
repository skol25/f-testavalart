// LanguageSelector.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import DynamicSelect from "../../components/dynamicSelect/dynamicSelect";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageOptions: string[] = ["en", "es"];

  return (
    <div>
      <DynamicSelect
        options={languageOptions}
        onSelect={(selectedLanguage: string) =>
          changeLanguage(selectedLanguage)
        }
      />
    </div>
  );
};

export default LanguageSelector;
