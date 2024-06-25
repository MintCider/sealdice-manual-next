import{_ as i,D as _,c as r,j as e,I as t,a as o,w as n,a7 as a,o as u}from"./chunks/framework.CaWer6uY.js";const Pe=JSON.parse('{"title":"功能","description":"","frontmatter":{"lang":"zh-cn","title":"功能"},"headers":[],"relativePath":"use/fun.md","filePath":"use/fun.md","lastUpdated":1718381802000}'),p={name:"use/fun.md"},h=a("",7),m={class:"info custom-block"},g=e("p",{class:"custom-block-title"},"示例",-1),b=e("p",null,[e("code",null,".gugu 来源"),o(" 查看鸽子背后的故事。")],-1),f={class:"info custom-block"},k=e("p",{class:"custom-block-title"},"示例",-1),T=e("h2",{id:"jsr-不重复骰点",tabindex:"-1"},[e("code",null,".jsr"),o(" 不重复骰点 "),e("a",{class:"header-anchor",href:"#jsr-不重复骰点","aria-label":'Permalink to "`.jsr` 不重复骰点"'},"​")],-1),x=e("p",null,[e("code",null,".jsr <次数># <面数> [<原因>]"),o(" 投掷指定面数的骰子指定次数，使每一次的结果都不相同。")],-1),w={class:"info custom-block"},P=e("p",{class:"custom-block-title"},"示例",-1),v=a("",5),S={class:"info custom-block"},D=e("p",{class:"custom-block-title"},"示例",-1),I=e("h2",{id:"text-文本模板测试",tabindex:"-1"},[e("code",null,".text"),o(" 文本模板测试 "),e("a",{class:"header-anchor",href:"#text-文本模板测试","aria-label":'Permalink to "`.text` 文本模板测试"'},"​")],-1),A=e("p",null,[e("code",null,".text <文本模板>")],-1),q=e("p",null,"骰子会将模板内容解析后返回，其中含有的表达式和变量都将被求值。",-1),C={class:"info custom-block"},V=e("p",{class:"custom-block-title"},"示例",-1),N=e("h2",{id:"send-向骰主发送消息-回复消息",tabindex:"-1"},[e("code",null,".send"),o(" 向骰主发送消息 / 回复消息 "),e("a",{class:"header-anchor",href:"#send-向骰主发送消息-回复消息","aria-label":'Permalink to "`.send` 向骰主发送消息 / 回复消息"'},"​")],-1),j=e("p",null,[e("code",null,".send <消息内容>")],-1),y=e("p",null,"拥有 Master 权限的用户将看到消息内容和发送者的 IM 账号，如果是来自群组，也能看到群号。",-1),B={class:"info custom-block"},z=e("p",{class:"custom-block-title"},"示例",-1),R=e("p",null,[e("code",null,".send to <对方ID> <消息内容>")],-1),E=e("p",null,"Master 可以通过这个指令进行回复。目标 ID 可以是群号，也可以是个人的 IM 账号。将收到的消息中的对应 ID 复制到此处即可。",-1),M={class:"info custom-block"},Q=e("p",{class:"custom-block-title"},"示例",-1),$=e("h2",{id:"welcome-新人入群欢迎",tabindex:"-1"},[e("code",null,".welcome"),o(" 新人入群欢迎 "),e("a",{class:"header-anchor",href:"#welcome-新人入群欢迎","aria-label":'Permalink to "`.welcome` 新人入群欢迎"'},"​")],-1),O=e("p",null,[e("code",null,".welcome (on|off)"),o(" 开启、关闭功能")],-1),G=e("p",null,[e("code",null,".welcome show"),o(" 查看当前欢迎语")],-1),W=e("p",null,[e("code",null,".welcome set <欢迎语>"),o(" 设定欢迎语")],-1),Y={id:"ping-指令响应测试",tabindex:"-1"},J=e("code",null,".ping",-1),L=e("a",{class:"header-anchor",href:"#ping-指令响应测试","aria-label":'Permalink to "`.ping` 指令响应测试 <Badge type="tip" text="v1.4.2" />"'},"​",-1),U=e("code",null,".ping",-1),Z=e("p",null,[e("code",null,".ping"),o(" 海豹回复你一条消息。")],-1),F={class:"info custom-block"},H=a("",4),K=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"提示"),e("p",null,"如果出现类似场景，可以发现 QQ 会提示你已经禁止再向骰子发送私聊消息，要求在骰子回应后才能再次发送。"),e("p",null,"但用户已经无法再通过私聊发送正确的指令，触发骰子的回应了。"),e("p",null,[o("此时，用户可以去频道公屏发送一个 "),e("code",null,".ping"),o(" 指令。")])],-1),X={id:"alias-定义快捷指令-使用快捷指令",tabindex:"-1"},ee=e("code",null,".alias",-1),te=e("code",null,".&",-1),oe=e("a",{class:"header-anchor",href:"#alias-定义快捷指令-使用快捷指令","aria-label":'Permalink to "`.alias` 定义快捷指令 & `.&` 使用快捷指令 <Badge type="tip" text="v1.4.3"/>"'},"​",-1),se=e("code",null,".alias",-1),ne=e("code",null,".&/.a <快捷指令>",-1),ce=a("",9),le={class:"info custom-block"},ae=e("p",{class:"custom-block-title"},"快捷指令示例",-1),de=a("",4),_e={class:"info custom-block"},ie=e("p",{class:"custom-block-title"},"示例",-1),re=a("",2),ue={class:"info custom-block"},pe=e("p",{class:"custom-block-title"},"示例",-1),he=a("",10);function me(ge,be,fe,ke,Te,xe){const s=_("ChatBox"),c=_("Badge"),l=_("PluginTabsTab"),d=_("PluginTabs");return u(),r("div",null,[h,e("div",m,[g,t(s,{messages:[{content:".gugu",send:!0},{content:"🕊️:今天发版本，领导说发不完不让走"}]})]),b,e("div",f,[k,t(s,{messages:[{content:".gugu 来源",send:!0},{content:`🕊️: 前往了一个以前捕鲸的小岛度假~这里人很亲切！但是吃了这里的鱼肉料理之后有点晕晕的诶...想到前几天<木落>的短信，还是别追究他为什么不在了。
	——鹊鹊结合实际经历创作`}]})]),T,x,e("div",w,[P,t(s,{messages:[{content:".jsr 5# 100",send:!0},{content:`<木落>掷骰5次:
D100=6
D100=71
D100=53
D100=31
D100=2`}]})]),v,e("div",S,[D,t(s,{messages:[{content:".drl",send:!0},{content:"当前群组无骰池，请使用.drl new创建一个。"},{content:".drl new 10# 1000",send:!0},{content:"创建骰池成功，骰子面数1000，可抽取10次。"},{content:".drl",send:!0},{content:"<木落>掷出了 D1000=568"},{content:".drl # 第 10 次",send:!0},{content:`<木落>掷出了 D1000=539
骰池已经抽空，现在关闭。`}]})]),I,A,q,e("div",C,[V,t(s,{messages:[{content:".text 看看手气 {1d16}",send:!0},{content:"看看手气 2"}]})]),N,e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.6"}),o(" 起，海豹将此指令迁移至「功能」扩展。")]),j,y,e("div",B,[z,t(d,null,{default:n(()=>[t(l,{label:"群聊"},{default:n(()=>[t(s,{messages:[{username:"Szz",avatar:"user2",content:".send 骰主你好！"}]})]),_:1}),t(l,{label:"Master 收到的消息"},{default:n(()=>[t(s,{messages:[{content:`一条来自群组<群名>(群号)，作者<Szz>(用户 IM 账号)的留言:
骰主你好！`}]})]),_:1})]),_:1})]),R,E,e("div",M,[Q,t(d,null,{default:n(()=>[t(l,{label:"Master 回复"},{default:n(()=>[t(s,{messages:[{content:`一条来自群组<群名>(群号)，作者<Szz>(用户 IM 账号)的留言:
骰主你好！`},{content:".send to <群号> 我收到了！",send:!0}]})]),_:1}),t(l,{label:"群聊"},{default:n(()=>[t(s,{messages:[{username:"Szz",avatar:"user2",content:".send 骰主你好！"},{content:`本消息由骰主<木落>通过指令发送:
我收到了！`}]})]),_:1})]),_:1})]),$,e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.6"}),o(" 起，海豹将此指令迁移至「功能」扩展。")]),O,G,W,e("h2",Y,[J,o(" 指令响应测试 "),t(c,{type:"tip",text:"v1.4.2"}),o(),L]),e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.2"}),o(" 版本起，海豹支持 "),U,o(" 指令，用于指示海豹回复你一条消息。")]),e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.6"}),o(" 起，海豹将此指令迁移至「功能」扩展。")]),Z,e("div",F,[H,t(d,null,{default:n(()=>[t(l,{label:"频道私聊"},{default:n(()=>[t(s,{messages:[{content:"我发出第一条消息。",send:!0},{content:"我发出第二条消息。",send:!0},{content:"我发出第三条消息，机器人怎么还不理我？",send:!0}]}),K,t(s,{messages:[{content:"pong！这里是海豹核心！"},{content:"好耶，我又可以发私信给骰子了！",send:!0}]})]),_:1}),t(l,{label:"频道公屏"},{default:n(()=>[t(s,{messages:[{content:"@海豹核心 .ping",send:!0}]})]),_:1})]),_:1})]),e("h2",X,[ee,o(" 定义快捷指令 & "),te,o(" 使用快捷指令 "),t(c,{type:"tip",text:"v1.4.3"}),o(),oe]),e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.3"}),o(" 版本起，海豹支持使用"),se,o(" 定义快捷指令。同时使用 "),ne,o(" 触发快捷指令。")]),e("p",null,[o("从 "),t(c,{type:"tip",text:"v1.4.6"}),o(" 起，海豹将此指令迁移至「功能」扩展。")]),ce,e("div",le,[ae,t(d,null,{default:n(()=>[t(l,{label:"私聊"},{default:n(()=>[t(s,{messages:[{content:".alias 终极答案 .r 11+45-14 计算生命、宇宙以及一切的问题的答案",send:!0},{content:`已成功定义指令「.r 11+45-14 计算生命、宇宙以及一切的问题的答案」的个人快捷方式「终极答案」，触发方式：
.&终极答案 或
.a 终极答案`},{content:".&终极答案",send:!0},{content:`※ 个人快捷指令 .r 11+45-14 计算生命、宇宙以及一切的问题的答案
由于计算生命、宇宙以及一切的问题的答案，<木落>掷出了 11+45-14=11+45-14=42`}]})]),_:1})]),_:1})]),de,e("div",_e,[ie,t(s,{messages:[{content:".ww 5",send:!0},{content:"<木落>掷出了 5a10=[成功0/5 {6,2,2,7,4}]=0"}]})]),re,e("div",ue,[pe,t(s,{messages:[{content:".ww set a6m10k9",send:!0},{content:`成功线k: 已修改为9
骰子面数m: 已修改为10
加骰线a: 已修改为6`},{content:".ww 5",send:!0},{content:"<木落>掷出了 5a6=[成功1/11 轮数:4 {<9*>,5,<6>,3,3},{<6>,<6>},{<6>,<7>},{5,4}]=1"},{content:".ww set clr",send:!0},{content:"骰池设定已恢复默认"}]})]),he])}const ve=i(p,[["render",me]]);export{Pe as __pageData,ve as default};
