import { useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import { State } from '../constants/constants';
import { Navigate } from 'react-router-dom';

const ReqAdminAuth = ({ children }: JsxElement) => {
  const { userDetails } = useSelector((store: State) => store.auth);

  if (userDetails?.is_admin) {
    return children;
  } else {
    return <Navigate to={'/401'} />;
  }
};

export default ReqAdminAuth;
