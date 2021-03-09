<template>
  <div class="baner-black">
    <div class="baner-black-block">
      <div class="baner-black-item">
        <img src="../assets/car.png" alt="" />
        <h2>Free Delivery</h2>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="baner-black-item">
        <img src="../assets/proc.png" alt="" />
        <h2>Sales & discounts</h2>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="baner-black-item">
        <img src="../assets/crow.png" alt="" />
        <h2>Quality assurance</h2>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baner-black"
};
</script>

<style lang="scss">
.baner-black {
  min-height: 341px;
  background: #222224;
  &-block {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 30px;
    justify-content: space-evenly;
    padding: 48px 0;
    max-width: 1140px;
    margin: 0 auto;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  &-item {
    text-align: center;
    max-width: 360px;
    color: #fbfbfb;

    h2 {
      font-size: 20px;
      margin: 28px 0 18px 0;
    }
  }
}
</style>
