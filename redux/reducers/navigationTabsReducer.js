import {
    NAVIGATION_TABS_ADD_ITEM,
    NAVIGATION_TABS_REMOVE_ITEM,
    NAVIGATION_TABS_SEARCH_ITEM
  } from "../types";
  
  const initialState = {
    items: [
      // {
      //   label: "Dashboard",
      //   children: "",
      //   key: "/dashboard",
      //   query: {},
      //   closable: false,
      // },
    ],
    tabsSearch: []
  };
  
  const navigationTabsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case NAVIGATION_TABS_ADD_ITEM: {
        return { ...state, items: payload };
      }
      case NAVIGATION_TABS_REMOVE_ITEM: {
        return { ...state, items: payload };
      }
      case NAVIGATION_TABS_SEARCH_ITEM:
        return { ...state, tabsSearch: payload };
      default:
        return state;
    }
  };
  
  export default navigationTabsReducer;
  