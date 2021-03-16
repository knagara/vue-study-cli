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

    <!--動的コンポーネント-->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <!--フォーム-->
    <div>
      <h2>フォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="eventData.title">
      <input type="text" v-model.lazy="eventData.title">
      <p>{{eventData.title}}</p>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.number">
      <p>{{eventData.number}}</p>
      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <p>{{eventData.host}}</p>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{eventData.detail}}</pre>
      <p style="white-space: pre;">{{eventData.detail}}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="10">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="10">30代</label>
      <p>{{eventData.target}}</p>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="payed" value="有料" v-model="eventData.price">
      <label for="payed">有料</label>
      <p>開催地</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import LikeHeaderSlots from './components/LikeHeaderSlots.vue'
import LikeHeaderSlotProps from './components/LikeHeaderSlotProps.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  data(){
    return {
      number: 10,
      currentComponent: 'Home',
      locations: ['東京','大阪','名古屋'],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: '無料',
        location: '東京'
      }
    }
  },
  components:{
    LikeHeader,
    LikeHeaderSlots,
    LikeHeaderSlotProps,
    Home,
    About
  },
  methods:{
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>