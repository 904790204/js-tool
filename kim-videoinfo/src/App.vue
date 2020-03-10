<template>
  <div id="app">
      <input type="file" @change="upload"/>
      <div class="video-info" v-if="fileinfo">
          <img :src="fileinfo.faceBase64" />
          <p v-for="(item,key) in fileinfo" v-if="key !== 'faceBase64' && key !== 'faceBlob'" :key="key">{{key + ' : ' + item}}</p>
      </div>
  </div>
</template>

<script>
import videoinfo from './index'
export default {
    name: 'App',
    data () {
        return {
            fileinfo: null
        }
    },
    methods: {
        upload(file){
            if (file.target.files.length === 0) return
            let video = file.target.files[file.target.files.length - 1]
            file.target.value = ''
            let info = videoinfo(video).then(res=>{
                this.fileinfo = res
            })
            console.log(info);
        }
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