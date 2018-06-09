import axios from 'axios';

const myaxios = {};
myaxios.install = function (Vue) {
  const instance = axios.create({
    baseURL: 'http://localhost:8888/api/private/v1/',
    timeout: 1000
  });
  // 设置VUe实例的属性
  Vue.prototype.$http = instance;
};
export default myaxios;
