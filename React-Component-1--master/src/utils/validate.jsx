const REGEX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

const validate = (rules, form) => {
  const errorObject = {};
  for (const ruleKey in rules) {
    for (const rule of rules[ruleKey]) {
      if (rule.required) {
        if (!form[ruleKey]) {
          errorObject[ruleKey] = rule.message || "Vui lòng nhập";
          break;
        }
      }
      if (rule.checkType) {
        if (isNaN(Number(form[ruleKey]))) {
          errorObject[ruleKey] = rule.message;
          break;
        }
      }
      if (rule.checkLength) {
        if (form[ruleKey].length < 5) {
          errorObject[ruleKey] = rule.message;
        }
      }
      if (rule.regex instanceof RegExp) {
        if (!rule.regex.test(form[ruleKey])) {
          errorObject[ruleKey] = rule.message || "Sai định dạng";
        }
      } else if (rule.regex in REGEX) {
        if (!REGEX[rule.regex].test(form[ruleKey])) {
          errorObject[ruleKey] = rule.message || "Sai định dạng";
        }
      }
    }
  }

  return errorObject;
};

export const requireRule = (messageError) => {
  return {
    required: true,
    message: messageError,
  };
};

export const checkTypeRule = (messageError) => {
  return {
    checkType: true,
    message: messageError,
  };
};

export const checkLengthRule = (messageError) => {
  return {
    checkLength: true,
    message: messageError,
  };
};

export const regexRule = (regex, messageError) => {
  return {
    regex: regex,
    message: messageError,
  };
};

export default validate;
