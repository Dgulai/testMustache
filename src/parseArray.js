import renderTemplate from './renderTemplate';
import lookup  from './lookup';
/**
 * 处理数组, 结合 renderTemplate实现递归
 * 接收 token  不是tokens (就是一个简单的一维数组)
 * 在此处递归 renderTemplate
 * 
 */

export default function parseArray(token,data) {
  // console.log(token,data);
  let v = lookup(data,token[1]);
  let resStr = '';
  // 遍历 v 这里先只处理 v 一定是数组的情况
  for (let i = 0; i < v.length; i++) {
    // 这里要补一个 . 的识别  
    resStr += renderTemplate(token[2],{
      '.': v[i],
      ...v[i]
    })
    
  }
  return resStr
}