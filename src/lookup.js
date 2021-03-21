/**
 * 可以在 data 对象中, 用连续点符号的 keyname 属性 如: keyname 是 : a.b.c
 * @param {*} data  数据对象 
 * @param {string} keyName key值
 */
export default function lookup(data,keyName) {
  // console.log(data,keyName);
  let keys = keyName.split('.');
  if(keyName === '.') return data[keyName]
  // let temp = data;
  // for (let i = 0; i < keys.length; i++) {
  //   temp = temp[keys[i]]
  // }
  // console.log(temp);
  return  keys.reduce(function(pre,next){
    return pre[next] 
  },data)
  
}