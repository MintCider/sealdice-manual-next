import{_ as a,c as s,o as i,a7 as t}from"./chunks/framework.CaWer6uY.js";const F=JSON.parse('{"title":"迁移","description":"","frontmatter":{"lang":"zh-cn","title":"迁移"},"headers":[],"relativePath":"deploy/transfer.md","filePath":"deploy/transfer.md","lastUpdated":1712309998000}'),e={name:"deploy/transfer.md"},n=t(`<h1 id="迁移" tabindex="-1">迁移 <a class="header-anchor" href="#迁移" aria-label="Permalink to &quot;迁移&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将会指导你如何迁移现有的海豹核心。</p></div><p>海豹核心的数据文件全平台通用。因此，在不同平台间迁移时，你只需要准备每个平台的可执行文件。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>在进行任何迁移时，你都应<strong>确保</strong>迁出和迁入的海豹核心都<strong>未在运行</strong>，否则可能造成不可逆的数据损坏。</p></div><h2 id="相同平台间迁移" tabindex="-1">相同平台间迁移 <a class="header-anchor" href="#相同平台间迁移" aria-label="Permalink to &quot;相同平台间迁移&quot;">​</a></h2><p>将整个海豹核心目录复制到新的位置即可。</p><p>如果目录体积较大，你可以自行删除 <code>backups/</code> 下的备份文件。这不会造成数据损失。</p><h2 id="跨平台迁移" tabindex="-1">跨平台迁移 <a class="header-anchor" href="#跨平台迁移" aria-label="Permalink to &quot;跨平台迁移&quot;">​</a></h2><p>跨平台迁移时不能使用旧的可执行文件，而只迁移数据部分。</p><p>将迁出海豹核心中的 <code>data/</code> 目录以你习惯的任何方式打包。</p><p>在迁入平台准备一份全新的海豹核心，用打包的数据覆盖迁入海豹的对应目录。</p><p>如果你希望保留旧的备份文件，你可以复制迁出海豹 <code>backups/</code> 目录中的内容，放置于迁入海豹的对应目录。备份文件也是通用的。</p><h3 id="linux-服务器间跨架构迁移-arm64-→-amd64" tabindex="-1">Linux 服务器间跨架构迁移（arm64 → amd64） <a class="header-anchor" href="#linux-服务器间跨架构迁移-arm64-→-amd64" aria-label="Permalink to &quot;Linux 服务器间跨架构迁移（arm64 → amd64）&quot;">​</a></h3><p>步骤与普通跨平台迁移一致。在运行新海豹核心时，如果文件权限不正确，可以在海豹核心目录下执行以下两条命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 644</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span></span></code></pre></div><h2 id="迁移数据到手机" tabindex="-1">迁移数据到手机 <a class="header-anchor" href="#迁移数据到手机" aria-label="Permalink to &quot;迁移数据到手机&quot;">​</a></h2><p>如果你需要把电脑海豹的数据迁移到手机海豹上，同样是迁移海豹的 <code>data/</code> 目录。步骤如下：</p><ol><li>关闭你的电脑海豹，复制电脑海豹的 <code>data/</code> 目录发送到手机上。</li><li>点击手机海豹的 <strong>导出数据</strong> 按钮，在设置中勾选 <strong>文件同步模式</strong>。（平时推荐关闭这个选项，这里是为了替换数据库特别地需要开启）</li><li>在你习惯的手机文件管理软件中找到 <code>根目录/document/com.sealdice.dice/sealdice</code>，用迁出海豹的 data 目录替换这里面的 data 目录。</li><li>回到手机海豹的界面中点击 <strong>导入数据</strong>。导入完成后再点击启动核心，这时你的手机海豹里就应该是旧海豹的数据了。导入完成后也可以把「文件同步模式」关闭了。</li></ol><div class="warning custom-block"><p class="custom-block-title">注意</p><p>在手机海豹上，每次导入数据前都进行一次导出，导出后不要再运行海豹核心。</p><p>这是因为，手机海豹<strong>不会</strong>实时更新导出的文件，它们是海豹数据在导出时的一份快照。</p><p>如果在上次导出后产生了新数据，而再次进行导入，会导致新产生的数据被之前导出的数据覆盖，丢失这段时间以来录入的角色卡、Log、修改的自定义文案等海豹内部的数据。</p></div>`,19),l=[n];function p(o,d,h,r,c,k){return i(),s("div",null,l)}const m=a(e,[["render",p]]);export{F as __pageData,m as default};
