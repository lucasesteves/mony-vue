<template>
    <Input 
        :type="type" 
        :value="value"
        @input="handleChange"
    />
</template>

<script>
    import { Input } from './styles'

    export default {
        components:{
            Input,
        },
        props:{
            type:String,
            value:String
        },
        methods:{
            handleChange(event){
                this.$emit('onChange',event)
            }
        }
    }
</script>