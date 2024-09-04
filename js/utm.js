/**
 * While making change in this file
 * please make sure such code is in App pages as well as on blog pages.
 * So make similar changes there as well to make sure we should be able to track UTM
 * params correctly everywhere.
 */

const getUrlVars = function () {
  var vars = {},
    hash = [];
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    const str = hashes[i];
    let index = str.indexOf("=");
    hash[0] = str.slice(0, index);
    hash[1] = str.slice(index + 1);
    vars[hash[0]] = decodeURIComponent(hash[1]);
  }
  return vars;
};
const hasQueryParams = function () {
  return window.location.href.split("?")[1] ? true : false;
};
const isEmpty = function (obj) {
  for (var key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const getSourceUrlWithParams = function () {
  return window.location.href;
};
const getPageSlug = function () {
  var page = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .replace(/\/$/, "")
    .split("/")
    .slice(-1)[0];
  if (page !== window.location.host) {
    return page;
  }
  return "homepage";
};
const handleUtmParams = function () {
  if (hasQueryParams() && !isEmpty(getUrlVars())) {
    addUtmParamsInLocalstorage(getUrlVars());
    // addQueryStringOnAllLinks(
    //   window.location.href.slice(window.location.href.indexOf("?") + 1)
    // );
  } else {
    addUtmParamsInLocalstorage({
      utm_source: "landing-page",
      utm_content: getPageSlug(),
    });
    // addQueryStringOnAllLinks(
    //   "utm_source=landing-page&utm_content=" + getPageSlug()
    // );
  }
};

const addUtmParamsInLocalstorage = function (params) {
  const sourceParams = localStorage.getItem("sourceParams");
  let p;
  const newParams = Object.assign(
    {
      completeUrl: getSourceUrlWithParams(),
      date: new Date().toISOString().slice(0, 10),
    },
    params,
  );
  if (sourceParams) {
    let oldParams = JSON.parse(window.atob(sourceParams));
    const keys = Object.keys(oldParams);
    if (
      JSON.stringify(oldParams[keys[keys.length - 1]]) ==
      JSON.stringify(newParams)
    )
      return;
    let utmKey = (Number(keys[keys.length - 1]) || 0) + 1;
    p = Object.assign(oldParams, { [utmKey]: newParams });
  } else {
    p = { 1: newParams };
  }
  if (Object.keys(p).length > 0) {
    localStorage.setItem("sourceParams", window.btoa(JSON.stringify(p)));
  }
};

// const addQueryStringOnAllLinks = function (queryString) {
//   document.querySelectorAll("a").forEach((element) => {
//     var url = element.getAttribute("href");
//     if (
//       url &&
//       url.indexOf("#") == -1 &&
//       !url.includes("tel:") &&
//       !url.includes("mailto:")
//     ) {
//       if (url.indexOf("?") == -1) {
//         url += "?" + queryString;
//       } else {
//         url += "&" + queryString;
//       }
//       element.setAttribute("href", url);
//     }
//   });
// };

export default handleUtmParams;
