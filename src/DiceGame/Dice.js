import React, { Component } from "react";
import { connect } from "react-redux";
class Dice extends Component {
  renderDice = () => {
    return this.props.arrDice.map((dice, index) => {
      return <img key={index} src={dice.hinhAnh} alt={dice.hinhAnh} style={{width: "50px", margin: "0 8px"}}/>;
    });
  };
  render() {
    return <div>{this.renderDice()}</div>;
  }
}
//hàm lấy state từ Redux về thành props của component
const mapStateToProps = (state) => {
  return {
    arrDice: state.DiceReducer.arrDice,
  };
};
export default connect(mapStateToProps)(Dice);
