import { getFullTime } from '@/utils/date'

function onConfirm (value) {
  this.form[this.config["value"]] = value
  this.thatParent.showPicker = false
}
function onCancel () {
  this.thatParent.showPicker = false
}



function getCheckPerson (value) {
  this.form[this.config["value"]] = value[1];
  this.thatParent.showPicker = false
}


function getCheckTime (value) {
  this.form[this.config["value"]] = (getFullTime(value))
  this.thatParent.showPicker = false
}

function PeopleConfirm (value,B,C) {
console.log(value);
console.log(B);
console.log(C);
  this.thatParent.showPicker = false
}



export {
  onConfirm,
  onCancel,
  getCheckPerson,
  getCheckTime,
  PeopleConfirm
}