import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationSystem, { System } from 'react-notification-system';
import { getError, getSuccess } from '../duck/selectors';
import { hideSuccess, hideError } from '../duck/noty-duck';
import { IStore } from 'src/core/reducers/interfaces';
import { IMapStateToNotify, IMapDispatchToNotify } from '../duck/interfaces';

const mapStateToProps = (state: IStore): IMapStateToNotify => ({
  errorLog: getError(state),
  successLog: getSuccess(state),
});

const mapDispatchToProps: IMapDispatchToNotify = {
  hideError,
  hideSuccess,
};

class Notification extends Component<IMapStateToNotify & IMapDispatchToNotify, {}> {
  notiRef = React.createRef<System>();

  componentDidUpdate(prevProps: IMapStateToNotify & IMapDispatchToNotify) {
    const { errorLog, successLog, hideError, hideSuccess } = this.props;
    const notification = this.notiRef.current;

    if (!!notification) {
      if (prevProps.errorLog !== errorLog && !!errorLog) {
        notification.addNotification({
          message: errorLog,
          level: 'error',
          onRemove: () => hideError(),
        });
      }

      if (prevProps.successLog !== successLog && !!successLog) {
        notification.addNotification({
          message: successLog,
          level: 'success',
          onRemove: () => hideSuccess(),
        });
      }
    }
  }

  render() {
    return <NotificationSystem ref={this.notiRef} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
