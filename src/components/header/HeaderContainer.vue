<template>
  <div class="header">
    <Logo class="children"></Logo>
    <Button class="children" :button-content="'Account'" :redirect-path="'/userPanel'"></Button>
  </div>
</template>

<script>
import Logo from "../common/Logo";
import Button from "../common/Button";
export default {
  name: 'HeaderContainer',
  components: {Button, Logo},
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #00a0d4;
    box-shadow: 0 2px 4px rgba(0,0,0,.5);
  }
  .children {
    flex: 1;
  }
</style>
