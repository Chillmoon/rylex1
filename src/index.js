import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//Localization
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          tenants: "Tenants",
          search: "Search",
          id: "ID",
          add: "Add",
          name: "Name",
          type: "Type",
          call_connect: "CallConnect",
          details: "Details",
          groups: "Groups",
          phone_numbers: "Phone numbers",
          admins: "Admins",
          users: "Users",
          domain: "Domain",
          tenant_name: "Tenant name",
          "support_e-mail": "Support e-mail",
          account_status: "Account status",
          main_contact: "Main contact",
          contact_name: "Contact name",
          phone_number: "Phone number",
          email: "Email",
          address_information: "Address information",
          street: "Street",
          postal_code: "Postal code",
          city: "City",
          country: "Country",
          per_page: "per page",
          of: "of",
          add_tenants: "Add tenants",
          contact_information: "Contact information",
          cancel: "Отмена",
          save: "Сохранить",
        },
      },
      ru: {
        translation: {
          tenants: "Арендаторы",
          search: "Поиск",
          id: "Идентификационный номер",
          add: "Добавить",
          name: "Имя",
          type: "Тип",
          call_connect: "Соединить с пользователем",
          details: "Подробности",
          groups: "Группы",
          phone_numbers: "Номера телефонов",
          admins: "Администраторы",
          users: "Пользователи",
          domain: "Домен",
          tenant_name: "Имя",
          "support_e-mail": "Почта",
          account_status: "Статус аккаунта",
          main_contact: "Основной контакт",
          contact_name: "Имя контакта",
          phone_number: "Номер",
          email: "Почта",
          address_information: "Адресс",
          street: "Улица",
          postal_code: "Индекс",
          city: "Город",
          country: "Страна",
          per_page: "на страницу",
          of: "из",
          add_tenants: "Добавить арендатора",
          contact_information: "Контактная информация",
          cancel: "Отмена",
          save: "Сохранить",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["cookie"],
    },
    interpolation: { escapeValue: false },
  });

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div>Loading... </div>}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
