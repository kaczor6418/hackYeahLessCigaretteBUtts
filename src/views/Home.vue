<template>
  <div class="home">
    <HeaderContainer></HeaderContainer>
    <BodyContainer></BodyContainer>
    <footer-container></footer-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderContainer from "../components/header/HeaderContainer";
import BodyContainer from "../components/body/BodyContainer";
import FooterContainer from "../components/footer/FooterContainer";

export default {
  name: 'home',
  components: {
    FooterContainer,
    BodyContainer,
    HeaderContainer
  }
}
</script>

<style>
  div {
    width: 100%;
  }
</style>
