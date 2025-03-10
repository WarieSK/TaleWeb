import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import ShowsPage from "./pages/ShowsPage"
import ShowDetail from "./pages/ShowDetail"
import MembersPage from "./pages/MembersPage"
import MemberDetail from "./pages/MemberDetail"



const WebRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/Main" element={<App />} />
          <Route path="/Members" element={<MembersPage />} />
          <Route path="/Members/:id" element={<MemberDetail />} />
          <Route path="/Shows" element={<ShowsPage />} />
          <Route path="/Shows/:id" element={<ShowDetail />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default WebRouter;
