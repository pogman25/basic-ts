import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationSystem, { System } from 'react-notification-system';
import { getError, getSuccess } from './selectors';
import { hideSuccess, hideError } from './duck';
import { IStore } from 'src/core/reducers/interfaces';

const mapStateToProps = (state: IStore) => ({
  errorLog: getError(state),
  successLog: getSuccess(state),
});

const mapDispatchToProps = {
  hideError,
  hideSuccess,
};

class Notification extends Component<any, never> {
  notiRef = React.createRef<System>();

  componentDidUpdate(prevProps: any) {
    const { errorLog, successLog } = this.props;
    const notification = this.notiRef.current;

    if (!!notification) {
      if (prevProps.errorLog !== errorLog && !!errorLog) {
        notification.addNotification({
          message: this.props.errorLog,
          level: 'error',
          onRemove: () => this.props.hideError(),
        });
      }

      if (prevProps.successLog !== successLog && !!successLog) {
        notification.addNotification({
          message: this.props.successLog,
          level: 'success',
          onRemove: () => this.props.hideSuccess(),
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
