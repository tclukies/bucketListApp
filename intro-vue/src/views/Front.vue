<template>
<div id='first'>
    <router-view></router-view>
        <Modal />
    <Footer />
    </div>
    
</template>

<script>
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';
export default {
  name: 'first',
  components: {
    Modal,
    Footer,
  },
};
</script>

<style>
</style>
