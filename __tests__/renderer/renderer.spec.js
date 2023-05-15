/*
 * @Author: Jesslynwong jiaxin.wang@coscene.io
 * @Date: 2023-05-14 11:11:51
 * @LastEditors: Jesslynwong jiaxin.wang@coscene.io
 * @LastEditTime: 2023-05-14 11:33:00
 * @FilePath: /Sparrow-repo/__tests__/renderer/renderer.spec.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRenderer } from '../../src/renderer';
import { createDiv, mount } from '../utils';

describe('createRenderer', () => {
  test('createContext(width, height) returns expected context.', () => {
    const renderer = createRenderer(600, 400);
    const node = renderer.node();
    const group = renderer.group();

    expect(node.tagName).toBe('svg');
    expect(node.getAttribute('width')).toBe('600');
    expect(node.getAttribute('height')).toBe('400');
    expect(node.getAttribute('viewBox')).toBe('0 0 600 400');

    expect(group.tagName).toBe('g');
    expect(group.parentNode).toBe(node);

    mount(createDiv(), node);
  });
});
