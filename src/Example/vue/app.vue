<template>
    <div class="container">
        <div id="player"></div>
        <el-select v-model="camera" placeholder="请选择摄像头">
            <el-option
            v-for="(item, index) in cameraList"
            :key="index"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <el-select v-model="microphone" placeholder="请选麦克风">
            <el-option
            v-for="(item, index) in microphoneList"
            :key="index"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <el-button @click="push" type="primary">推流</el-button>
    </div>
</template>
<script>
import ValleyStream from '../../valleyStream-es6'
export default {
    data() {
        return {
            cameraList: [],
            camera: "",
            microphoneList: [],
            microphone: '',
            valleyStream: null
        }
    },
    mounted() {
        const valleyStream = new ValleyStream('player', {
            width: 640,
            height: 480,
            swf: '../../src/valleyStream.swf'
        })
        this.valleyStream = valleyStream

         window.valleyStreamReady = () => {
            this.cameraList = valleyStream.getCamera()
            this.microphoneList = valleyStream.getMicrophone()
         }
    },
    methods: {
        push() {
            this.valleyStream.publish('rtmp://push.paoba1.qingcdn.com/live/', 'ff')
        }
    }
}
</script>

<style scoped lang="stylus">
    .container
        width 960px
        margin 0 auto
        position relative

    #player object
      margin 0 auto
      display block

</style>

