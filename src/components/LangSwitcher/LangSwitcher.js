import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './LangSwitcher.css';

class LangSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.setLang = this.setLang.bind(this);
    this.switchLang = this.switchLang.bind(this);
  }

  componentDidMount() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      console.log('found lang ' + lang);
      this.setLang(lang);
    } else {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang && (userLang.slice(0, 2) === 'fr')) {
        this.setLang('fr');
      } else {
        this.setLang('en');
      }
    }
  }

  setLang(lang) {
    const page = (this.props.page === 'home') ? '' : this.props.page;
    const langpath = (lang === 'fr') ? '/fr/' : '/';
    this.props.router.push(`${langpath}${page}`);
  }

  switchLang(lang) {
    const page = (this.props.page === 'home') ? '' : this.props.page;
    const langpath = (lang === 'fr') ? '/fr/' : '/';
    this.props.router.push(`${langpath}${page}`);
    localStorage.setItem('lang', lang);
  }


  render() {
    return (this.props.page === 'home') ? (
      <div className="langswitcher">
        <a
          onClick={() => this.switchLang('en')}
          className={(this.props.language === 'en') ? 'selected lang' : 'lang'}
          role="link"
          tabIndex={-2}
        >
          EN
        </a>
        / /
        <a
          onClick={() => this.switchLang('fr')}
          className={(this.props.language === 'fr') ? 'selected lang' : 'lang'}
          role="link"
          tabIndex={-2}
        >
          FR
        </a>
      </div>
    ) : null;
  }
}


const mapStateToProps = state => {
  return {
    language: state._language.language,
    page: state._routing.page,
  };
};

export default connect(mapStateToProps, null)(withRouter(LangSwitcher));
