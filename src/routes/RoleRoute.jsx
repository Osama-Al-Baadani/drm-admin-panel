import { Navigate } from 'react-router-dom';
import { usePermissions } from '../hooks/usePermissions';

const RoleRoute = ({ children, requiredPermission }) => {
  const { hasPermission } = usePermissions();

  if (!hasPermission(requiredPermission)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
