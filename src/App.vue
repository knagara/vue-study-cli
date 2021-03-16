<template>
  <div>
    <LikeHeader headerText="Hello">
      <h1>トータルのいいね数</h1>
      <p>{{number}}</p>
    </LikeHeader>
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