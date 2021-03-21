/* eslint-disable @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-return,
  @typescript-eslint/restrict-template-expressions,
  @typescript-eslint/no-unsafe-member-access */
import de from './de';

const messages = {
  'de': de
};

const supportedLocales = ['de'];
const defaultLocale = 'de';

export function currentLocale() {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  if (supportedLocales.includes(window.location.pathname.split('/')[1])) {
    return window.location.pathname.split('/')[1];
  } else {
    return defaultLocale;
  }
}

export function t(key, params) {
  // remove trailing '.'
  if (key.endsWith('.')) {
    key = key.substring(0, key.length - 1);
  }
  // get message properties by current locale
  let message = messages[currentLocale()];
  // throw error if there are no messages for this locale
  if (!message) {
    throw new Error(`Language key '${key}' for locale '${currentLocale()}' not found`);
  }

  // for every part of the message key, parts separated by '.'
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    // get the current part
    const keyPart = keys[i];
    // if the message properties contain the current part, reduce them to this subpart
    if (Object.keys(message).includes(keyPart)) {
      message = message[keyPart];
    } else {
      // else return not found
      return `KEY ${key} NOT FOUND`;
    }
  }

  if (params) {
    Object.keys(params).forEach(param => {
      if (message.includes(`{${param}}`)) {
        message = message.replace(`{${param}}`, params[param]);
      }
    });
  }

  return message;
}
