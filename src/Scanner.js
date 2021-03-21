/**
 * 扫描器
 */
export default class Scanner {
  constructor(tempStr) {
    this.tempStr = tempStr;
    this.pos = 0; //初始化指针
    this.tail = tempStr;// 尾巴 扫描完之后剩余的字符串
  }
  scan(tag) {  // 走过指定内容 无返回值
    if(this.tail.indexOf(tag) == 0){
      // tag 有多长, 就让指针后移多少位
      this.pos += tag.length
      // 尾巴也要改变 把 tag去掉
      this.tail = this.tempStr.substring(this.pos)
    }
  }
  // scanUntil 类似于一个指针, 会对模板进行扫描 直到遇见指定内容, 返回扫描过的字符串
  /**
   * '我买了一个{{thing}},好{{mood}}' 指针会从0开始扫描,一直扫到{{之前停止,  然后利用scan跳过{{ 继续在用 scanUntil扫描剩余的内容
   */
  scanUntil(stopTag) {
    // 记录最初的指针
    const pos_backup = this.pos;
    // 当文档的开头不是 stopTag 的时候, 说明还没有扫描到 stopTag
    while(!this.eos() && this.tail.indexOf(stopTag) != 0 ) {
      // 每次扫描 指针往右加1 然后排除扫描过的字符 设置尾巴
      this.pos++
      this.tail = this.tempStr.substring(this.pos)
    }
    return this.tempStr.substring(pos_backup,this.pos)
  }
  // 检查指针是否已经到头, 返回布尔值
  eos() {
    return this.pos >= this.tempStr.length;
  }
}