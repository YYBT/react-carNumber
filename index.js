/*
 * @Author: duyaoyao
 * @Date: 2020-11-20 12:29:36
 * @LastEditors: duyaoyao
 * @LastEditTime: 2020-11-20 14:31:35
 */
import React from "react";
import styles from "./index.less";
import classNames from "classnames";
import xny from "../../assets/images/xny.png";

//
export default class extends React.Component {
  state = {
    showKeyboard: false,
    showCarNum: "",
    selectIndex: 0,
    keys: [
      "京",
      "津",
      "沪",
      "渝",
      "冀",
      "晋",
      "蒙",
      "辽",
      "吉",
      "黑",
      "苏",
      "浙",
      "皖",
      "闽",
      "赣",
      "鲁",
      "豫",
      "鄂",
      "湘",
      "奥",
      "桂",
      "琼",
      "川",
      "贵",
      "云",
      "藏",
      "陕",
      "甘",
      "青",
      "宁",
      "新"
    ],
    keys2: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M"
    ],
    carNum: [],
    err: false
  };

  showKeyBoardF = () => {
    this.setState({
      showKeyboard: true
    });
  };
  itemClick = (index) => {
    this.setState({
      selectIndex: index
    });
  };
  provinceClick = (item) => {
    debugger;
    let { carNum, selectIndex } = this.state;
    carNum[selectIndex] = item;
    this.setState({
      carNum,
      selectIndex: selectIndex + 1
    });
  };

  getCarNum = () => {
    const { carNum } = this.state;
    const { onChange } = this.props;
    if (onChange) {
      let num = carNum.join("");
      if (num.length < 7) {
        this.setState({
          err: true
        });
        return;
      }
      onChange(carNum.join(""));
      this.setState({
        showKeyboard: false,
        showCarNum: carNum.join(""),
        err: false
      });
    }
  };

  render() {
    const {
      showKeyboard,
      selectIndex,
      keys,
      keys2,
      carNum,
      err,
      showCarNum
    } = this.state;
    const { itemClick, showKeyBoardF, provinceClick, getCarNum } = this;
    return (
      <>
        <div className={styles.cntxt} onClick={showKeyBoardF}>
          {showCarNum}
          {!showCarNum && <span style={{ color: "#999" }}>点击输入车牌</span>}
        </div>
        {showKeyboard && (
          <div className={styles.cnBg}>
            <div className={styles.cnmodelflex}>
              <div className={styles.cnmodel}>
                <div className={styles.cnmodelTitle}>
                  <div>请输入车牌号</div>
                  <div
                    className={styles.cnmodelClose}
                    onClick={() => {
                      this.setState({
                        showKeyboard: false
                      });
                    }}
                  ></div>
                </div>
                <div className={styles.cnNumK}>
                  <div
                    onClick={() => {
                      itemClick(0);
                    }}
                    className={
                      selectIndex == 0 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[0] && carNum[0]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(1);
                    }}
                    className={
                      selectIndex == 1 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[1] && carNum[1]}
                  </div>
                  <div>•</div>
                  <div
                    onClick={() => {
                      itemClick(2);
                    }}
                    className={
                      selectIndex == 2 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[2] && carNum[2]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(3);
                    }}
                    className={
                      selectIndex == 3 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[3] && carNum[3]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(4);
                    }}
                    className={
                      selectIndex == 4 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[4] && carNum[4]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(5);
                    }}
                    className={
                      selectIndex == 5 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[5] && carNum[5]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(6);
                    }}
                    className={
                      selectIndex == 6 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[6] && carNum[6]}
                  </div>
                  <div
                    onClick={() => {
                      itemClick(7);
                    }}
                    className={
                      selectIndex == 7 ? styles.cnNumItems : styles.cnNumItem
                    }
                  >
                    {carNum && carNum[7] && carNum[7]}
                    {!carNum[7] && <img width="100%" src={xny}></img>}
                  </div>
                </div>
                {err && <div className={styles.carerr}>请输入正确车牌号</div>}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={styles.cnBtn} onClick={getCarNum}>
                    确定
                  </div>
                  <div
                    className={styles.cnBtn1}
                    onClick={() => {
                      this.setState({
                        carNum: [],
                        selectIndex: 0
                      });
                    }}
                  >
                    重输
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.keyboard}>
              {selectIndex == 0 &&
                keys.map((item) => (
                  <div
                    className={styles.keyItem}
                    onClick={() => {
                      provinceClick(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              {selectIndex != 0 &&
                keys2.map((item) => (
                  <div
                    className={styles.keyItem2}
                    onClick={() => {
                      provinceClick(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
}
