import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeLongfor from "./c-cpns/home-longfor";
import { isEmptyO } from "@/utils";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodpriceInfo,
      highScoreInfo: state.home.highscoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {/* <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms
            roomList={discountInfo?.dest_list?.[name]}
            itemWidth="33.3333%"
          />
        </div> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
