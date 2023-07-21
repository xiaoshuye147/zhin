import{_ as d,E as i,o,c as _,k as e,a as s,J as t,w as n}from"./chunks/framework.587922bd.js";const Je=JSON.parse('{"title":"组件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/component.md","filePath":"guide/component.md","lastUpdated":1689920000000}'),u={name:"guide/component.md"},r=e("h1",{id:"组件",tabindex:"-1"},[s("组件 "),e("a",{class:"header-anchor",href:"#组件","aria-label":'Permalink to "组件"'},"​")],-1),c=e("ul",null,[e("li",null,"zhin 提供了组件以增加代码的复用性，zhin 的组件系统在一定程度上参考了 Vue.js 的语法，从而实现了高易学性和一定的移植性"),e("li",null,"在组件中，你可以直接获取到当前会话的一些变量，这类似于 vue 的 vuex，是根据会话产生环境自动生成的")],-1),h=e("h2",{id:"文本插值",tabindex:"-1"},[s("文本插值 "),e("a",{class:"header-anchor",href:"#文本插值","aria-label":'Permalink to "文本插值"'},"​")],-1),m=e("span",null,"send {{session.sender.user_id}}",-1),p=e("span",null,'send [日志][用户:{{session.sender.nickname}}({{session.sender.user_id}})]是一个来自{{session.sender.area == ""?"未知":sender.area}}的{{session.sender.age}}岁{{session.sender.sex == "unknown"?"人妖":sender.sex}}',-1),f=e("h2",{id:"image-标签",tabindex:"-1"},[s("image 标签 "),e("a",{class:"header-anchor",href:"#image-标签","aria-label":'Permalink to "image 标签"'},"​")],-1),g=e("span",null,'send <image src="https://maohaoji.com/image标签.gif"/>',-1),b=e("img",{alt:"",style:{height:"100px"},src:"https://maohaoji.com/image标签.gif"},null,-1),x=e("span",null,'send <image :src="`https://q1.qlogo.cn/g?b=qq&nk=${sender.user_id}&s=100`"/>',-1),k=e("img",{alt:"",style:{height:"100px"},src:"https://q1.qlogo.cn/g?b=qq&nk=1659488338&s=100"},null,-1),q=e("h2",{id:"template-标签",tabindex:"-1"},[s("template 标签 "),e("a",{class:"header-anchor",href:"#template-标签","aria-label":'Permalink to "template 标签"'},"​")],-1),B=e("p",null,"template 标签主要是更加规范和语义化，在 zhin 中可以对元素进行分组 下面这个例子可以体现 template 对元素的分组",-1),y=e("p",null,"ps <random>会随机输出内部元素，所以实际输出不一定是图示",-1),P=e("span",null,[s(" send 你喜欢<random>"),e("br"),s(" <template>御姐</template>"),e("br"),s(" <template>萝莉</template>"),e("br"),s(" </random> ")],-1),j=e("span",null,"你喜欢萝莉",-1),E=e("p",null,"下面这个例子可以体现使用 template 便签的美观性",-1),z=e("span",null,[s(" send <template>"),e("br"),s(" 今日图片"),e("br"),s(' <image src="https://maohaoji.com/image标签.gif"/>'),e("br"),s(" 欢迎您{{session.sender.nickname}}({{session.sender.user_id}})"),e("br"),s(' <image :src="`https://q1.qlogo.cn/g?b=qq&nk=${sender.user_id}&s=100`"/>'),e("br"),s(" </template>"),e("br")],-1),M=e("span",null,"今日图片",-1),v=e("img",{alt:"",style:{height:"100px"},src:"https://maohaoji.com/image标签.gif"},null,-1),C=e("img",{alt:"",style:{height:"100px"},src:"https://q1.qlogo.cn/g?b=qq&nk=1659488338&s=100"},null,-1),D=e("h2",{id:"random-标签",tabindex:"-1"},[s("random 标签 "),e("a",{class:"header-anchor",href:"#random-标签","aria-label":'Permalink to "random 标签"'},"​")],-1),w=e("ul",null,[e("li",null,"相比于手动使用 Math.random()获取随机数然后输出元素，使用 random 随机输出元素的效率以及代码量、可读性都有不错的改善")],-1),$=e("p",null,[s("ps random 内元素请尽可能使用"),e("code",null,"<template>"),s("标签包装，以免出现奇怪的错误")],-1),N=e("p",null,"下来我们来看一个例子",-1),V=e("span",null,[s(" send <random>"),e("br"),s(' <template>我猜你喜欢>image src="https://maohaoji.com/zhindocimage/%E9%BB%91%E4%B8%9D.jpg"/ ></template >'),e("br"),s(' <template>我猜你喜欢>image src="https://maohaoji.com/zhindocimage/%E7%99%BD%E4%B8%9D.jpeg"/> </template>'),e("br"),s(' <template>我猜你喜欢>image src="https://maohaoji.com/zhindocimage/%E6%B8%94%E7%BD%91.jpg"/> </template>'),e("br"),s(" </random> ")],-1),G=e("span",null,"我猜你喜欢",-1),S=e("img",{alt:"",style:{height:"100px"},src:"https://maohaoji.com/zhindocimage/%E7%99%BD%E4%B8%9D.jpeg"},null,-1),U=e("h2",{id:"time-标签",tabindex:"-1"},[s("time 标签 "),e("a",{class:"header-anchor",href:"#time-标签","aria-label":'Permalink to "time 标签"'},"​")],-1),Y=e("p",null,"time 标签相比于 new Date()然后解析来获取时间字符串来说是很方便容易的，它会输出 yyyy-MM-dd hh:mm:ss 格式的时间，我们来看有个例子",-1),H=e("span",null,"send 现在是<time/>",-1),J=e("span",null,"现在是 2023-02-0518:52:02",-1),Z=e("p",null,"我们可以用来实现一个有趣的输出",-1),F=e("span",null,' send <image :src="`https://q1.qlogo.cn/g?b=qq&nk=${sender.user_id}&s=100`" />[日志][<time />][用户:{{session.sender.nickname}}({{session.sender.user_id}})]是一个来自{{session.sender.area == ""?"未知":sender.area}}的{{session.sender.age}}岁{{session.sender.sex == "unknown"?"人妖":sender.sex}} ',-1),K=e("img",{alt:"",style:{height:"100px"},src:"https://q1.qlogo.cn/g?b=qq&nk=1659488338&s=100"},null,-1),O=e("span",null,"[日志][2023-02-0519:49:22][用户:master(1659488338)]是一个来自四川的 26 岁 male",-1),R=e("h2",{id:"at-标签",tabindex:"-1"},[s("at 标签 "),e("a",{class:"header-anchor",href:"#at-标签","aria-label":'Permalink to "at 标签"'},"​")],-1),T=e("p",null,"使用 at 标签可以很容易的 at 群内成员，示例如下",-1),A=e("span",null,' send <at user_id="1659488338" /> ',-1),I=e("span",null,"@master",-1),L=e("p",null,"当然，该标签也可以使用 v-bind 标签实现数据绑定，类似于以下内容",-1),Q=e("span",null,' send <at :user_id="sender.user_id" /> ',-1),W=e("span",null,"@master",-1),X=e("p",null,[s("结合"),e("code",null,"<random>"),s("标签后，很容易的可以实现随机 at")],-1),ee=e("span",null,[s(" send <random>"),e("br"),s(" <template>taidixiong233"),e("br"),s(' <at user_id="2870926164" />'),e("br"),s(" </template>"),e("br"),s(" <template>master"),e("br"),s(' <at user_id="1689919782" />'),e("br"),s(" </template>"),e("br"),s(" <template>小叶子"),e("br"),s(' <at user_id="2870926164" />'),e("br"),s(" </template>"),e("br"),s(" </random> ")],-1),te=e("span",null,"@taidixiong233",-1),ne=e("span",null,"怎么啦",-1),se=e("span",null,"机器人at我干嘛咩",-1),le=e("h2",{id:"prompt-标签",tabindex:"-1"},[s("prompt 标签 "),e("a",{class:"header-anchor",href:"#prompt-标签","aria-label":'Permalink to "prompt 标签"'},"​")],-1),ae=e("ul",null,[e("li",null,"prompt 标签可以快速的实现表单收集，非常的好用，实例如下")],-1),ie=e("span",null,"send 你是<prompt>请输入姓名</prompt>，你在<prompt>请输入地址</prompt>,是个可爱的<prompt>请输入性别</prompt>孩子",-1),de=e("span",null,"请输入姓名",-1),oe=e("span",null,"master",-1),_e=e("span",null,"请输入地址",-1),ue=e("span",null,"四川",-1),re=e("span",null,"请输入性别",-1),ce=e("span",null,"男",-1),he=e("span",null,"你是master，你在四川，是个可爱的男孩子",-1),me=e("span",null,"这个机器人好酷",-1),pe=e("h2",{id:"confirm-标签",tabindex:"-1"},[s("confirm 标签 "),e("a",{class:"header-anchor",href:"#confirm-标签","aria-label":'Permalink to "confirm 标签"'},"​")],-1),fe=e("span",null,"send 你的选择是<confirm/>",-1),ge=e("span",null,"输入 yes,y,Yes,YES,Y,.,。,确认为确认",-1),be=e("span",null,"yes",-1),xe=e("span",null,"你的选择是 true",-1),ke=e("h2",{id:"execute-标签",tabindex:"-1"},[s("execute 标签 "),e("a",{class:"header-anchor",href:"#execute-标签","aria-label":'Permalink to "execute 标签"'},"​")],-1),qe=e("span",null,"send <execute>status</execute>",-1),Be=e("span",null,[s("当前状态:"),e("br"),s(" 系统架构:Zhin 自研"),e("br"),s(" CPU 架构:65536 核 Zhin(R)CPU9900KF-MaxPro"),e("br"),s(" 内存:780.26MB/1048576GB(00.01%)"),e("br"),s(" 进程内存占比:0.01%(45.97MB/1048576GB)"),e("br"),s(" 持续运行时间：2149 小时 29 分钟"),e("br"),s(" 掉线次数:0 次"),e("br"),s(" 发送消息数:3521 条"),e("br"),s(" 接收消息数:213230 条"),e("br"),s(" 消息频率:1 条/分")],-1),ye=e("span",null,"哇趣，65536核心？？认真的别搞",-1),Pe=e("span",null,"1048576GB？？1PB的内存，这都比我硬盘空间大了",-1),je=e("h2",{id:"face-标签",tabindex:"-1"},[s("face 标签 "),e("a",{class:"header-anchor",href:"#face-标签","aria-label":'Permalink to "face 标签"'},"​")],-1),Ee=e("p",null,"face 标签可以快速的发送表情消息，需要使用表情的id，示例如下",-1),ze=e("span",null,'send <face id="2" />',-1),Me=e("img",{alt:"",src:"https://maohaoji.com/zhindocimage/2.png",style:{width:"25px"}},null,-1),ve=e("p",null,"这是一个组合使用face标签的例子",-1),Ce=e("span",null,'send <random><face id="1" /><face id="2" /></random>',-1),De=e("img",{alt:"",src:"https://maohaoji.com/zhindocimage/2.png",style:{width:"25px"}},null,-1),we=e("span",null,"机器人发的表情色迷迷的",-1);function $e(Ne,Ve,Ge,Se,Ue,Ye){const l=i("ChatMsg"),a=i("ChatHistory");return o(),_("div",null,[r,c,h,e("ul",null,[e("li",null,[s("首先我们来看数据绑定，最基本形式是使用“Mustache”语法（双花括号）的文本插值："),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[m]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[s("1659488338")]),_:1})]),_:1}),s(" 可以看到，在使用文本插值后，可以很快速的让机器人输出信息，我们来看在实际运行中的一个 demo ")])]),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[p]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[s("[日志][用户:master(1659488338)]是一个来自四川的26岁male")]),_:1})]),_:1}),f,e("ul",null,[e("li",null,[s("image 标签提供了一种快速发送照片的方法，请看下面的例子"),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[g]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[b]),_:1})]),_:1}),s(" 可以看到，使用 src 标签可以很快的发送想要发送的图片，下面我们来看一个使用 image 标签获取用户头像的实例 "),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[x]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[k]),_:1})]),_:1}),s(" ps 这里的:src 代表此处使用变量为src赋值，在 zhin 中，不支持v-bind代替这个语法，请注意与vue的区别;session可选字段参考`Session` ")])]),q,e("ul",null,[e("li",null,[B,y,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[P]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[j]),_:1})]),_:1}),E,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[z]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[M,v,s(" 欢迎您 master(1659488338) "),C]),_:1})]),_:1})])]),D,w,$,N,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[V]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[G,S]),_:1})]),_:1}),U,e("ul",null,[e("li",null,[Y,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[H]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[J]),_:1})]),_:1})]),e("li",null,[Z,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[F]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[K,O]),_:1})]),_:1})])]),R,e("ul",null,[e("li",null,[T,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[A]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[I]),_:1})]),_:1})]),e("li",null,[L,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[Q]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[W]),_:1})]),_:1})]),e("li",null,[X,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[ee]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[te]),_:1}),t(l,{nickname:"taidixiong233",id:"2870926164"},{default:n(()=>[ne]),_:1}),t(l,{nickname:"taidixiong233",id:"2870926164"},{default:n(()=>[se]),_:1})]),_:1})])]),le,ae,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[ie]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[de]),_:1}),t(l,{id:"1659488338"},{default:n(()=>[oe]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[_e]),_:1}),t(l,{id:"1659488338"},{default:n(()=>[ue]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[re]),_:1}),t(l,{id:"1659488338"},{default:n(()=>[ce]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[he]),_:1}),t(l,{nickname:"taidixiong233",id:"2870926164"},{default:n(()=>[me]),_:1})]),_:1}),pe,e("ul",null,[e("li",null,[s("confirm 标签可以问询用户是否确定、继续，我们来看一段演示"),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[fe]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[ge]),_:1}),t(l,{id:"1659488338"},{default:n(()=>[be]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[xe]),_:1})]),_:1})])]),ke,e("ul",null,[e("li",null,[s("execute 标签可以用于执行机器人命令，下图给出了示例，具体命令列表请查看命令列表"),t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[qe]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[Be]),_:1}),t(l,{id:"2870926164",nickname:"taidixiong233"},{default:n(()=>[ye]),_:1}),t(l,{id:"2870926164",nickname:"taidixiong233"},{default:n(()=>[Pe]),_:1})]),_:1})])]),je,e("ul",null,[e("li",null,[Ee,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[ze]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[Me]),_:1})]),_:1})]),e("li",null,[ve,t(a,null,{default:n(()=>[t(l,{id:"1659488338"},{default:n(()=>[Ce]),_:1}),t(l,{id:"1689919782"},{default:n(()=>[De]),_:1}),t(l,{id:"2870926164",nickname:"taidixiong233"},{default:n(()=>[we]),_:1})]),_:1})])])])}const Ze=d(u,[["render",$e]]);export{Je as __pageData,Ze as default};
