# kim-jszip


### Foreword
jszip不能通过地址下载，需要先请求获取文件内容传入到jszip方法里，才能压缩zip文件

### Installation

```
npm install kim-jszip
```

### Usage

```
import KimJSZip from 'kim-jszip'

KimJSZip(src,'resource')
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
//src为地址
//类型为
//String 'example.png'
//Array ['example1.png','example.png']
//Object [{name:file1.png,path:'example1.png'},{name:file2.png,path:'example2.png'}]
//resource为压缩包名称

```