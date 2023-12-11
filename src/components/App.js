import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View
import Dashboard from "./pages/private/dashboard/Dashboard";
import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import GiveGifts from "./pages/private/giveGifts/GiveGifts";
import PhoneBook from "./pages/private/phoneBook/PhoneBook";
import Deposit from "./pages/private/deposit/Deposit";
import ErrorPage from "./pages/errors/ErrorPage";
import WelcomeScreen from './pages/public/welcomeScreen/WelcomeScreen';

// eslint-disable-next-line no-unused-vars
import appStyle from "../scss/app.scss";
import Login from "./pages/public/login/Login";
import Transactions from "./pages/partials/transactions/Transactions";
import Contacts from "./pages/partials/contacts/Contacts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SendMoney from "./pages/private/sendMoney/SendMoney";
import NotificationsPage from "./pages/private/notificationsPage/NotificationsPage";
import SendToAll from "./pages/private/sendToAll/SendToAll";
import RequestFromAll from "./pages/private/requestfromall/RequestFromAll";
import TransactionInfo from "./pages/private/transactionInfo/TransactionInfo";
import ProfileSettings from "./pages/private/profileSettings/ProfileSettings";

function App() {
  const publicPages = [
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/onboarding'
    },
    {
      element: <PhoneBook />,
      path: '/phonebook'
    },
    {
      element: <Deposit />,
      path: '/deposit'
    },
    {
      element: <WelcomeScreen/>,
      path: '/welcomescreen'
    },
    { 
      element: <Login/>,
      path: '/login'
    },
    { 
      element: <Login/>,
      path: '/'
    },
  ];

  const PrivatePages = [
    {
      element: <Dashboard />,
      path: '/dashboard'
    },
    {
      element: <Profile />,
      path: '/profile/:id'
    },
    {
      element: <GiveGifts />,
      path: '/givegifts'
    },
    {
      element: <Transactions />,
      path: '/transactions'
    },
    {
      element: <Contacts />,
      path: '/contacts'
    },
    {
      element: <SendMoney />,
      path: '/sendmoney'
    },
    {
      element: <NotificationsPage />,
      path: '/notificationspage'
    },
    {
      element: <SendToAll />,
      path: '/sendtoall'
    },
    {
      element: <RequestFromAll />,
      path: '/request'
    },
    {
      element: <TransactionInfo />,
      path: '/transactioninfo'
    },
    {
      element: <ProfileSettings />,
      path: '/profilesettings/:id'
    },


  ];


  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
