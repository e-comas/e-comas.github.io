export default function yaml(str: TemplateStringsArray, ...args: any[]) {
  let ret = "---\n" + str[0].trimStart();
  for (let i = 1; i < arguments.length; i++) {
    ret += arguments[i] + str[i];
  }
  return ret.trimEnd() + `\n---\n`;
}
