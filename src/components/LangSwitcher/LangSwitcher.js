import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './LangSwitcher.css';

class LangSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.switchLang = this.switchLang.bind(this);
  }

  switchLang(lang) {
    const page = (this.props.page === 'home') ? '' : this.props.page;
    const langpath = (this.props.language === 'en') ? '/fr/' : '/';
    this.props.router.push(`${langpath}${page}`);
  }

  render() {
    return (
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
    );
  }
}


const mapStateToProps = state => {
  return {
    language: state._language.language,
    page: state._routing.page,
  };
};

export default connect(mapStateToProps, null)(withRouter(LangSwitcher));
