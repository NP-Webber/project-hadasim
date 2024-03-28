import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import DashLayout from "./components/layout/dash/DashLayout";
import SiteLayout from "./components/layout/site/SiteLayout";
import MembersList from "./features/members/list/MembersList";
import AddMember from "./features/members/add/AddMember";
import SingleMember from "./features/members/view/SingleMember";
function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="members" element={<Outlet/>}>
           <Route index element={<MembersList />} />
             <Route path="add" element={<AddMember />} />
              <Route path=":userId" element={<SingleMember />} />
            </Route>

          <Route path="/corona" element={<Outlet/>}>
          <Route index element={<h1>CoronaDiteles</h1>}/>
          {/* <Route index element={<CoronaDiteles/>}/> */}

          </Route>
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
