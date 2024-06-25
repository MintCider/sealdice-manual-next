import{_ as t,c as d,o as e,a7 as o}from"./chunks/framework.CaWer6uY.js";const m=JSON.parse('{"title":"快速上手","description":"","frontmatter":{"lang":"zh-cn","title":"快速上手"},"headers":[],"relativePath":"use/quick-start.md","filePath":"use/quick-start.md","lastUpdated":1718381802000}'),c={name:"use/quick-start.md"},a=o('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将展示 TRPG 跑团过程玩家使用海豹骰的常用指令和一般流程，请善用搜索，按需阅读文档。</p></div><h2 id="常用指令速查" tabindex="-1">常用指令速查 <a class="header-anchor" href="#常用指令速查" aria-label="Permalink to &quot;常用指令速查&quot;">​</a></h2><details class="details custom-block"><summary>核心指令</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>移出骰子</td><td><code>.bot bye / .dismiss</code></td></tr><tr><td>开关骰子</td><td><code>.bot on/off</code></td></tr><tr><td>开关自定义回复</td><td><code>.reply on/off</code></td></tr><tr><td>新建日志</td><td><code>.log new &lt;日志名&gt;</code></td></tr><tr><td>暂停/恢复日志记录</td><td><code>.log off/on</code></td></tr><tr><td>结束并获取日志</td><td><code>.log end</code></td></tr><tr><td>重新获取日志</td><td><code>.log get &lt;日志名&gt;</code></td></tr></tbody></table></details><details class="details custom-block"><summary>掷骰</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>掷骰</td><td><code>.r &lt;x&gt;d&lt;y&gt;</code>，并有诸多扩展写法</td></tr><tr><td>检定</td><td><code>.ra &lt;技能&gt;</code></td></tr><tr><td>暗骰 / 暗中检定</td><td><code>.rh &lt;x&gt;d&lt;y&gt;</code> / <code>.rah &lt;技能&gt;</code></td></tr><tr><td>代替检定</td><td><code>.ra &lt;技能&gt; @代替目标</code></td></tr><tr><td>设定默认骰子面数</td><td><code>.set &lt;面数&gt;</code></td></tr></tbody></table></details><details class="details custom-block"><summary>角色卡</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>新建空白卡</td><td><code>.pc new &lt;角色名&gt;</code></td></tr><tr><td>修改角色名</td><td><code>.nn &lt;角色名&gt;</code></td></tr><tr><td>录入数据</td><td><code>.st &lt;属性&gt;&lt;值&gt;</code></td></tr><tr><td>列出数据</td><td><code>.st show [&lt;属性&gt;]</code></td></tr><tr><td>列出角色卡</td><td><code>.pc list</code></td></tr><tr><td>绑定角色卡</td><td><code>.pc tag &lt;角色名&gt;</code></td></tr><tr><td>删除角色卡</td><td><code>.pc del &lt;角色名&gt;</code></td></tr><tr><td>自动名片</td><td><code>.sn</code> （参考说明）</td></tr></tbody></table></details><details class="details custom-block"><summary>CoC 7th</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>切换到 CoC 规则</td><td><code>.set coc</code></td></tr><tr><td>生成随机属性数值</td><td><code>.coc &lt;数量&gt;</code></td></tr><tr><td>理智检定</td><td><code>.sc &lt;成功时失去理智&gt;/&lt;失败时失去理智&gt;</code></td></tr><tr><td>对抗检定</td><td><code>.rav &lt;自身技能&gt; &lt;对手技能&gt; @对手</code></td></tr><tr><td>奖励骰与惩罚骰</td><td><code>.ra (b|p)&lt;数量&gt; &lt;技能&gt;</code></td></tr><tr><td>疯狂症状</td><td><code>.ti</code> 即时疯狂症状，<code>.li</code> 总结性疯狂症状</td></tr><tr><td>技能成长</td><td><code>.en &lt;技能&gt;</code></td></tr><tr><td>切换房规</td><td><code>.setcoc details</code> 列出房规，<code>.setcoc &lt;序号&gt;</code> 设定房规</td></tr></tbody></table></details><details class="details custom-block"><summary>D&amp;D 5E</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>切换到 D&amp;D 规则</td><td><code>.set dnd</code></td></tr><tr><td>生成随机属性值</td><td><code>.dnd &lt;数量&gt;</code></td></tr><tr><td>优势/劣势掷骰</td><td><code>.r d(优势|劣势)</code></td></tr><tr><td>检定</td><td><code>.rc [优势|劣势] &lt;技能&gt;[+&lt;调整值&gt;]</code></td></tr><tr><td>先攻</td><td><code>.ri (&lt;角色名&gt;)</code></td></tr><tr><td>先攻列表</td><td><code>.init</code></td></tr><tr><td>随机 D&amp;D 名字</td><td><code>.namednd &lt;种族&gt; &lt;数量&gt;</code></td></tr></tbody></table></details><details class="details custom-block"><summary>其它</summary><table tabindex="0"><thead><tr><th>动作</th><th>指令</th></tr></thead><tbody><tr><td>给骰主发送消息</td><td><code>.send &lt;消息&gt;</code></td></tr><tr><td>获取帮助</td><td><code>.help &lt;指令名称&gt;</code></td></tr><tr><td>搜索词条</td><td><code>.find &lt;关键字&gt;</code></td></tr><tr><td>暗影狂奔掷骰</td><td><code>.rsr</code></td></tr><tr><td>WoD 掷骰</td><td><code>.ww</code></td></tr><tr><td>双十字掷骰</td><td><code>.dx</code></td></tr><tr><td>共鸣性怪异掷骰 / 生成属性</td><td><code>.ek</code> / <code>.ekgen</code></td></tr></tbody></table></details><h2 id="通常流程" tabindex="-1">通常流程 <a class="header-anchor" href="#通常流程" aria-label="Permalink to &quot;通常流程&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">玩家视角</p><p>这一段落是以玩家视角而非主持人视角编写的。</p><p>如果你想主持游戏，我们推荐你较为完整地了解海豹核心提供的各种指令，尤其是 CoC 指令与 D&amp;D 指令相冲突的部分。</p></div><p>游戏主持人邀请你进入群聊（根据平台不同，也可能是频道、服务器等，本节以群聊代称）。</p><div class="tip custom-block"><p class="custom-block-title">提示：尊重主持人与其他玩家</p><p>如果你对于玩法还不熟悉，在主持人要求你使用骰子时才动作，或者在动作前请求主持人的许可。</p></div><p>你可能用到以下指令：</p><ul><li><code>nn</code> 命名角色卡</li><li><code>st</code> 设置和修改角色卡属性</li><li><code>sn</code> 设置自动名片</li><li><code>r</code> 掷骰：需要产生一个随机数的时候，例如伤害值</li><li><code>ra</code>/<code>rc</code> 检定：你使用一个技能</li><li>根据你使用的规则，你还可能用到其他指令，请参考下面的段落。</li></ul><p>如果还需要使用这张人物卡，并且不在这个群聊使用：</p><ul><li><code>pc save</code> 保存到角色卡列表</li><li>你还会用到其他指令才能在其他群聊使用这张角色卡。参考 <code>.pc help</code></li></ul><h3 id="秘密团" tabindex="-1">秘密团 <a class="header-anchor" href="#秘密团" aria-label="Permalink to &quot;秘密团&quot;">​</a></h3><p>按照主持人的要求，你需要在不同群聊中使用同一角色卡，并且需要数据互相同步。</p><ul><li><code>pc new &lt;角色名&gt;</code> 创建一张可以跨群聊使用的角色卡并绑定到当前群聊</li><li><code>pc tag &lt;角色名&gt;</code> 将指定角色卡绑定到当前群聊</li></ul><p>通过这种方式，你可在不同群聊之间使用同一角色卡。在任意群聊产生的数据修改都会自动同步到其他绑定的群聊。</p><h3 id="进行-coc-游戏" tabindex="-1">进行 CoC 游戏 <a class="header-anchor" href="#进行-coc-游戏" aria-label="Permalink to &quot;进行 CoC 游戏&quot;">​</a></h3><h4 id="创作角色卡" tabindex="-1">创作角色卡 <a class="header-anchor" href="#创作角色卡" aria-label="Permalink to &quot;创作角色卡&quot;">​</a></h4><p><code>.coc &lt;数量&gt;</code> 生成指定数量的随机属性。</p><h4 id="理智检定-san-check" tabindex="-1">理智检定 San Check <a class="header-anchor" href="#理智检定-san-check" aria-label="Permalink to &quot;理智检定 San Check&quot;">​</a></h4><p><code>.sc &lt;成功时失去理智&gt;/&lt;失败时失去理智&gt;</code></p><p>例如：<code>.sc 0/1</code> <code>.sc 1/1d4</code> <code>.sc 1d10/1d100</code>。</p><h4 id="抽取疯狂症状" tabindex="-1">抽取疯狂症状 <a class="header-anchor" href="#抽取疯狂症状" aria-label="Permalink to &quot;抽取疯狂症状&quot;">​</a></h4><p><code>.ti</code> 抽取即时疯狂症状；</p><p>或者，在主持人要求时 <code>.li</code> 抽取总结性疯狂症状。</p><h4 id="技能成长" tabindex="-1">技能成长 <a class="header-anchor" href="#技能成长" aria-label="Permalink to &quot;技能成长&quot;">​</a></h4><p><code>.en &lt;技能&gt;</code> 对技能进行一次成长。</p><h3 id="进行-d-d-游戏" tabindex="-1">进行 D&amp;D 游戏 <a class="header-anchor" href="#进行-d-d-游戏" aria-label="Permalink to &quot;进行 D&amp;D 游戏&quot;">​</a></h3><h4 id="创作角色卡-1" tabindex="-1">创作角色卡 <a class="header-anchor" href="#创作角色卡-1" aria-label="Permalink to &quot;创作角色卡&quot;">​</a></h4><p><code>.dnd &lt;数量&gt;</code> 生成指定数量的随机属性。</p><h4 id="设定先攻值" tabindex="-1">设定先攻值 <a class="header-anchor" href="#设定先攻值" aria-label="Permalink to &quot;设定先攻值&quot;">​</a></h4><p><code>.ri &lt;先攻值&gt;</code> 设定自己的先攻值。</p><p>先攻值支持以下三种写法：</p><ol><li><code>12</code> 直接写数值</li><li><code>+2</code> 写调整值，表示 <code>D20+2</code></li><li><code>=D20+2</code> 写骰点式</li></ol><h4 id="设定临时属性" tabindex="-1">设定临时属性 <a class="header-anchor" href="#设定临时属性" aria-label="Permalink to &quot;设定临时属性&quot;">​</a></h4><p><code>.buff &lt;参数&gt;</code> 设定临时属性。参数的写法参考角色数据录入的 <code>st</code> 指令。</p><h4 id="法术位" tabindex="-1">法术位 <a class="header-anchor" href="#法术位" aria-label="Permalink to &quot;法术位&quot;">​</a></h4><p><code>.ss</code> 指令设定角色的法术位。请使用 <code>.ss help</code> 查看用法。</p><p><code>.cast</code> 指令使用法术。请使用 <code>.cast help</code> 查看用法。</p><h4 id="长休" tabindex="-1">长休 <a class="header-anchor" href="#长休" aria-label="Permalink to &quot;长休&quot;">​</a></h4><p><code>.longrest</code> 指令使角色进行长休。</p><h4 id="死亡豁免" tabindex="-1">死亡豁免 <a class="header-anchor" href="#死亡豁免" aria-label="Permalink to &quot;死亡豁免&quot;">​</a></h4><p><code>.ds</code> 指令进行死亡豁免。请使用 <code>.ds help</code> 查看用法。</p>',48),r=[a];function l(s,i,h,n,p,b){return e(),d("div",null,r)}const g=t(c,[["render",l]]);export{m as __pageData,g as default};
