import React from "react";
import {
  Fragment
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {
  publicRoutes
} from "./routes/routes";
import {
  MainLayout
} from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            const Page = route.component;

            let Layout = MainLayout;

            // MainLayout là layout chính, luôn có Header và Footer
            // if else để đây mục đích là để nếu có layout nào của website
            // mà kh nhất thiết phải có Header và Footer
            // thì thay layout = null => render ra <Fragment />
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
