import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotificationSystem, { System } from 'react-notification-system';
import { getError, getSuccess } from '../duck/selectors';
import { hideSuccess, hideError } from '../duck/noty-duck';

const notiRef = React.createRef<System>();

const useNotify = () => {
  const errorLog = useSelector(getError);
  const successLog = useSelector(getSuccess);
  const dispatch = useDispatch();
  const hideErrorMsg = React.useCallback(() => dispatch(hideError()), [dispatch])
  const hideSuccessMsg = React.useCallback(() => dispatch(hideSuccess()), [dispatch])
  const notification = notiRef.current;

  React.useEffect(() => {
    if (!!notification && !!errorLog) {
      notification.addNotification({
        message: errorLog,
        level: 'error',
        onRemove: () => hideErrorMsg(),
      });
    }
  }, [errorLog, hideErrorMsg, notification])

  React.useEffect(() => {
    if (!!notification && !!successLog) {
      notification.addNotification({
        message: successLog,
        level: 'success',
        onRemove: () => hideSuccessMsg(),
      });

    }
  }, [successLog, hideSuccessMsg, notification])
}

const Notification = () => {
  useNotify();
  return <NotificationSystem ref={notiRef} />;
}

export default React.memo(Notification);
