import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  // tabNames.push("8");
  // tabNames.push("9");
  // tabNames.push("10");
  // tabNames.push("11");
  // tabNames.push("12");
  // tabNames.push("13");
  // tabNames.push("14");
  // tabNames.push("15");
  // tabNames.push(
  //   "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
  // );

  function itemClickHandle(index, item) {
    // console.log(index);
    setCurrentIndex(index);
    tabClick(index, item);
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames("item", { active: currentIndex === index })}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
