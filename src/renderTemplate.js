import lookup from './lookup';
import parseArray from './parseArray';
/**
 * 把tokens 转换成 dom 字符串
 * @param {*} tokens 
 * @param {*} data 
 */
export default function renderTemplate(tokens, data) {
  // console.log(tokens,data);
  let resultStr = '';
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if(token[0] === 'text') {
      resultStr += token[1]
    }else if(token[0] === 'name'){
      resultStr += lookup(data,token[1])
    }else if(token[0] === '#'){
      resultStr += parseArray(token,data)
    }
    
  }
  return resultStr
}