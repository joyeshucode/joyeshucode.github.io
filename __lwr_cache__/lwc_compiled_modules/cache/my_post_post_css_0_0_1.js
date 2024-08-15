function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "header" + shadowSelector + " {background: #333;color: #fff;padding: 1rem;}nav" + shadowSelector + " a" + shadowSelector + " {color: #fff;margin: 0 1rem;}main" + shadowSelector + " {padding: 1rem;}.markdown-body" + shadowSelector + " {box-sizing: border-box;min-width: 200px;max-width: 980px;margin: 0 auto;padding: 45px;}";
  /*LWC compiler v7.2.1*/
}
export default [stylesheet];