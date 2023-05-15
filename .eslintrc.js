/*
 * @Author: Jesslynwong jiaxin.wang@coscene.io
 * @Date: 2023-05-07 17:53:12
 * @LastEditors: Jesslynwong jiaxin.wang@coscene.io
 * @LastEditTime: 2023-05-15 09:17:57
 * @FilePath: /Sparrow-repo/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': "off",
        "no-shadow":'off'
    },
};
