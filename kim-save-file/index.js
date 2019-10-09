import saveAs from './FileSaver'
function saveFlie(url, name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            name = url.split('/')
            name = name[name.length - 1]
        }
        let xhr = null
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.open('GET', url, true)
        xhr.responseType = 'blob' // 设置返回类型blob
        // 定义请求完成的处理函数，请求前也可以增加 加载框/禁用下载按钮的相关逻辑
        xhr.onload = function() {
            let data = {
                status: this.status,
                response: this.response,
                url: this.ajaxUrl,
                name: name
            }
            if (this.status === 200) {
                let blob = this.response
                saveAs(blob, name)
                resolve(data)
            }
            reject(data)
        }
        xhr.send() //发送ajax请求
    })
}
export default saveFlie
