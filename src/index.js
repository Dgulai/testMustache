import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';
window.GL_TemplateEngine = {
  render(temp, data) {
    // 调用 parseTemplateToTokens 函数, 让模板字符串能够变成tokens数组
    const tokens = parseTemplateToTokens(temp)
    console.log(tokens);
    // 调用 renderTemplate， 让tokens数组转回 dom 字符串
    return renderTemplate(tokens,data)
    // console.log(tokens);
  }
}