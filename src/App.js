import { MainPage } from "./components/MainPage.js";
import { SkeletonTheme } from "react-loading-skeleton";
import "./css/sidebar.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
          <MainPage />
        </SkeletonTheme>
      </BrowserRouter>
    </div>
  );
}

export default App;
