import React from "react";
import MatchingSectionContainer from "../../containers/MatchingSectionContainer";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      searchKey: e.target.value
    });
  }

  render() {
    const { searchKey } = this.state;
    return (
      <div className="MainScreen">
        <h2>Find your Flickr favourites</h2>
        <input
          type="text"
          placeholder="Search here..."
          value={searchKey}
          onChange={this.onChange}
        />
        <MatchingSectionContainer search={searchKey} />
      </div>
    );
  }
}

export default MainScreen;
