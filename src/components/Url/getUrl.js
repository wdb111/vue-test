export function getUrlKey(name, url) {
  // 解码url并匹配相应值
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null

}
