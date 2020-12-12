<template>
  <div>
      <Title :font="font" :bottom="bottom">{{title ? title : 'Seletor' }}</Title>
        <Select v-model="getMonth" @change="change($event)">
            <Option v-for="(item,index) in months" :key="index" :value="item.name">{{item.name}}</Option>
        </Select>
  </div>
</template>

<script>
    import { Select, Option } from './styles';
    import { getMonths, currentMonth } from '../../services/months';
    import Title from '../../components/Title';

    export default {
        props:{
            font:Number,
            bottom:Number,
            title:String
        },
        components:{
            Title,
            Select,
            Option,
        },
        data(){
            return{
                months:getMonths()
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            }
        },
        created(){
            if(this.$store.getters.getMonth===''){
                this.current=currentMonth()
            }
        },
        methods:{
            change(event){
                this.$store.commit("setMonth",event.target.value)
            }
        }
    }
</script>