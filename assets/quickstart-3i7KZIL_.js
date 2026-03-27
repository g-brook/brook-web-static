import{k as e,b as s,q as r}from"./index-CZ0jUvGp.js";const n={class:"prose prose-sm m-auto"},u={__name:"quickstart",setup(l,{expose:o}){return o({frontmatter:{}}),(a,t)=>(e(),s("div",n,[...t[0]||(t[0]=[r(`<h1>快速开始</h1><p>在 5 分钟内完成 Brook 的部署与运行。本指南参考 <a href="https://github.com/g-brook/brook">Brook GitHub 官方仓库</a> 的最新标准，并整合了详细的安装说明。</p><hr><h2>📥 第一步：获取程序</h2><h3>1. 在线一键安装 (推荐 Linux)</h3><p>如果您使用的是 Linux 系统，可以使用一键安装脚本快速部署：</p><pre><code class="language-bash">bash -c &quot;$(curl -fsSL https://www.gbrook.cc/install.sh)&quot;
</code></pre><h3>2. 手动下载安装</h3><p>请前往 <a href="https://github.com/g-brook/brook/releases">GitHub Releases</a> 下载适合您系统的预编译包：</p><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:left;">架构</th><th style="text-align:left;">文件名示例</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Linux</strong></td><td style="text-align:left;">x86_64 (amd64)</td><td style="text-align:left;"><code>brook-sev_Linux-x86_64(amd64).tar.gz</code></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">arm64</td><td style="text-align:left;"><code>brook-sev_Linux-arm64.tar.gz</code></td></tr><tr><td style="text-align:left;"><strong>macOS</strong></td><td style="text-align:left;">ARM64 (Apple M)</td><td style="text-align:left;"><code>brook-sev_macOS-ARM64(Apple-M).tar.gz</code></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">Intel</td><td style="text-align:left;"><code>brook-sev_macOS-Intel.tar.gz</code></td></tr><tr><td style="text-align:left;"><strong>Windows</strong></td><td style="text-align:left;">x86_64</td><td style="text-align:left;"><code>brook-sev_Windows-x86_64.tar.gz</code></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">arm64</td><td style="text-align:left;"><code>brook-sev_Windows-ARM64.tar.gz</code></td></tr></tbody></table><p>下载后，根据您的系统执行相应操作：</p><ul><li><p><strong>Linux / macOS</strong></p><ol><li>解压：<code>tar -xzf brook-sev_Linux-x86_64.tar.gz</code></li><li>(可选) 移动到系统路径：<code>sudo mv brook-sev /usr/local/bin/</code></li><li>赋予执行权限：<code>chmod +x /usr/local/bin/brook-sev</code></li></ol></li><li><p><strong>Windows</strong></p><ol><li>使用 7-Zip 或 WinRAR 解压 <code>.tar.gz</code> 包。</li><li>建议将解压后的 <code>brook-sev.exe</code> 所在目录添加到系统 <code>Path</code> 环境变量中，以便在任何位置调用。</li></ol></li></ul><hr><h2>🖥️ 第二步：服务端快速上手 (Server)</h2><h3>1. 解压并进入目录</h3><h4><strong>Linux / macOS</strong></h4><pre><code class="language-bash">mkdir -p ./brook-sev &amp;&amp; tar -xzf brook-sev_Linux-x86_64.tar.gz -C ./brook-sev
cd brook-sev
</code></pre><h4><strong>Windows</strong></h4><p>手动解压后，在 PowerShell 中进入目录：</p><pre><code class="language-powershell">cd C:\\path\\to\\brook-sev
</code></pre><h3>2. 编辑 server.json 配置文件</h3><pre><code class="language-json">{
  &quot;enableWeb&quot;: true,
  &quot;webPort&quot;: 8000,
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><h3>3. 启动服务端</h3><h4><strong>Linux / macOS</strong></h4><p><strong>前台启动 (用于调试):</strong></p><pre><code class="language-bash">chmod +x ./brook-sev
./brook-sev -c ./server.json
</code></pre><p>这会在当前终端运行 Brook，日志会直接输出到屏幕。关闭终端后程序会停止。</p><p><strong>后台启动 (推荐):</strong><code>brook-sev</code> 内置了完整的服务管理功能，可以一键安装、启动、停止和重启后台服务。该功能依赖 <code>systemd</code>，在大多数现代 Linux 发行版中都已内置。</p><ol><li><p><strong>安装服务</strong>: 首次使用时，执行以下命令将 Brook 安装为系统服务。它会自动创建 <code>brook-server.service</code> 文件并设置开机自启。</p><pre><code class="language-bash">sudo brook-sev install
</code></pre></li><li><p><strong>管理服务</strong>: 安装成功后，您就可以随时使用以下命令来管理服务了：</p><pre><code class="language-bash"># 启动后台服务
sudo brook-sev start

# 停止后台服务
sudo brook-sev stop

# 重启后台服务
sudo brook-sev restart
</code></pre></li></ol><div class="custom-container info"><span class="custom-container-title">提示</span><p>通过服务方式运行后，日志将由 <code>systemd</code> 的 <code>journald</code> 管理。您可以使用 <code>sudo journalctl -u brook-server -f</code> 来查看实时日志。</p></div><h4><strong>Windows (PowerShell)</strong></h4><p>您可以直接双击运行目录下的 <code>run.bat</code>（如果存在），或者在 PowerShell 中执行以下命令：</p><p><strong>标准启动（控制台）：</strong></p><pre><code class="language-powershell">.\\brook-sev.exe -c .\\server.json
</code></pre><p><strong>后台静默启动：</strong></p><pre><code class="language-powershell">.\\brook-sev.exe start
</code></pre><h3>4. 访问管理界面</h3><p>打开浏览器访问 <code>http://您的服务器IP:8000/index</code>。</p><p><strong>初始化流程：</strong></p><ol><li>设置管理员账号与密码。</li><li>登录后在 <strong>Settings → Token</strong> 中点击 <strong>Generate</strong> 生成 Token。</li></ol><hr><h2>💻 第三步：客户端快速上手 (Client)</h2><h3>1. 准备 client.json 配置文件</h3><p>您可以从服务端管理界面下载模板并修改，或手动创建：</p><pre><code class="language-json">{
   &quot;serverPort&quot;: 8909,
   &quot;serverHost&quot;: &quot;your_server_ip&quot;,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;your_secure_token&quot;,
  &quot;tunnels&quot;: [
    { &quot;type&quot;: &quot;tcp&quot;, &quot;destination&quot;: &quot;127.0.0.1:80&quot;, &quot;proxyId&quot;: &quot;web-service&quot; }
  ]
}
</code></pre><h3>2. 启动客户端</h3><pre><code class="language-bash">./brook-cli -c ./client.json
</code></pre><hr><h2>🏗️ (高级) 从源码构建</h2><p>如果您已经安装了 Go 环境 (建议 1.24+)，可以手动构建：</p><pre><code class="language-bash">git clone https://github.com/g-brook/brook.git
cd brook
# 构建服务端端(根据选择完成构建)
cd scmd
sh build.sh
# 构建客户端(根据选择完成构建)
cd ccmd
sh build.sh
</code></pre>`,51)])]))}};export{u as default};
