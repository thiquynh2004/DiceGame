/* eslint-disable no-mixed-operators */
const initialState = {
  dice: true,
  arrDice: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const DiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.dice = action.dice;
      return { ...state };
    }
    case "PLAY_GAME": {
      //Xử lý random xúc xắc
      let newArrDice = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Tạo ra xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/${soNgauNhien}.png`,
        };
        newArrDice.push(xucXacNgauNhien);
      }
      state.arrDice = newArrDice;
      state.tongSoBanChoi += 1;
      //xử lý số bàn thắng

      let tongSoDiem = newArrDice.reduce((tongDiem, dice, index) => {
        return (tongDiem += dice.ma);
      }, 0);
      // Xét điều kiện để thắng game
      if (
        (tongSoDiem > 11 && state.dice === true) ||
        (tongSoDiem <= 11 && state.dice === false)
      ) {
        state.soBanThang += 1;
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DiceReducer;
