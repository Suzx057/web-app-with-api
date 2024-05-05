import {
    NAVIGATION_TABS_ADD_ITEM,
    NAVIGATION_TABS_REMOVE_ITEM,
    NAVIGATION_TABS_SEARCH_ITEM
  } from "../types";
  
  export const addTab = (payload = {}) => ({
    type: NAVIGATION_TABS_ADD_ITEM,
    payload,
  });
  
  export const removeTab = (payload = "") => ({
    type: NAVIGATION_TABS_REMOVE_ITEM,
    payload,
  });
  
  export const setMenuTabSearch = (payload = []) => ({
    type: NAVIGATION_TABS_SEARCH_ITEM,
    payload
  })