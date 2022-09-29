import React, { Component } from "react";
import Dice from "./Dice";

import "./diceGame.css";
import Result from "./Result";

import { connect } from "react-redux";

class DiceGame extends Component {
  render() {
    return (
      <div className="game">
        <h1>GAME XÚC XẮC</h1>
        <div className="row text-center md-5">
          <div className="col-5 ">
            <button
              type="button"
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <Dice />
          </div>
          <div className="col-5 ">
            <button
              type="button"
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="row">
          <Result />
          <button className="btnPlay" onClick={() =>{this.props.playGame()}}>PLAY GAME</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (dice) => {
      let action = {
        type: "DAT_CUOC",
        dice,
      };
      dispatch(action);
    },
    playGame: () => {
      //gửi dữ liệu playGame lên reducer.
      let action = {
        type: "PLAY_GAME",
      }
      dispatch(action);
    }
  };
};
export default connect(null, mapDispatchToProps)(DiceGame);
