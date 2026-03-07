import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';
import PrivateRoute from './PrivateRoute';
import { ROUTES } from '../constants/routes';

// Auth
import LoginPage from '../features/auth/pages/LoginPage';
import ForgotPasswordPage from '../features/auth/pages/ForgotPasswordPage';

// Dashboard
import DashboardPage from '../features/dashboard/pages/DashboardPage';

// Users
import UsersListPage from '../features/users/pages/UsersListPage';
import UserDetailPage from '../features/users/pages/UserDetailPage';
import CreateUserPage from '../features/users/pages/CreateUserPage';

// Documents
import DocumentsListPage from '../features/documents/pages/DocumentsListPage';
import DocumentDetailPage from '../features/documents/pages/DocumentDetailPage';

// Publications
import PublicationsListPage from '../features/publications/pages/PublicationsListPage';
import CreatePublicationPage from '../features/publications/pages/CreatePublicationPage';

// Access
import AccessControlPage from '../features/access/pages/AccessControlPage';

// Emails
import EmailManagementPage from '../features/emails/pages/EmailManagementPage';

// Sub Admins
import SubAdminsListPage from '../features/sub_admins/pages/SubAdminsListPage';
import CreateSubAdminPage from '../features/sub_admins/pages/CreateSubAdminPage';

// Reports
import ReportsPage from '../features/reports/pages/ReportsPage';
import ViewLogsPage from '../features/reports/pages/ViewLogsPage';
import AdminLogsPage from '../features/reports/pages/AdminLogsPage';

// Settings
import SettingsPage from '../features/settings/pages/SettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage /> }
    ]
  },
  {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTES.USERS, element: <UsersListPage /> },
      { path: ROUTES.USER_DETAIL, element: <UserDetailPage /> },
      { path: ROUTES.USER_CREATE, element: <CreateUserPage /> },
      { path: ROUTES.DOCUMENTS, element: <DocumentsListPage /> },
      { path: ROUTES.DOCUMENT_DETAIL, element: <DocumentDetailPage /> },
      { path: ROUTES.PUBLICATIONS, element: <PublicationsListPage /> },
      { path: ROUTES.PUBLICATION_CREATE, element: <CreatePublicationPage /> },
      { path: ROUTES.ACCESS_CONTROL, element: <AccessControlPage /> },
      { path: ROUTES.EMAILS, element: <EmailManagementPage /> },
      { path: ROUTES.SUB_ADMINS, element: <SubAdminsListPage /> },
      { path: ROUTES.SUB_ADMIN_CREATE, element: <CreateSubAdminPage /> },
      { path: ROUTES.REPORTS, element: <ReportsPage /> },
      { path: ROUTES.VIEW_LOGS, element: <ViewLogsPage /> },
      { path: ROUTES.ADMIN_LOGS, element: <AdminLogsPage /> },
      { path: ROUTES.SETTINGS, element: <SettingsPage /> }
    ]
  }
]);

export default router;
