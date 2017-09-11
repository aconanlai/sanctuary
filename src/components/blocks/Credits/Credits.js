/* eslint react/no-danger: 0 */

import React from 'react';
import TranslationWrapper from '../../Translation/TranslationWrapper';
import TranslatedString from '../../Translation/TranslatedString';
import './Credits.css';

const Credits = (props) => (
  <div id="credits">
    <h1>Credits</h1>
    <p
      dangerouslySetInnerHTML={
        { __html: TranslatedString('credits', props.language), }
      }
    />
  </div>
);

export default TranslationWrapper(Credits);
