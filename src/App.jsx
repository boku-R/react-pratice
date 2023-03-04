import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  // const [変数名, 更新する関数名] =useState(初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffect
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // faceShowFlagがfalseのとき || の右側の処理を動かす
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // faceShowFlagがtrueのとき　&& の右側の処理を動かす
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おげんきですか！？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきだよ・・</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>🤓</p>}
    </>
  );
};

export default App;
