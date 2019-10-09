<template>
  <div id="app">
      <input v-for="(item,index) in srcs" :key="index" type="value" :value="item" @input="setValue(index,$event)" />
      <div><input type="text" v-model="fileName" /><button @click="download">下载</button></div>
  </div>
</template>

<script>
import toZip from './index'
// import toZip from '../dist/KimJSZip'
export default {
    name: 'App',
    data () {
        return {
            srcs:[
                "https://testmv.xesimg.com/infosharing/attachment/201904/155495839220190403560.docx",
                'https://xesfile.xesimg.com/test_library/ordinaryimg/2019/03/19/t_137019_ab.jpg'
            ],
            srcs1:[
                {name:"abc.docx",path:"https://testmv.xesimg.com/infosharing/attachment/201904/155495839220190403560.docx"},
                {name:"123.jpg",path:"https://xesfile.xesimg.com/test_library/ordinaryimg/2019/03/19/t_137019_ab.jpg"}
            ],
            fileName:'packages'
        }
    },
    methods: {
        setValue(index,el){
            this.srcs[index] = el.target.value
        },
        download(){
            toZip(this.srcs1,this.fileName)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        },
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
input{
    width: 600px;
    margin-bottom: 20px;
    display: block;
    margin: 10px auto;
}
button{
    width: 100px;
}
</style>