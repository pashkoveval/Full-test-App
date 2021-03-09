<template>
  <div class="cart">
    <CartList />
    <div class="space"></div>
    <BanerSubscr />
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
import BanerSubscr from "../components/BanerSubscr.vue";

export default {
  name: "Cart",
  components: {
    CartList,
    BanerSubscr
  },
  props: {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.cart {
  margin-top: 50px;
}
.space {
  height: 128px;
}
</style>
