import{_ as s,c as a,o as i,a7 as e}from"./chunks/framework.CaWer6uY.js";const E=JSON.parse('{"title":"QQ - Docker 中的海豹","description":"","frontmatter":{"lang":"zh-cn","title":"QQ - Docker 中的海豹"},"headers":[],"relativePath":"deploy/platform-qq-docker.md","filePath":"deploy/platform-qq-docker.md","lastUpdated":1719148816000}'),n={name:"deploy/platform-qq-docker.md"},l=e(`<h1 id="qq-docker-中的海豹" tabindex="-1">QQ - Docker 中的海豹 <a class="header-anchor" href="#qq-docker-中的海豹" aria-label="Permalink to &quot;QQ - Docker 中的海豹&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将包含通过 docker 部署海豹时，你在 QQ 平台接入海豹核心需要了解的特定内容。</p><p>请至少完成 <a href="./platform-qq.html">QQ</a> 一节中，<a href="./platform-qq.html#前言">前言</a>部分的阅读。</p><p>本节假定你对 <code>docker</code> 与 <code>docker compose</code> 有足够的了解。</p></div><h2 id="通过-docker-compose-同时部署海豹与-lagrange" tabindex="-1">通过 <code>docker compose</code> 同时部署海豹与 Lagrange <a class="header-anchor" href="#通过-docker-compose-同时部署海豹与-lagrange" aria-label="Permalink to &quot;通过 \`docker compose\` 同时部署海豹与 Lagrange&quot;">​</a></h2><p>通过此方式部署的海豹与 Lagrange 容器共同构成一个服务栈，可以方便地进行集中管理。请首先阅读 <a href="./platform-qq.html">QQ</a> 一节中，<a href="./platform-qq.html#lagrange">Lagrange</a> 部分，大致了解 Lagrange 的部署过程。</p><h3 id="创建-docker-compose-yml" tabindex="-1">创建 <code>docker-compose.yml</code> <a class="header-anchor" href="#创建-docker-compose-yml" aria-label="Permalink to &quot;创建 \`docker-compose.yml\`&quot;">​</a></h3><p>首先，在工作目录下创建 <code>docker-compose.yml</code> 文件，并填入以下内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sealdice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sealdice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/sealdice/sealdice:edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3211:3211</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_data:/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_backups:/backups</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lagrange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/lagrangedev/lagrange.onebot:edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./lagrange_data:/app/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_data:/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span></code></pre></div><p>此文件参考了<a href="./quick-start.html#启动">通过 docker 部署海豹</a>与<a href="https://github.com/LagrangeDev/Lagrange.Core/blob/master/Docker.md?tab=readme-ov-file" target="_blank" rel="noreferrer">通过 docker 部署 Lagrange</a> 相关内容。</p><p>此文件将宿主机 3211 端口映射到海豹容器的 3211 端口，如有需要，请根据实际情况自行调整端口映射。</p><p>此文件将工作目录下 <code>seal_data</code> 与 <code>seal_backups</code> 目录分别挂载到海豹容器的 <code>/data</code> 与 <code>/backups</code> 目录，并将 <code>lagrange_data</code> 与 <code>seal_data</code> 目录分别挂载到 Lagrange 容器的 <code>/app/data</code> 与 <code>/data</code> 目录。由于通过 QQ 后端发送本地图片时，海豹会将图片<strong>在容器内</strong>的绝对路径传递给 QQ 后端，所以需要将海豹数据也挂载到 Lagrange 容器以使 Lagrange 得以访问图片。如有需要，请根据实际情况自行调整挂载的目录。</p><div class="warning custom-block"><p class="custom-block-title">注意：在容器内以非 root 用户执行海豹进程可能会导致一些权限问题。</p><p>因此，示例文件以 root 用户生成容器进程。后续需要修改 <code>seal_data</code>、<code>seal_backups</code> 及 <code>lagrange_data</code> 目录中的内容（包括 Lagrange 配置文件、海豹数据等）时，需要 root 权限。</p></div><details class="details custom-block"><summary>补充：登录多个 QQ 账号</summary><p>只需简单修改 <code>docker-compose.yml</code> 即可登录到多个 QQ 号：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sealdice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  sealdice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/sealdice/sealdice:edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3211:3211</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_data:/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_backups:/backups</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lagrange-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/lagrangedev/lagrange.onebot:edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./lagrange_data_1:/app/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_data:/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  lagrange-2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ghcr.io/lagrangedev/lagrange.onebot:edge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./lagrange_data_2:/app/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./seal_data:/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span></code></pre></div><p>分别对每个 Lagrange 容器完成下述配置文件修改及扫码登录过程，并在下述海豹连接 Lagrange 填写 WS 地址时，将 <code>{Host}</code> 分别填入 <code>lagrange-1</code>、<code>lagrange-2</code> 即可。</p></details><h3 id="首次启动容器" tabindex="-1">首次启动容器 <a class="header-anchor" href="#首次启动容器" aria-label="Permalink to &quot;首次启动容器&quot;">​</a></h3><p>在工作目录下使用以下命令启动容器：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p>首次启动容器后，<code>docker compose</code> 会自动创建 <code>seal_data</code>、<code>seal_backups</code> 以及 <code>lagrange_data</code> 目录。</p><h3 id="lagrange-容器配置" tabindex="-1">Lagrange 容器配置 <a class="header-anchor" href="#lagrange-容器配置" aria-label="Permalink to &quot;Lagrange 容器配置&quot;">​</a></h3><p>首先使用以下命令停止容器运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span></code></pre></div><p>随后，按照 <a href="./platform-qq.html">QQ</a> 一节中<a href="./platform-qq.html#运行-lagrange">运行 Lagrange</a> 部分修改 <code>lagrange_data/appsettings.json</code> 文件。需要特别注意的是，为了允许海豹容器正常访问 Lagrange 端口，需要将监听地址修改为 <code>0.0.0.0</code>：</p><p><code>appsettings.json</code>：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Implementations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ForwardWebSocket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;Port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8081</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;HeartBeatInterval&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;AccessToken&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>随后，通过 <code>docker compose up -d</code> 重新启动容器。通过 <code>docker compose logs lagrange</code> 访问 Lagrange 容器的日志，在日志中即可看到 QQ 登录二维码。同时 <code>lagrange_data/qr-0.png</code> 也是登录二维码。选择任一方式，尽快使用手机 QQ 扫码连接。</p><h3 id="海豹连接-lagrange" tabindex="-1">海豹连接 Lagrange <a class="header-anchor" href="#海豹连接-lagrange" aria-label="Permalink to &quot;海豹连接 Lagrange&quot;">​</a></h3><p>请参见 <a href="./platform-qq.html">QQ</a> 一节中<a href="./platform-qq.html#海豹连接-lagrange">海豹连接 Lagrange</a> 部分。在填写 WS 正向服务地址 <code>ws://{Host}:{Port}</code> 时，<code>{Host}</code> 填写为 <code>lagrange</code> 即可，如果配置了多个 Lagrange 容器，填入对应服务的名称，<code>docker compose</code> 会自动处理主机名解析。<code>{Port}</code> 正常填写配置文件中设定的监听地址，在上文的例子中为 8081。</p><h3 id="更新海豹容器或-lagrange-容器" tabindex="-1">更新海豹容器或 Lagrange 容器 <a class="header-anchor" href="#更新海豹容器或-lagrange-容器" aria-label="Permalink to &quot;更新海豹容器或 Lagrange 容器&quot;">​</a></h3><p>运行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p>当任一镜像有更新时，以上命令会完成容器更新。</p><h2 id="连接到宿主机上的-qq-后端" tabindex="-1">连接到宿主机上的 QQ 后端 <a class="header-anchor" href="#连接到宿主机上的-qq-后端" aria-label="Permalink to &quot;连接到宿主机上的 QQ 后端&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意：此种部署方式可能不能正常发送本地图片。</p><p>由于通过 QQ 后端发送本地图片时，海豹会将图片<strong>在容器内</strong>的绝对路径传递给 QQ 后端。宿主机上的 QQ 后端无法正确解析海豹数据目录的路径，因此可能无法正常发送图片。</p></div><p>首先按照 <a href="./platform-qq.html">QQ</a> 一节中的介绍，完成 QQ 后端的配置。</p><p>Docker 自动为容器构建了一个子网，容器默认接入此网络，并通过端口映射将容器端口暴露在宿主机。因此，容器中的海豹不能直接访问宿主机监听本地端口的 QQ 后端。需要连接时，有两种解决方案。</p><h3 id="保持容器与宿主机网络隔离" tabindex="-1">保持容器与宿主机网络隔离 <a class="header-anchor" href="#保持容器与宿主机网络隔离" aria-label="Permalink to &quot;保持容器与宿主机网络隔离&quot;">​</a></h3><p>Docker 为宿主机也分配了子网中的 IP，可以通过 <code>ip a</code> 等命令查看。例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">9:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker0:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NO-CARRIER,BROADCAST,MULTICAST,U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mtu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1500</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qdisc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noqueue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DOWN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    link/ether</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 02:42:33:50:ca:2d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ff:ff:ff:ff:ff:ff</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    inet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 172.17.0.1/16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 172.17.255.255</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scope</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       valid_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preferred_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forever</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    inet6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fe80::42:33ff:fe50:ca2d/64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scope</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kernel_ll</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       valid_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preferred_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forever</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>其中 <code>172.17.0.1</code> 为宿主机在 docker 子网中的 IP。</p><p>此时，首先修改 QQ 后端的监听设置，以确保其接受任何来源的连接（例如将 <code>127.0.0.1</code> 修改为 <code>0.0.0.0</code>），然后在配置海豹时，<code>{Host}</code> 填入宿主机在 docker 子网中的 IP（本例中为 <code>172.17.0.1</code>）。</p><h3 id="配置容器使用宿主机网络" tabindex="-1">配置容器使用宿主机网络 <a class="header-anchor" href="#配置容器使用宿主机网络" aria-label="Permalink to &quot;配置容器使用宿主机网络&quot;">​</a></h3><p>通过将 <code>docker run</code> 命令中的 <code>-p ...</code> 替换为 <code>--network host</code>，或在 <code>docker-compose.yml</code> 文件中将 <code>ports: ...</code> 替换为 <code>network_mode: host</code>，即可令容器使用宿主机网络。此时，在配置海豹时，<code>{Host}</code> 写为类似 <code>127.0.0.1</code> 或 <code>localhost</code> 即可正常访问监听本地端口的 QQ 后端。</p>`,40),p=[l];function t(h,k,d,r,o,c){return i(),a("div",null,p)}const F=s(n,[["render",t]]);export{E as __pageData,F as default};
