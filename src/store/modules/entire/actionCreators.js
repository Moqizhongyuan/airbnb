import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = (currentPage = 0) => {
  // 新的函数
  return (dispatch, getState) => {
    // 1.根据页码获取最新的数据
    // const currentPage = getState().entire.currentPage;
    // console.log(currentPage);
    dispatch(changeIsLoadingAction(true));
    getEntireRoomList(currentPage * 20).then((res) => {
      // 2.获取到最新的数据，保存到redux的store中
      // console.log(res);
      dispatch(changeIsLoadingAction(false));
      const roomList = res.list;
      const totalCount = res.totalCount;
      dispatch(changeCurrentPageAction(currentPage));
      dispatch(changeRoomListAction(roomList));
      dispatch(changeTotalCountAction(totalCount));
    });
  };
};
