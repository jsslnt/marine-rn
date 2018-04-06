import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

const colors = {
  backgroundBlue: '#445368',
  font: '#EFEFEF'
}

export default Layout = StyleSheet.create({
  label: {
    color: colors.font,
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
    alignItems: 'center',
    padding: 30
  },
  colors
});