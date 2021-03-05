import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    cart: [],
    serchValue: ''
  },
  mutations: {
    SET_PRODUCTS_TO_GOODS: (state, products) => {
      state.goods = products;
    },
    SET_PRODUCTS_TO_CART: (state, product) => {
      state.cart = product
    },
    SET_TOCART_PRODUCT: (state, products) => {
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map((item) => {
          if (item.id === products.id) {
            isProductExist = true;
            item.quantity++
          }
        })
        if (!isProductExist) {
          state.cart.push(products);
        }
      } else {
        state.cart.push(products);
      }
    },
    DELET_ITEM_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    SET_SERACH_VALUE_TO_VUEX: (state, value) => {
      state.serchValue = value;
    },
    QUANTITY_CART_PLUS: (state, value) => {
      state.cart[value.index].quantity = value.value;
    },
    CLEAR_CART_FULL: (state, clear) => {
      if (clear.clear) {
        state.cart = [];
      }
    }
  },
  actions: {
    GET_GOODS_FROM_API({
      commit
    }) {
      return axios("http://localhost:3000/goods-list", {
          method: "GET"
        })
        .then((products) => {
          commit("SET_PRODUCTS_TO_GOODS", products.data)
          return products
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
    GET_GOODS_FROM_API_CART({
      commit
    }) {
      return axios("http://localhost:3000/cart-list", {
          method: "GET"
        })
        .then((products) => {
          commit("SET_PRODUCTS_TO_CART", products.data)
          return products
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    },
    ADD_TO_CART({
      commit
    }, products) {
      commit('SET_TOCART_PRODUCT', products);
      fetch("http://localhost:3000/goods-list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(products),
        })
        .then((response) => response.json())
    },
    DELET_FROM_CART({
      commit
    }, index) {
      commit('DELET_ITEM_FROM_CART', index);

      fetch("http://localhost:3000/cart-list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(index),
        })
        .then((response) => response.json())
    },
    QUANTITY_PLUS: ({
      commit
    }, value) => {
      commit('QUANTITY_CART_PLUS', value);

      fetch("http://localhost:3000/quantity-plus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        })
        .then((response) => response.json())
    },
    GET_SERACH_VALUE_TO_VUEX({
      commit
    }, value) {
      commit("SET_SERACH_VALUE_TO_VUEX", value)
    },
    CLEAR_CART({
      commit
    }, clear) {
      commit("CLEAR_CART_FULL", clear);

      fetch("http://localhost:3000/clear", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clear),
        })
        .then((response) => response.json());


    }
  },
  modules: {},
  getters: {
    PRODUCTS: state => {
      return state.goods;
    },
    CART: state => {
      return state.cart;
    },
    SEARCH_VALUE: state => {
      return state.serchValue;
    }


  }
});