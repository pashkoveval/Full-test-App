<template>
  <div class="baner3">
    <div class="mask df"></div>
    <div class="baner3--block center df jcsb">
      <div class="left">
        <img src="../assets/userPic.png" alt="" />
        <blockquote>
          <p>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <span> a pulvinar purus condimentum</span>“
          </p>
        </blockquote>
      </div>
      <div class="right dfc">
        <form action="#">
          <h2>SUBSCRIBE</h2>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
          <div>
            <input type="email" />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Baner-Sub"
};
</script>

<style lang="scss">
.baner3 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 448px;
  position: relative;
  background: url(../assets/banerSee.png) no-repeat center;
  background-size: cover;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba($color: #f4f4f4, $alpha: 0.7);
  }
  &--block {
    position: relative;
    z-index: 2;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    .left {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      text-align: center;
      max-width: 359px;
      blockquote {
        margin-top: 30px;
        span {
          font-style: italic;
        }
      }
    }
    .right {
      max-width: 557px;
      text-align: center;
      form {
        color: #222224;

        h2 {
          font-weight: bold;
          font-size: 24px;
        }
        p {
          margin-top: 10px;
          font-size: 18px;
          margin-bottom: 32px;
        }

        div {
          @media (max-width: 425px) {
            display: flex;
            justify-content: center;
            input {
              max-width: 200px;
            }
          }
        }
        input {
          background: #e1e1e1;
          width: 255px;
          height: 49px;
          border-radius: 25px 0 0 25px;
          padding: 15px;
        }
        button {
          background: $pink;
          border-radius: 0 25px 25px 0;
          color: #fff;
          width: 100px;
          height: 49px;
          margin-left: -10px;
        }
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
      grid-gap: 50px;
    }
  }
}
</style>
