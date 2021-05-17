import catalogRu from '../locales/ru/messages.js';
import catalogEn from '../locales/en/messages.js';
import {I18nProvider} from "@lingui/react";
import React from "react";

const WithLanguage = ({language, children}) => {
    const catalogs = {
        ru: catalogRu,
        en: catalogEn
    };

    return (
        <I18nProvider language={language} catalogs={catalogs}>
            {children}
        </I18nProvider>
    )
};

export default WithLanguage;
