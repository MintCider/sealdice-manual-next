import{_ as i,D as _,c as r,j as e,I as t,a as o,w as n,a7 as a,o as u}from"./chunks/framework.CaWer6uY.js";const Pe=JSON.parse('{"title":"功能","description":"","frontmatter":{"lang":"zh-cn","title":"功能"},"headers":[],"relativePath":"use/fun.md","filePath":"use/fun.md","lastUpdated":1718381802000}'),p={name:"use/fun.md"},h=a('<h1 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将展示海豹的「功能」扩展提供的指令，主要为快捷指令、ping、welcome 等额外指令，同时也包括今日人品、智能鸽子等娱乐相关指令。</p><p>此外，小众规则指令暂时也放在本扩展中。请善用侧边栏和搜索，按需阅读文档。</p></div><h2 id="jrrp-今日人品" tabindex="-1"><code>.jrrp</code> 今日人品 <a class="header-anchor" href="#jrrp-今日人品" aria-label="Permalink to &quot;`.jrrp` 今日人品&quot;">​</a></h2><p><code>.jrrp</code></p><p>今日人品是一个每个用户独立、每天刷新的 D100 随机数。你可通过 <a href="./../config/custom_text.html">自定义文案</a> 编写对它的解读。</p><h2 id="gugu-人工智能鸽子" tabindex="-1"><code>.gugu</code> 人工智能鸽子 <a class="header-anchor" href="#gugu-人工智能鸽子" aria-label="Permalink to &quot;`.gugu` 人工智能鸽子&quot;">​</a></h2><p><code>.gugu</code> 或 <code>.咕咕</code></p>',7),m={class:"info custom-block"},g=e("p",{class:"custom-block-title"},"示例",-1),b=e("p",null,[e("code",null,".gugu 来源"),o(" 查看鸽子背后的故事。")],-1),f={class:"info custom-block"},k=e("p",{class:"custom-block-title"},"示例",-1),T=e("h2",{id:"jsr-不重复骰点",tabindex:"-1"},[e("code",null,".jsr"),o(" 不重复骰点 "),e("a",{class:"header-anchor",href:"#jsr-不重复骰点","aria-label":'Permalink to "`.jsr` 不重复骰点"'},"​")],-1),x=e("p",null,[e("code",null,".jsr <次数># <面数> [<原因>]"),o(" 投掷指定面数的骰子指定次数，使每一次的结果都不相同。")],-1),w={class:"info custom-block"},P=e("p",{class:"custom-block-title"},"示例",-1),v=a('<p>以这种方式骰出的点数会自动成为一个骰池，供 <a href="#drl-骰池抽取">drl</a> 指令使用。</p><h2 id="drl-骰池抽取" tabindex="-1"><code>.drl</code> 骰池抽取 <a class="header-anchor" href="#drl-骰池抽取" aria-label="Permalink to &quot;`.drl` 骰池抽取&quot;">​</a></h2><p>骰池（Draw Lot）是一组来自相同面数骰子、出目互不相同的骰点，支持每次抽取一个。骰池是每个群组共用的。</p><p><code>.drl new &lt;个数&gt;# &lt;面数&gt;</code> 创建一个指定数量、指定面数的骰池。</p><p><code>.drl</code> / <code>.drlh</code> 从当前骰池抽取一个数值，后者将结果私聊发送。</p>',5),S={class:"info custom-block"},D=e("p",{class:"custom-block-title"},"示例",-1),I=e("h2",{id:"text-文本模板测试",tabindex:"-1"},[e("code",null,".text"),o(" 文本模板测试 "),e("a",{class:"header-anchor",href:"#text-文本模板测试","aria-label":'Permalink to "`.text` 文本模板测试"'},"​")],-1),A=e("p",null,[e("code",null,".text <文本模板>")],-1),q=e("p",null,"骰子会将模板内容解析后返回，其中含有的表达式和变量都将被求值。",-1),C={class:"info custom-block"},V=e("p",{class:"custom-block-title"},"示例",-1),N=e("h2",{id:"send-向骰主发送消息-回复消息",tabindex:"-1"},[e("code",null,".send"),o(" 向骰主发送消息 / 回复消息 "),e("a",{class:"header-anchor",href:"#send-向骰主发送消息-回复消息","aria-label":'Permalink to "`.send` 向骰主发送消息 / 回复消息"'},"​")],-1),j=e("p",null,[e("code",null,".send <消息内容>")],-1),y=e("p",null,"拥有 Master 权限的用户将看到消息内容和发送者的 IM 账号，如果是来自群组，也能看到群号。",-1),B={class:"info custom-block"},z=e("p",{class:"custom-block-title"},"示例",-1),R=e("p",null,[e("code",null,".send to <对方ID> <消息内容>")],-1),E=e("p",null,"Master 可以通过这个指令进行回复。目标 ID 可以是群号，也可以是个人的 IM 账号。将收到的消息中的对应 ID 复制到此处即可。",-1),M={class:"info custom-block"},Q=e("p",{class:"custom-block-title"},"示例",-1),$=e("h2",{id:"welcome-新人入群欢迎",tabindex:"-1"},[e("code",null,".welcome"),o(" 新人入群欢迎 "),e("a",{class:"header-anchor",href:"#welcome-新人入群欢迎","aria-label":'Permalink to "`.welcome` 新人入群欢迎"'},"​")],-1),O=e("p",null,[e("code",null,".welcome (on|off)"),o(" 开启、关闭功能")],-1),G=e("p",null,[e("code",null,".welcome show"),o(" 查看当前欢迎语")],-1),W=e("p",null,[e("code",null,".welcome set <欢迎语>"),o(" 设定欢迎语")],-1),Y={id:"ping-指令响应测试",tabindex:"-1"},J=e("code",null,".ping",-1),L=e("a",{class:"header-anchor",href:"#ping-指令响应测试","aria-label":'Permalink to "`.ping` 指令响应测试 <Badge type="tip" text="v1.4.2" />"'},"​",-1),U=e("code",null,".ping",-1),Z=e("p",null,[e("code",null,".ping"),o(" 海豹回复你一条消息。")],-1),F={class:"info custom-block"},H=a('<p class="custom-block-title">为什么要有这个指令？</p><p>对于绝大多数情况，这个指令似乎都没有实际作用。事实上，这个指令的存在是为了解决 <strong>QQ 官方 Bot 在频道私聊中</strong>的以下问题：</p><p>如果你向机器人连续发送 3 条频道私聊消息而没有收到回复，在机器人回复你之前，你将无法继续发送频道私聊消息。 而机器人并不会主动向你发送消息，这就造成了死锁。</p><p>此时，你可以在<strong>频道</strong>中向海豹核心发送 <code>.ping</code> 指令，海豹核心会在<strong>频道私聊</strong>中回复你，以打破死锁。</p>',4),K=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"提示"),e("p",null,"如果出现类似场景，可以发现 QQ 会提示你已经禁止再向骰子发送私聊消息，要求在骰子回应后才能再次发送。"),e("p",null,"但用户已经无法再通过私聊发送正确的指令，触发骰子的回应了。"),e("p",null,[o("此时，用户可以去频道公屏发送一个 "),e("code",null,".ping"),o(" 指令。")])],-1),X={id:"alias-定义快捷指令-使用快捷指令",tabindex:"-1"},ee=e("code",null,".alias",-1),te=e("code",null,".&",-1),oe=e("a",{class:"header-anchor",href:"#alias-定义快捷指令-使用快捷指令","aria-label":'Permalink to "`.alias` 定义快捷指令 & `.&` 使用快捷指令 <Badge type="tip" text="v1.4.3"/>"'},"​",-1),se=e("code",null,".alias",-1),ne=e("code",null,".&/.a <快捷指令>",-1),ce=a("<p><code>.alias &lt;别名&gt; &lt;指令&gt;</code> 将 <code>.&amp;&lt;别名&gt;</code> 定义为指定指令的快捷触发方式。在群聊中默认定义群快捷指令。</p><p><code>.alias --my &lt;别名&gt; &lt;指令&gt;</code> 将 <code>.&amp;&lt;别名&gt;</code> 定义为个人快捷指令。</p><p><code>.alias del/rm &lt;别名&gt;</code> 删除快捷指令。在群聊中默认删除群快捷指令。</p><p><code>.alias del/rm --my &lt;别名&gt;</code> 删除个人快捷指令。</p><p><code>.alias show/list</code> 显示目前可用的快捷指令。</p><p>使用快捷指令的方式如下，支持携带参数：</p><p><code>.&amp; &lt;别名&gt; [可能的参数]</code> 或 <code>.a &lt;别名&gt; [可能的参数]</code></p><p>海豹支持 <strong>个人快捷指令</strong> 和 <strong>群快捷指令</strong> 两种模式：</p><ul><li>个人快捷指令：与用户关联，定义后用户可以在私聊、骰子所在的所有群进行使用。</li><li>群快捷指令：与群关联，定义后该群内所有人都可以使用。</li></ul>",9),le={class:"info custom-block"},ae=e("p",{class:"custom-block-title"},"快捷指令示例",-1),de=a('<h2 id="额外-trpg-规则支持" tabindex="-1">额外 TRPG 规则支持 <a class="header-anchor" href="#额外-trpg-规则支持" aria-label="Permalink to &quot;额外 TRPG 规则支持&quot;">​</a></h2><h3 id="ww-wod-规则骰点" tabindex="-1"><code>.ww</code> WOD 规则骰点 <a class="header-anchor" href="#ww-wod-规则骰点" aria-label="Permalink to &quot;`.ww` WOD 规则骰点&quot;">​</a></h3><p><code>.ww &lt;表达式&gt;</code> 骰点，表达式用法请参考 <a href="./core.html#wod-骰点">核心指令</a> 节。</p><p>特别地，使用 <code>ww</code> 指令时允许省略加骰线 <code>aY</code>，这时将使用默认值进行骰点。</p>',4),_e={class:"info custom-block"},ie=e("p",{class:"custom-block-title"},"示例",-1),re=a("<p><code>.ww set &lt;默认值&gt;</code> 设定默认值，默认值可以由 加骰线 <code>aY</code>、骰子面数 <code>mZ</code>、成功线 <code>kN</code> 中的部分任意组合。默认值的生效范围是当前群组。</p><p><code>.ww set clr</code> 重置默认值为：加骰线 10、面数 10、成功线 8，即 <code>a10m10k8</code>。</p>",2),ue={class:"info custom-block"},pe=e("p",{class:"custom-block-title"},"示例",-1),he=a('<h3 id="dx-双重十字规则骰点" tabindex="-1"><code>.dx</code> 双重十字规则骰点 <a class="header-anchor" href="#dx-双重十字规则骰点" aria-label="Permalink to &quot;`.dx` 双重十字规则骰点&quot;">​</a></h3><p><code>.dx &lt;表达式&gt;</code> 骰点，表达式用法请参考 <a href="./core.html#双十字骰点">核心指令</a> 节。</p><h3 id="ek-共鸣性怪异规则骰点" tabindex="-1"><code>.ek</code> 共鸣性怪异规则骰点 <a class="header-anchor" href="#ek-共鸣性怪异规则骰点" aria-label="Permalink to &quot;`.ek` 共鸣性怪异规则骰点&quot;">​</a></h3><p><code>.ek &lt;技能名&gt;(+&lt;奖励骰&gt;) (&lt;判定线&gt;)</code></p><h3 id="ekgen-共鸣性怪异规则属性生成" tabindex="-1"><code>.ekgen</code> 共鸣性怪异规则属性生成 <a class="header-anchor" href="#ekgen-共鸣性怪异规则属性生成" aria-label="Permalink to &quot;`.ekgen` 共鸣性怪异规则属性生成&quot;">​</a></h3><p><code>.ekgen [&lt;数量&gt;]</code> 生成指定数量的共鸣性怪异角色属性。</p><h3 id="rsr-暗影狂奔规则骰点" tabindex="-1"><code>.rsr</code> 暗影狂奔规则骰点 <a class="header-anchor" href="#rsr-暗影狂奔规则骰点" aria-label="Permalink to &quot;`.rsr` 暗影狂奔规则骰点&quot;">​</a></h3><p><code>.rsr &lt;骰数&gt;</code> 骰点。</p><p>骰指定数量的 D6。每有一个骰子骰出 5 或 6 称为 1 成功度。</p><p>如果超过半数的骰子骰出 1，称为这次骰点「失误」；失误的同时成功度为 0，称为「严重失误」。</p>',10);function me(ge,be,fe,ke,Te,xe){const s=_("ChatBox"),c=_("Badge"),l=_("PluginTabsTab"),d=_("PluginTabs");return u(),r("div",null,[h,e("div",m,[g,t(s,{messages:[{content:".gugu",send:!0},{content:"🕊️:今天发版本，领导说发不完不让走"}]})]),b,e("div",f,[k,t(s,{messages:[{content:".gugu 来源",send:!0},{content:`🕊️: 前往了一个以前捕鲸的小岛度假~这里人很亲切！但是吃了这里的鱼肉料理之后有点晕晕的诶...想到前几天<木落>的短信，还是别追究他为什么不在了。
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
