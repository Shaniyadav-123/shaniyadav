const handleUtmData = function () {
  addUtmParamsInLocalstorage(getUrlVars());
};

function addUtmParamsInLocalstorage(urlParams) {
  const sourceParams = localStorage.getItem("sourceParams");
  let params;
  const newParams = Object.assign(
    {
      completeUrl: getSourceUrlWithParams(),
      date: new Date().toISOString().slice(0, 10),
    },
    urlParams,
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
    params = Object.assign(oldParams, { [utmKey]: newParams });
  } else {
    params = { 1: newParams };
  }
  if (Object.keys(params).length > 0) {
    localStorage.setItem("sourceParams", window.btoa(JSON.stringify(params)));
  }
}

function getPageSlug() {
  var page = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .replace(/\/$/, "")
    .split("/")
    .slice(-1)[0];
  if (page !== window.location.host) {
    return page;
  }
  return "life-insurance";
}

const getSourceUrlWithParams = function () {
  return window.location.href;
};

const isEmpty = function (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const hasQueryParams = function () {
  return window.location.href.split("?")[1] ? true : false;
};

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

const localStoreKey = () => {
  return currentFlow() === "mortgage" ? "mi_quoteParams" : "quoteParams";
};

const coverageTermsArray = () => {
  if (currentFlow() === "mortgage") return ["10", "15", "20", "25", "30"];
  else return ["10", "15", "20", "25", "30", "35", "40", "A"];
};
const failureRequestFunc = (error) => {
  // eslint-disable-next-line no-undef
  localStorage.clear();
  top.window.location.reload();
  return Promise.reject(error);
};

const successRequestFunc = (request) => {
  const pa = JSON.parse(localStorage.getItem("pa"));
  const token = pa ? pa.auth.auth_token : "";
  if (token) request.headers.common["Authorization-Token"] = token;
  request.headers.common["Content-Type"] = "application/json";
  return request;
};
const makeACall = async (url, params, method) => {
  try {
    axios.interceptors.request.use(successRequestFunc, failureRequestFunc);
    const response = await axios[method](url, params);
    return response;
  } catch (errors) {
    localStorage.clear();
    top.window.location.reload();
    return Promise.reject(error);
  }
};

const setHealthProfileDetails = (form, healthProfileId) => {
  if (!healthProfileId) return;
  makeACall(`/api/v1/health_profiles/${healthProfileId}`, "", "get").then(
    (response) => {
      if (response && response.data) {
        let health_profile = response.data;
        form.elements.gender.value = health_profile.gender;
        form.elements.dateOfBirth.value = this.dateInDDMMYYYY(
          new Date(health_profile.date_of_birth),
        );
        form.elements.smokingStatus.value = health_profile.smoker
          ? "true"
          : "false";
        form.elements.postalCode.value = health_profile.postal_code;
        form.elements.partnerCoverage.value =
          health_profile.requested_quote_for_spouse ? "true" : "false";
        const quoteParams = JSON.parse(localStorage.getItem(localStoreKey()));
        if (quoteParams && quoteParams.coverage_term) {
          form.elements.coverageTerm.value = quoteParams.coverage_term;
          const indexOfTerm = coverageTermsArray().indexOf(
            `${quoteParams.coverage_term}`,
          );
          const termsDiv = document.querySelectorAll("div.select-items > div")[
            indexOfTerm
          ];
          if (termsDiv) {
            termsDiv.click();
          }
        }
      }
    },
  );
};
const currentFlow = () => {
  const currentLocation = top.window.location.href;
  if (currentLocation.indexOf("mortgage") != -1) {
    return "mortgage";
  } else if (currentLocation.indexOf("life") != -1) {
    return "life";
  } else return "life";
};

function getLifePath(checkedIntent, quoteForPartner) {
  let nextPath =
    checkedIntent.length > 0 ? "/app/quote/intro/" : "/app/quote/intent/";
  return quoteForPartner === "true"
    ? "/app/quote/partner-basic-info/"
    : nextPath;
}

function getOtherFlowPath(checkedIntent, quoteForPartner) {
  let nextPath =
    checkedIntent.length > 0
      ? `/app/${currentFlow()}/quote/intro/`
      : `/app/${currentFlow()}/quote/intent/`;
  return quoteForPartner === "true"
    ? `/app/${currentFlow()}/quote/partner-basic-info/`
    : nextPath;
}

const redirectUrl = () => {
  let checkedIntent = localStorage.getItem("checked_intent") || [];
  let lifeQuoteForPartner =
    localStorage.getItem("life_me_and_my_partner") || "false";
  let mortgageQuoteForPartner =
    localStorage.getItem("mortgage_me_and_my_partner") || "false";

  let lifeFlowPath = getLifePath(checkedIntent, lifeQuoteForPartner);
  let otherFlowPath = getOtherFlowPath(checkedIntent, mortgageQuoteForPartner);

  return currentFlow() === "life" ? lifeFlowPath : otherFlowPath;
};
(() => {
  const form = document.getElementById("quote-form");
  if (form) {
    let healthProfileId = localStorage.getItem(
      currentFlow() === "mortgage"
        ? "mi_health_profile_id"
        : "health_profile_id",
    );
    // fill up the form
    if (
      healthProfileId &&
      healthProfileId !== undefined &&
      healthProfileId !== null &&
      healthProfileId !== "undefined"
    )
      setHealthProfileDetails(form, healthProfileId);
    form.addEventListener("submit", (e) => {
      const formData = new FormData(form);
      healthProfile = {
        insurance_type: currentFlow(),
        gender: formData.get("gender"),
        smoker: formData.get("smokingStatus") == "true",
        date_of_birth: formData.get("dateOfBirth"),
        postal_code: formData.get("postalCode"),
        resident_canadian: true,
        product_type: currentFlow(),
        requested_quote_for_spouse: formData.get("partnerCoverage") == "true",
      };
      let url =
        healthProfileId && healthProfileId !== "undefined"
          ? `/api/v1/health_profiles/${healthProfileId}`
          : `/api/v1/health_profiles`;
      let method =
        healthProfileId && healthProfileId !== "undefined" ? "put" : "post";
      makeACall(url, { health_profile: healthProfile, from: "quick" }, method)
        .then((response) => {
          if (response.data.uuid) {
            if (response.headers.authorization) {
              localStorage.setItem(
                "pa",
                JSON.stringify({
                  auth: { auth_token: response.headers.authorization },
                }),
              );
            }
            const healthProfileIdLabel =
              currentFlow() === "mortgage"
                ? "mi_health_profile_id"
                : "health_profile_id";
            const localstoreKey = localStoreKey();
            localStorage.setItem(healthProfileIdLabel, response.data.uuid);
            makeACall(
              `/api/v1/lookup/supported_province?code=${healthProfile.postal_code}`,
              null,
              "get",
            ).then((response) => {
              localStorage.setItem("validProvince", response.data.supported);
              localStorage.setItem(
                "age",
                ageNearestBirthDate(healthProfile.date_of_birth),
              );
              localStorage.setItem("postal_code", healthProfile.postal_code);
              let quoteParams =
                JSON.parse(localStorage.getItem(localstoreKey)) || {};
              quoteParams["coverage_term"] = formData.get("coverageTerm");
              localStorage.setItem(localstoreKey, JSON.stringify(quoteParams));
              localStorage.removeItem("quote_id");
              if (formData.get("partnerCoverage") === "true") {
                localStorage.setItem(
                  `${currentFlow()}_me_and_my_partner`,
                  true,
                );
                localStorage.setItem("requested_quote_for_partner", true);
              } else {
                localStorage.setItem(
                  `${currentFlow()}_me_and_my_partner`,
                  false,
                );
                localStorage.setItem("requested_quote_for_partner", false);
              }
              // adding a session storage for why-pa page to decide where to redirect
              sessionStorage.setItem("why-pa-source", "quote_widget");
              handleUtmData();
              top.window.location.href = `${
                window.location.origin
              }${redirectUrl()}`;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
      e.preventDefault();
    });
  }
})();
