<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{number}}</p>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :totalNumber="number" testProps="テスト"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data(){
    return {
      number: 10
    }
  },
  components:{
    LikeHeader
  },
  methods:{
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>