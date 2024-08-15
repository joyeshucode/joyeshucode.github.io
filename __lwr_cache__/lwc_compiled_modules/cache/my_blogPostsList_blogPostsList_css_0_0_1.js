function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".post-title-section" + shadowSelector + " {padding: 1rem 0rem;}.posts" + shadowSelector + " {height: 100vh;}.posts" + shadowSelector + " h1" + shadowSelector + " {margin: 1.25rem 1.25rem 1.5rem 0rem;border-bottom: black;border-bottom: 0.25rem solid black;}";
  /*LWC compiler v7.2.1*/
}
export default [stylesheet];