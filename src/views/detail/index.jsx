import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  });
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
