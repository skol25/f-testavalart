import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/components/appRoutes";
import Layout from "./layouts/layout";
import ThemeProviderCustom from "./theme";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import DataProvider from "./settings/context/apiDataProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/locals/i18n";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <DataProvider>
            <BrowserRouter>
              <ThemeProviderCustom>
                <Layout>
                  <AppRoutes />
                </Layout>
              </ThemeProviderCustom>
            </BrowserRouter>
          </DataProvider>
        </I18nextProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
