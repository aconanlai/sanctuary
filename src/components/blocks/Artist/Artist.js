/* eslint react/no-danger: 0 */

import React from 'react';
import TranslationWrapper from '../../Translation/TranslationWrapper';
import TranslatedString from '../../Translation/TranslatedString';
import './Artist.css';

const Artist = (props) => (
  <div id="artist">
    <h1>Artist</h1>
    <p
      dangerouslySetInnerHTML={
        { __html: TranslatedString('artist', props.language), }
      }
    />
  </div>
);

export default TranslationWrapper(Artist);
