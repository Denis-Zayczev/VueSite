<template>
  <footer class="footer footer_bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="footer__logo">
            <img
              src="../assets/images/footer/logo.png"
              alt=""
              class="footer__img"
            />
          </div>
          <ul class="footer__socials">
            <li class="footer__social">
              <a href="#" target="_blank" class="footer__link"
                ><img
                  src="../assets/images/icons/f.svg"
                  alt=""
              /></a>
            </li>
            <li class="footer__social">
              <a href="#" target="_blank" class="footer__link"
                ><img
                  src="../assets/images/icons/p.svg"
                  alt=""
              /></a>
            </li>
            <li class="footer__social">
              <a href="#" target="_blank" class="footer__link"
                ><img
                  src="../assets/images/icons/instagram.svg"
                  alt=""
              /></a>
            </li>
            <li class="footer__social">
              <a href="#" target="_blank" class="footer__link"
                ><img
                  src="../assets/images/icons/google.svg"
                  alt=""
              /></a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h3 class="footer__title">Navigation</h3>
          <ul class="footer__list">
            <li v-for="({name, path}, i) in footerMenu" :key="i">
              <router-link :to="path" href="" class="footer__link">{{ name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col">2</div>
        <div class="col">2</div>
      </div>
    </div>
  </footer>
</template>

<script>
import {menuList} from '../constants/menuLink'

export default ({
  data() {
    return {
      footerMenu: menuList,
    }
  },
})
</script>
