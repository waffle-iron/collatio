import React from 'react'
import { connect } from 'react-redux'

class BingList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBingList() {
    return this.props.bing.data.map(suggestion => {
      return (
        <a key={suggestion} className="collection-item" onClick={() => this.props.bingListClick(suggestion)}>{suggestion}</a>
      );
    });
  }

  render() {
    if (this.props.bing.data.length === 0 || !this.props.showBingList) {
      return <div></div>;
    }

    return (
      <div className="collection">{this.renderBingList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bing: state.bing };
}

export default connect(mapStateToProps)(BingList)