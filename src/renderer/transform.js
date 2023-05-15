/*
 * @Author: Jesslynwong jiaxin.wang@coscene.io
 * @Date: 2023-05-14 11:34:46
 * @LastEditors: Jesslynwong jiaxin.wang@coscene.io
 * @LastEditTime: 2023-05-15 10:24:55
 * @FilePath: /Sparrow-repo/src/renderer/transform.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { applyTransform, createSVGElement, mount } from './utils';

function transform(type, context, ...params) {
  // type 是希望的变换种类：scale，translate，rotate 等
  const { group } = context;
  applyTransform(group, `${type}(${params.join(', ')})`);
}

export function translate(context, tx, ty) {
  transform('translate', context, tx, ty);
}

export function rotate(context, theta) {
  transform('rotate', context, theta);
}

export function scale(context, sx, sy) {
  transform('scale', context, sx, sy);
}

// 核心就是控制当前变换影响的元素范围。基于 SVG 通过 g 元素来指定变换的特点，我们只用更新当前挂载节点，使得当前变换只会影响当前挂载节点下面的元素即可。
// g上设置变换的，所以在g下的svg元素都受此变换影响，因此 renderer重新挂载一个g划分范围。把新g挂载在旧g上是方便 restore
export function save(context) {
  const { group } = context;
  const newGroup = createSVGElement('g');
  mount(group, newGroup);
  context.group = newGroup;
}

export function restore(context) {
  const { group } = context;
  const { parentNode } = group;
  context.group = parentNode;
}
