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
    import { getMonths as listOfMonths } from '../../services/months';
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
                months:listOfMonths()
            }
        },
        computed:{
            getMonth(){
                return this.$store.getters.getMonth 
            },
            getUser(){
                return this.$store.getters.getUser.id
            },
        },
        methods:{
            change(event){
                const data = { 
                    userId: this.getUser,
                    month: event.target.value
                }
                this.$store.commit("setMonth",event.target.value)
                this.$store.dispatch('main',data)
            }
        }
    }
</script>