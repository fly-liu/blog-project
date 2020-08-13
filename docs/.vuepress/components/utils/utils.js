export function getCount(arr) {
  var obj = {},
      k, arr1 = [];
  for(var i = 0, len = arr.length; i < len; i++) {
      k = arr[i];
      if(obj[k])
          obj[k]++;
      else
          obj[k] = 1;
  }
  
  //保存结果{el-'元素'，count-出现次数}
  for(var o in obj) {
    var rgb='rgba('+Math.floor(Math.random()*255)+',' 
      +Math.floor(Math.random()*255)+','  
      +Math.floor(Math.random()*255)+',.8)';

    arr1.push({
        el: o,
        count: obj[o],
        color: rgb
    });
  }
  
  return arr1;
}

