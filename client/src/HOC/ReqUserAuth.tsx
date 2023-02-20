import { useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import { State } from '../constants/constants';
import { Navigate } from 'react-router-dom';

const ReqAdminAuth = ({ children }: JsxElement) => {
  const { isAuth } = useSelector((store: State) => store.auth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/"} replace />
  }
};

export default ReqAdminAuth;
