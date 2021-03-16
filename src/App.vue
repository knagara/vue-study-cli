<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeHeader headerText="Hello">
      <h1>トータルのいいね数</h1>
      <p>{{number}}</p>
    </LikeHeader>
    <LikeHeaderSlots>
      <template v-slot:title="slotProps">
        <h2>スロット１タイトル</h2>
        <h2>{{slotProps.foo.firstName}}</h2>
      </template>
      <template v-slot:number>
        <p>{{number}}</p>
      </template>
      <p>これはデフォルトスロットに表示される</p>
    </LikeHeaderSlots>
    <LikeHeaderSlotProps v-slot="slotProps">
      <h2>{{slotProps.foo.firstName}}</h2>
      <p>デフォルトスロットしかない場合にしか使えないので注意</p>
    </LikeHeaderSlotProps>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :totalNumber="number" testProps="テスト"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeHeaderSlots from './components/LikeHeaderSlots.vue'
import LikeHeaderSlotProps from './components/LikeHeaderSlotProps.vue'

export default {
  data(){
    return {
      number: 10
    }
  },
  components:{
    LikeHeader,
    LikeHeaderSlots,
    LikeHeaderSlotProps
  },
  methods:{
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>