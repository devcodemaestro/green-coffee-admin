import { Space } from "antd/es";
import "./App.css";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    // 이 부분을 레이아웃으로
    <div className="App">
      <AppHeader />
      {/* 이 부분을 SideMenu와 PageContent 둘다 css 적용 */}
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
