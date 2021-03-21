import parseTemplateToTokens from './parseTemplateToTokens';

window.GL_TemplateEngine = {
  render(temp, data) {
    // 调用 parseTemplateToTokens 函数, 让模板字符串能够变成tokens数组
    const tokens = parseTemplateToTokens(temp)
    console.log(tokens);
  }
}