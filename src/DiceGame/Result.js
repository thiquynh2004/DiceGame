import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div className="result">
        <div className="display-4">
          BẠN CHỌN:{" "}
          <span className="text-success">
            {this.props.dice ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          BÀN THẮNG:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    soBanThang: state.DiceReducer.soBanThang,
    dice: state.DiceReducer.dice,
    tongSoBanChoi: state.DiceReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps)(Result);
