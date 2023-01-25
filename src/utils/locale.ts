import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         home_welcome: "Welcome To",
         home_title: "Revolutionize your education with 237 Virtual Academy.",
         home_descriptioon: "Our Distance Learning Solutions provides you with all the tools you need to succeed in your studies from anywhere. Join live sessions, access course content and assessments, and communicate with your classmates and teacher.",
         register_text: "Signup",
         login_text: "Login"
        }
      },

      fr: {
        translation: {
            home_welcome: "Bienvenue à",
            home_title: "Révolutionnez votre éducation avec 237 Virtual Academy.",
            home_descriptioon: "Nos solutions d'apprentissage à distance vous fournissent tous les outils dont vous avez besoin pour réussir vos études où que vous soyez. Rejoignez des sessions en direct, accédez au contenu et aux évaluations des cours et communiquez avec vos camarades de classe et votre enseignant.",
            register_text: "S'inscrire",
            login_text: "S'identifier"
        }
      },
    }
  });

export default i18n;