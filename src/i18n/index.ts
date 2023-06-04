import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { zhCH } from './zh-CH';
import { enUS } from './en-US';

const resources = {
  en: {
    translation: enUS
  },
  zh: {
    translation: zhCH
  }
};

// 注册语言包及选项
i18n.use(initReactI18next).init({
  resources,
  lng: 'zh', // 默认语言为中文
  fallbackLng: 'en', // 如果当前语言不存在，则默认返回英文
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
