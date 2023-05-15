/*
 * @Author: Jesslynwong jiaxin.wang@coscene.io
 * @Date: 2023-05-07 17:53:12
 * @LastEditors: Jesslynwong jiaxin.wang@coscene.io
 * @LastEditTime: 2023-05-14 11:15:40
 * @FilePath: /Sparrow-repo/__tests__/utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node, attributes) {
  // eslint-disable-next-line no-return-assign, no-param-reassign, no-sequences
  return attributes.reduce((total, cur) => (total[cur] = node.getAttribute(cur), total), {});
}
