import Scanner from './Scanner';
import nestTokens from './nestTokens';
/**
 * 将模板字符串解析为 tokens 数组
 * @returns tokens array 
 */
export default function parseTemplateToTokens(templateStr) {
  const tokens = [];
  // 创建扫描器
  const scanner = new Scanner(templateStr)
  // // 当指针不等于 模板的长度的时候 需要一直扫描
  let words;
  // 扫描器开始工作
  while (!scanner.eos()) {
    // 收集开始标记 {{ 之前的文字
    words = scanner.scanUntil('{{');
    if (words != '') {
      // 判断空格是标签内的还是文字中的
      let _words = ''
      let isInTag = false;
      for (let i = 0; i < words.length; i++) {
        if(words[i] === '<'){
          isInTag = true
        }else if(words[i] === '>'){
          isInTag = false
        }
        if(!/\s/.test(words[i])){
          // console.log(words[i]);
          _words += words[i]
        }else  {
          if(isInTag){
            _words += words[i]
          }
          
        }
        
      }
      tokens.push(['text', _words])
    }

    // 跳过标记 {{
    scanner.scan('{{')

    // 收集开始标记 {{ 之前的文字
    words = scanner.scanUntil('}}');
    if (words != '') {
      // 这里的 words 为双大括号内的值 判断一下首字符
      if(words[0] === '#'){
        tokens.push(['#', words.substring(1)])
      }else if(words[0] === '/'){
        tokens.push(['/', words.substring(1)])
      }else{
        tokens.push(['name', words])
      }
      
    }
    // 跳过标记 }}
    scanner.scan('}}')

  }
  // 最终返回 折叠收集后的tokens
  return nestTokens(tokens)
}