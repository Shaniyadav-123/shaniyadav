const elementIds = ["date-of-birth", "postal-code"];

dayjs.extend(window.dayjs_plugin_customParseFormat);

elementIds.forEach((elementId) => {
  const ele = document.getElementById(elementId);
  const errorEle = document.querySelector("#" + elementId + " + span.error");
  ele.addEventListener("blur", function (event) {
    if (elementId === "date-of-birth")
      return addDateRangeValidationRule(ele, errorEle);
    if (ele.validity.valid) {
      errorEle.textContent = "";
      errorEle.className = "error";
      ele.className = "widget-form-control widget-input";
    } else {
      showError(ele, errorEle);
    }
  });
  ele.addEventListener("focus", function (event) {
    ele.setCustomValidity("");
    errorEle.textContent = "";
    errorEle.className = "error";
    ele.className = "widget-form-control widget-input";
  });
  ele.addEventListener("click", function (event) {
    ele.focus();
  });
  ele.addEventListener(
    "invalid",
    (function () {
      return function (e) {
        if (elementId === "date-of-birth")
          showError(
            ele,
            errorEle,
            ele.nextElementSibling.textContent ||
              "Oops! We can only offer quotes for ages 18-75",
          );
        else showError(ele, errorEle);
        e.preventDefault();
      };
    })(),
    true,
  );
});
function showError(ele, errorEle, customMessage = null) {
  errorEle.textContent = "";
  errorEle.className = "error";
  ele.className = "widget-form-control widget-input";
  if (ele.validity.valueMissing || !ele.value) {
    errorEle.textContent = "Please fill this in";
  } else if (ele.validity.customError) {
    errorEle.textContent = customMessage;
  } else if (ele.validity.patternMismatch) {
    errorEle.textContent = "Please enter a valid postal code.";
  }
  errorEle.className = "error active";
  ele.className = "widget-form-control widget-input active-error";
}

function addDateRangeValidationRule(ele, errorEle) {
  const dob = dayjs(ele.value, "DD/MM/YYYY", true); // true flag enables the strict mode

  if (!dob.isValid()) {
    ele.setCustomValidity(
      "Oops! Looks like you entered your birthday incorrectly",
    );
    return showError(
      ele,
      errorEle,
      "Oops! Looks like you entered your birthday incorrectly",
    );
  }

  const _75YearsAgo = yearsAgo(75, 5, 30);
  const _18YearsAgo = yearsAgo(17, 6, 0);

  if (dob.isBefore(_75YearsAgo, "day") || dob.isAfter(_18YearsAgo, "day")) {
    ele.setCustomValidity("Oops! We can only offer quotes for ages 18-75");
    return showError(
      ele,
      errorEle,
      "Oops! We can only offer quotes for ages 18-75",
    );
  }

  ele.setCustomValidity("");
  errorEle.textContent = "";
  errorEle.className = "error";
  ele.className = "widget-form-control widget-input";
}

function yearsAgo(year, month, days) {
  let date = dayjs();

  if (year) date = date.subtract(year, "year");
  if (month) date = date.subtract(month, "month");
  if (days) date = date.subtract(days, "day");

  return date;
}

function dateInDDMMYYYY(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1; // January is 0
  let yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return dd + "/" + mm + "/" + yyyy;
}
const mmDDYYYYToDDMMYYYY = (date) => {
  var splitDate = date.split("/");
  return new Date(splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2]);
};
const ageNearestBirthDate = (dateOfBirth) => {
  var dob = mmDDYYYYToDDMMYYYY(dateOfBirth);
  var now = new Date();

  var dobYear = dob.getFullYear();
  var dobMonth = dob.getMonth();
  var dobDate = dob.getDate();

  var currentYear = now.getFullYear();
  var currentMonth = now.getMonth();
  var currentDate = now.getDate();

  var yearAge = currentYear - dobYear;

  var monthAge = 0;
  if (currentMonth >= dobMonth) monthAge = currentMonth - dobMonth;
  else {
    yearAge--;
    monthAge = 12 + currentMonth - dobMonth;
  }
  if (currentDate < dobDate) {
    monthAge--;
    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  var ageNearestBirthday = yearAge;
  if (monthAge >= 6) {
    ageNearestBirthday += 1;
  }
  return ageNearestBirthday;
};
const postalCode = document.getElementById("postal-code");
const dateOfBirth = document.getElementById("date-of-birth");
Inputmask.extendDefinitions({
  A: {
    casing: "upper", //auto uppercasing
  },
});
var im = new Inputmask({
  showMaskOnHover: false,
  showMaskOnFocus: false,
});
im.mask(postalCode);
im.mask(dateOfBirth);
