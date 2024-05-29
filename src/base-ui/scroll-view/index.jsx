// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showRight, setShowRigh] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // const [totalDistance, setTotalDistance] = useState(0);
  // const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();
  const pastDistanceRef = useRef(0);

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    // console.log(scrollContentRef);
    setShowRigh(totalDistance > 0);
  }, [props.children]);

  function controlClickHandle(isRight) {
    let newIndex = 0;
    if (isRight) {
      for (
        ;
        newIndex < props.children.length - 1 &&
        scrollContentRef.current.children[newIndex + 1].offsetLeft -
          pastDistanceRef.current <
          scrollContentRef.current.clientWidth + 3;
        newIndex++
      ) {}
    } else {
      for (
        ;
        pastDistanceRef.current -
          scrollContentRef.current.children[newIndex].offsetLeft >
        scrollContentRef.current.clientWidth;
        newIndex++
      ) {}
    }
    pastDistanceRef.current =
      scrollContentRef.current.children[newIndex].offsetLeft;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setShowRigh(totalDistanceRef.current > newElOffsetLeft);
    setShowLeft(pastDistanceRef.current > 0);
  }

  // function leftClickHandle(isRight) {
  //   let newIndex = 0;
  //   for (
  //     ;
  //     pastDistanceRef.current -
  //       scrollContentRef.current.children[newIndex].offsetLeft >
  //     scrollContentRef.current.clientWidth;
  //     newIndex++
  //   ) {
  //     console.log(newIndex);
  //   }
  //   pastDistanceRef.current =
  //     scrollContentRef.current.children[newIndex].offsetLeft;
  //   const newEl = scrollContentRef.current.children[newIndex];
  //   const newElOffsetLeft = newEl.offsetLeft;
  //   // console.log(newEl.offsetLeft);
  //   scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
  //   // console.log(scrollContentRef.current.style);
  //   // setPosIndex(newIndex);
  //   setShowLeft(pastDistanceRef.current > 0);
  //   setShowRigh(totalDistanceRef.current > newElOffsetLeft);
  // }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

// ScrollView.propTypes = {};

export default ScrollView;
