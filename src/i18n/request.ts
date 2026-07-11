import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";

function detectFromAcceptLanguage(header: string): Locale {
  // Entries look like "es-MX,es;q=0.9,en;q=0.8" — first match wins
  for (const entry of header.split(",")) {
    const tag = entry.split(";")[0].trim().toLowerCase();
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }
  return defaultLocale;
}

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value;

  let locale: Locale;
  if (cookieLocale && isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = (await headers()).get("accept-language") ?? "";
    locale = detectFromAcceptLanguage(acceptLanguage);
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
