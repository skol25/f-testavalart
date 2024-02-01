import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/components/appRoutes";
import Layout from "./layouts/layout";
import ThemeProviderCustom from "./theme";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import DataProvider from "./settings/context/apiDataProvider";

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
