// function videoinfo

export default (video)=>{
    return new Promise((reslove,reject)=>{
        let videoInfo = {}
        let url = URL.createObjectURL(video)
        let audioElement = document.createElement('video')
        audioElement.src = url
        audioElement.crossOrigin = 'anonymous'
        audioElement.play()
        audioElement.addEventListener('loadeddata', (_event) => {
            // 获取默认封面
            let canvas = document.createElement('canvas')
            canvas.width = audioElement.videoWidth
            canvas.height = audioElement.videoHeight
            let ctx = canvas.getContext('2d')
            ctx.drawImage(audioElement, 0, 0)
            videoInfo.faceBase64 = canvas.toDataURL('image/png')
            videoInfo.faceBlob = dataURItoBlob(videoInfo.faceBase64)
            videoInfo.name = video.name
            videoInfo.lastModified = video.lastModified
            videoInfo.type = video.type
            videoInfo.size = video.size
            videoInfo.duration = audioElement.duration
            videoInfo.width = audioElement.videoWidth
            videoInfo.height = audioElement.videoHeight
            videoInfo.pixel = `${audioElement.videoWidth}*${audioElement.videoHeight}`
            videoInfo.faceSize = videoInfo.faceBlob.size
            videoInfo.faceBlob.name = video.name
            audioElement.pause()
            audioElement = null
            reslove(videoInfo)
        },false)
    })
    // 转码
    function dataURItoBlob (dataURI) {
        let binary = atob(dataURI.split(',')[1])
        let array = []
        for (let i = 0; i < binary.length; i += 1) {
            array.push(binary.charCodeAt(i))
        }
        return new Blob([new Uint8Array(array)], { type: 'image/png' })
    }
}