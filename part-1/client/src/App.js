import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import DashLayout from "./components/layout/dash/DashLayout";
import SiteLayout from "./components/layout/site/SiteLayout";
import MembersList from "./features/members/list/MembersList";
import AddMember from "./features/members/add/AddMember";
import SingleMember from "./features/members/view/SingleMember";
import EditMember from "./features/members/edit/EditMember";
import AddCoronaDetails from "./features/corona/add/AddCoronaDetails";
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="members" element={<Outlet />}>
            <Route index element={<MembersList />} />
            <Route path="add" element={<AddMember />} />
            <Route path=":memberId" element={<SingleMember />} />
            <Route path="edit/:memberId" element={<EditMember />} />
          </Route>

          <Route path="/corona" element={<Outlet />}>
            <Route index element={<h1>CoronaDiteles</h1>} />
            {/* <Route index element={<CoronaDiteles/>}/> */}
            <Route path=":memberId" element={<AddCoronaDetails />} />

          </Route>
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
