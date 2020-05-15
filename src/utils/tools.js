const dpr = Number(document.documentElement.getAttribute("data-dpr"));
const setSize = 12 * dpr
const pickerSize = 44 * dpr

const checkData = (orginObj, testObj, that) => {
  for (var item in orginObj) {
    if (!(testObj[item].replace(/\s*/g, ""))) {

      that.$toast({
        message: orginObj[item] + '为必填',
        className: "toastStyle",
      });
      return false;
    }
  }
  return true;
}

export {
  setSize,
  pickerSize,
  checkData
}

