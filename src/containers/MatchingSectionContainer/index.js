import React from "react";
import { connect } from "react-redux";
import MatchingSection from "../../components/MatchingSection";
import { searchForItemsWithKeyword } from "../../actions";

class MatchingSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { search } = nextProps;
    if (search !== this.state.search) {
      this.props.searchForItemsWithKeyword(search);
      this.setState({
        search
      });
    }
  }

  render() {
    const { api, match } = this.props;
    return <MatchingSection isFetching={api.fetching} matching={match} />;
  }
}

const mapState = state => {
  const { api, match } = state;
  return {
    api,
    match
  };
};

const mapDispatch = {
  searchForItemsWithKeyword
};

export default connect(
  mapState,
  mapDispatch
)(MatchingSectionContainer);
