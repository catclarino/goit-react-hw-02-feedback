import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styledNotification';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
