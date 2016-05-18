/**
 * Created by tianzx on 2016/5/18.
 */

'use strict'

let  buffer = new ArrayBuffer(10);
let dataview = new DataView(buffer);

dataview.setFloat32(2,18.9);
dataview.setInt32(6,2000);
dataview.setInt16(0,90);

//var int8Arr
let value = dataview.getFloat32(2);
console.log(value);