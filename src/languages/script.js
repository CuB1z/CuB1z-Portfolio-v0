import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    en: "en",
    es: "es"
}

const getLanguage = (locale) => {
    if (locale === LANGUAGES.en) return english
    if (locale === LANGUAGES.es) return spanish
    return english
}

export default getLanguage