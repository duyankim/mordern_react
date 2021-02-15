import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "Content 1 from Section 1"
  },
  {
    tab: "Section 2",
    content: "Content 2 from Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export { content, useTabs };
