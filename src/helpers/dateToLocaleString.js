"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Movie Api
------------------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
    return dateData.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
}