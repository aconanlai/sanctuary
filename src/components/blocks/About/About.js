/* eslint react/no-danger: 0 */

import React from 'react';
import TranslationWrapper from '../../Translation/TranslationWrapper';
import TranslatedString from '../../Translation/TranslatedString';
import './About.css';

const About = (props) => (
  <div id="about">
    <h1>About</h1>
    <p
      dangerouslySetInnerHTML={
        { __html: TranslatedString('about', props.language), }
      }
    />
  </div >
);

export default TranslationWrapper(About);
