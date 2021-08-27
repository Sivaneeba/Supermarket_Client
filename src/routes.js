import DashboardPage from './components/Login';
// import SettingsPage from "./pages/Home";
import MyAccount from "./components/admin/Account";
import Products from "./components/admin/Product";
import Customers from "./components/admin/UserList";

// import Orders from "./views/Orders";
// import Form from "../src/components/core/Form";
// import OngonigForm from "../src/components/c/ore/OngoingForm";
// import HDashboardPage from './pages/UserDashboard/HostRole/dashboardSummary';
// import Earning from './pages/UserDashboard/HostRole/earnings';
// import HPastShare from './pages/UserDashboard/HostRole/shareTable';
// import PastShare from './pages/UserDashboard/UserRole/shareTable';
// import HPastShareView from './pages/UserDashboard/UserRole/shareViewPage';
// import Settings  from './pages/UserDashboard/UserRole/settings';
// import HostConfirmation from './pages/HostConfirmation/HostConfirmation';
// import HostVehicle from './pages/HostVehicle/HostVehicle';
// import HostVehiclePage from './components/Dashbord/UserDashbord/Host/HostVehicle/HostVehiclePage';
// import HostResidencyPage from './pages/UserDashboard/HostRole/Residency';
// import UserLiveChat from './pages/UserDashboard/UserRole/userLiveChat';

 const udashboardRoutes = [
  {
    path: "/home",
    component: DashboardPage,
    layout: "/Adashboard"
  },

  {
    path: "/account",
    component: MyAccount,
    layout: "/Adashboard"
  },
  {
    path: "/products",
    component: Products,
    layout: "/Adashboard"
  },
  {
    path: "/customers",
    component: Customers,
    layout: "/Adashboard"
  },
  // {
  //   path: "/form",
  //   // component: Form,
  //   layout: "/dashboard"
  // },
//   {
//     path: "/ongoingForm",
//     // component: OngonigForm,
//     layout: "/dashboard"
//   },
//  //Host Routing//
//  {
//   path: "/hhome",
//   component: HDashboardPage,
//   layout: "/Udashboard"
// },
// {
//   path: "/hearnings",
//   component:Earning,
//   layout: "/Udashboard"
// },
// {
//   path: "/hpastshare",
//   component: HPastShare,
//   layout: "/Udashboard"
// },
// {
//   path: "/hshareviewpage",
//   component: HPastShareView,
//   layout: "/Udashboard"
// },
// {
//   path: "/orders",
//   component: HostConfirmation,
//   layout: "/Udashboard"
// },
// {
//   path: "/Residence",
//   component: HostResidencyPage,
//   layout: "/Udashboard"
// },
// {
//   path: "/ongoingForm",
//   // component: OngonigForm,
//   layout: "/dashboard"
// },
// {
//   path: "/view/vehicle",
//   component: HostVehicle,
//   layout: "/Udashboard"
// },
// {
//   path: "/view/vehicle_page",
//   component: HostVehiclePage,
//   layout: "/Udashboard"
// },
// {
//   path: "/liveChat",
//   component: UserLiveChat,
//   layout: "/Udashboard"
// },
];

export default udashboardRoutes;

