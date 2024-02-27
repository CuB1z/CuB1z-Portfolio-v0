import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    default: "",
    en: "en",
    es: "es"
}

const getLanguage = (locale) => {
    if (locale === LANGUAGES.en) return english
    if (locale === LANGUAGES.es) return spanish
    return english
}

export const getActualLanguage = (locale) => {
    if (locale === LANGUAGES.en) return LANGUAGES.en
    if (locale === LANGUAGES.es) return LANGUAGES.es
    return LANGUAGES.en
}

export const getAlternativeLanguage = (locale) => {
    if (locale === LANGUAGES.en) return LANGUAGES.es
    if (locale === LANGUAGES.es) return LANGUAGES.default
    return LANGUAGES.default
}

export default getLanguage