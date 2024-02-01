import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/components/appRoutes";
import Layout from "./layouts/layout";
import ThemeProviderCustom from "./theme";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import DataProvider from "./settings/context/apiDataProvider";

// Importa tus componentes y define las rutas

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <DataProvider>
          <BrowserRouter>
            <ThemeProviderCustom>
              <Layout>
                <AppRoutes />
              </Layout>
            </ThemeProviderCustom>
          </BrowserRouter>
        </DataProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
