/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { connect } from 'react-redux';
// wrap a component in this HOC to access language context for TranslatedString

const mapStateToProps = (state) => {
  return {
    language: state._language.language,
  };
};

const TranslationWrapper = (ComposedComponent) => {

  class TranslatedHOC extends React.Component {
    render() {
      return (<ComposedComponent
        {...this.props}
      />);
    }
  }

  return connect(mapStateToProps)(TranslatedHOC);
};

export default TranslationWrapper;
