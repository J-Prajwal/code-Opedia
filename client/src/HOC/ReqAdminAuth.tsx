import { useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import { State } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const ReqAdminAuth = ({ children }: JsxElement) => {
  const { userDetails } = useSelector((store: State) => store.auth);
  const navigate = useNavigate();

  if (userDetails?.is_admin) {
    return children;
  } else {
    navigate('/401/not_authorized');
  }
};

export default ReqAdminAuth;
