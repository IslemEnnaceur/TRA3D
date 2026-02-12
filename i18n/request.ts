import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    // This will typically be the locale from the pathname
    let locale = await requestLocale;

    // Define supported locales and default locale
    const locales = ['en', 'fr', 'ar'];
    const defaultLocale = 'fr';

    // Ensure that a valid locale is used
    if (!locale || !locales.includes(locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
