/**
 * 折叠 tokens, 将 # 和 / 之间的tokens整合起来,称为下标为3的元素
 */

export default function nestTokens(tokens) {
  const nestedTokens = [];
  // 栈结构, 栈顶(靠近端口的,最新进入的) 的tokens数组中当前操作的这个tokens小数组
  const sections = [];
  // 收集器, 天生指向 nestedTokens结果数组,引用类型值, 所以指向同一个数组
  // 收集器的指向会变化, 当遇见 # 号的时候, 收集器会指向这个token下标为2的项
  let collector = nestedTokens;
  console.log(tokens);
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch(token[0]){
      case '#': 
        // 收集器中放入 token
        collector.push(token)
        // 入栈
        sections.push(token)
        // 收集器要换人了, 给token添加下标为2的项 并让收集器指向它
        collector = token[2] = []
        break;
      case '/':
        // 出栈
        let section_pop = sections.pop();
        //改变收集器为栈结构队尾(队尾是栈顶) 那项下标为2的数组
        // 出栈的时候将收集器指向上一个栈中的第二项 如果栈为空则指回原数组
        collector = sections.length>0? sections[sections.length-1][2]:nestedTokens;       
        break;
      default: 
        collector.push(token)
    }
    
  }
  return nestedTokens;
}