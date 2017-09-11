import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './Block.css';

import { changePage } from '../../redux/modules/routing';

class Block extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    const top = this.ref.getBoundingClientRect().top;
    const half = window.innerHeight / 2;
    if ((top < half && top > (0 - half))
      && (this.props.page !== this.props.selectedPage)) {
      const langpath = (this.props.language === 'en') ? '/' : '/fr/';
      this.props.changePage(this.props.page);
      this.props.router.push((this.props.page === 'home') ? langpath : `${langpath}${this.props.page}`);
    }
  }

  render() {
    return (
      <div ref={c => this.ref = c} className="innerBlock">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state._language.language,
    scrollTop: state._ui.scrollTop,
    selectedPage: state._routing.page,
  };
};

export default connect(mapStateToProps, { changePage, })(withRouter(Block));
