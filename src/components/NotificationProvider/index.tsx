import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

import { Props, StyledContainer, toastClasses } from './styles';

const NotificationProvider = ({ ...props }: Props) => {
  return (
    <StyledContainer>
      <ToastContainer
        {...props}
        closeOnClick={false}
        autoClose={10 * 1000} // 10 seconds
        draggable={false}
        hideProgressBar
        theme="dark" // for white close button
        position={toast.POSITION.BOTTOM_CENTER}
        className={toastClasses.root}
        toastClassName={toastClasses.toast}
        bodyClassName={toastClasses.body}
        progressClassName={toastClasses.progress}
      />
    </StyledContainer>
  );
};

export default NotificationProvider;
