import { store } from "@/config/app/store";
import Main from "@/layouts/Main";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import i18ne from "../i18n";
import { I18nextProvider } from "react-i18next";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18ne}>
      <Provider store={store}>
        <Main>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </Main>
      </Provider>
    </I18nextProvider>
  );
}
export default appWithTranslation(App);
