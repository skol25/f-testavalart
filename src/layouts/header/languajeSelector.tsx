import React from "react";
import { useTranslation } from "react-i18next";
import DynamicSelect from "../../components/dynamicSelect/dynamicSelect";

const LanguageSelector: React.FC = () => {
  // Access the translation functions from react-i18next
  const { i18n } = useTranslation();

  // Function to change the language based on the selected option
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Array of language options available
  const languageOptions: string[] = ["en", "es"];

  return (
    <div>
      {/* Use DynamicSelect component for language selection */}
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
