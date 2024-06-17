import React from "react";
import "./glasses.css";
import Model from "./Model";
import MainModel from "./MainModel";
import RenderGlasses from "./RenderGlasses";
import { useState } from "react";
import GlassActive from "./GlassActive";
import ChoosingGlass from "./ChoosingGlass";

const glassesList = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "../../public/glasses/glassesImage/v1.png",
    // ur:"../../public/glasses/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "../../public/glasses/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "../../public/glasses/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "../../public/glasses/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "../../public/glasses/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "../../public/glasses/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "../../public/glasses/glassesImage/v7.png",
    desc: "Light pink Lorem ipsum dolor sit amet. these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "../../public/glasses/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "../../public/glasses/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const Glasses = () => {
  const [glass, setGlass] = useState(
    `../../public/glasses/glassesImage/v1.png`
  );

  const [glassName, setGlassName] = useState("GUCCI G8850U");

  const [glassInfo, setGlassInfo] = useState(
    "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  );

  const handleChange = (id) => {
    setGlass(`../../public/glasses/glassesImage/v${id}.png`);
  };

  const handleChangeName = (name) => {
    setGlassName(name);
  };

  const handleChangeInfo = (info) => {
    setGlassInfo(info);
  };

  return (
    <div className="glasses">
      <div className="title">
        <h1 className="text-center text">TRY GLASSES ONLINE APP</h1>
      </div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <div className="main-model">
            <MainModel nameActive={glassName} infoActive={glassInfo} />
            <GlassActive glassActive={glass} />
          </div>
          <div className="choosingGlass">
            <ChoosingGlass glassChoosing={glass} />
          </div>
          <div className="model">
            <Model />
          </div>
        </div>
      </div>
      <div className="container">
        <RenderGlasses
          handleChange={handleChange}
          dataGlasses={glassesList}
          handleChangeName={handleChangeName}
          handleChangeInfo={handleChangeInfo}
        />
      </div>
    </div>
  );
};

export default Glasses;
