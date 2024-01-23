<template>
    <div><TheHeader /></div>
    <div style="display: flex;margin-left: -140px;margin-top:-400px;">
        <div style="height: 350px;"></div>
        <div><TheFiltre /></div>
        <div style="margin-top: 200px;"><Urunler /></div></div>
    
    <div style="margin-top: 300px;"><TheFooter /></div>


</template>
  
<script setup>
  import TheHeader from 'components/TheHeader.vue';
  import TheFiltre from 'components/TheFiltre.vue';
  import Urunler from 'components/TheUrun.vue';
  import TheFooter from 'components/TheFooter.vue';
  
</script>