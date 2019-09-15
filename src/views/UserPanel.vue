<template>
  <div class="panel">
    <HeaderContainer></HeaderContainer>
    <AccountContainer></AccountContainer>
    <FooterContainer></FooterContainer>
  </div>
</template>
<script>
  import HeaderContainer from "../components/header/HeaderContainer";
  import AccountContainer from "../components/account/AccountContainer";
  import FooterContainer from "../components/footer/FooterContainer";
  export default {
    components: {FooterContainer, AccountContainer, HeaderContainer}
  }
</script>
