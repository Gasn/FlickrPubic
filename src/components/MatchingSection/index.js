import React from "react";

class MatchingSection extends React.Component {

  render(){
    const { matching, isFetching } = this.props;
    return (
      <div className="MatchingSection">
         {isFetching? "Fetching..." : matching.map(item => <div>{item.title}</div>)}
      </div>
    )
  }
}

export default MatchingSection;