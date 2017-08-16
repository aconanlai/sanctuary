import dict from './dict.json';

// this function can be used to return a translated stringID
// intended for use when non-span elements are required
// must be used in conjunction with wrapping parent component
// in TranslationWrapper HOC in order to provide context

export default (stringID, language) => {
  return dict[stringID][language];
};
