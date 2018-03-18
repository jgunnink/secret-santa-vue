import Vue from "vue";

export const querySelectorForVM = (vm, selector) => {
  return vm.$el.querySelector(selector);
};

export const querySelectorAllForVM = (vm, selector) => {
  return vm.$el.querySelectorAll(selector);
};

export const createMountedVM = (component, args) => {
  const Constructor = Vue.extend(component);
  const vm = new Constructor(args).$mount();
  return vm;
};

export const nextTick = async () => {
  return await new Promise(resolve => {
    Vue.nextTick(() => {
      resolve();
    });
  });
};
