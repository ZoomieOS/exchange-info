import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    title: 'Exchange Bitcoin',
    emailLabel: 'Email',
    emailInput: 'Your e-mail',
    passwordLabel: 'Your password',
    passwordValue: 'Your password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    description: 'In the application it is possible to see bitcoin exchange rate.',
    back: 'Back',
    changeLang: 'Change language',
    chooseLang: 'Choose language',
    russian: 'Russian',
    signUpTitle:'Registration',

  },
  'ru': {
    title: 'Курс Bitcoin',
    emailLabel: 'Почта',
    emailInput: 'Ваша почта',
    passwordLabel: 'Пароль',
    passwordValue: 'Ваш пароль',
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    description: 'В приложении можно увидеть курс валют биткоина.',
    back: 'Назад',
    changeLang: 'Изменить язык',
    chooseLang: 'Выбрать язык',
    russian: 'Русский',
    signUpTitle:'Регистрация',
  }
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages,
});

export default i18n;
