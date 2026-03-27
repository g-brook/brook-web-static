import{k as e,b as s,q as r}from"./index-CZ0jUvGp.js";const n={class:"prose prose-sm m-auto"},p={__name:"auto-start",setup(c,{expose:o}){return o({frontmatter:{}}),(a,t)=>(e(),s("div",n,[...t[0]||(t[0]=[r(`<h1>开机自启动 (Auto-Start)</h1><p>本指南介绍如何在 Linux 和 macOS 系统上配置 Brook 随系统自动启动。</p><hr><h2>🐧 Linux (systemd)</h2><p>在大多数现代 Linux 发行版（如 Ubuntu, Debian, CentOS）中，Brook 可以通过内置命令一键安装为 <code>systemd</code> 服务，实现开机自启动。</p><h3>1. 一键安装服务</h3><p>执行以下命令，Brook 会自动在 <code>/etc/systemd/system/</code> 目录下创建 <code>brook-server.service</code> 文件，并设置开机自启。</p><pre><code class="language-bash">sudo brook-sev install
</code></pre><div class="custom-container info"><span class="custom-container-title">提示</span><p>该命令是幂等的。如果服务已存在，它会先停止并移除旧的服务，再重新安装。</p></div><h3>2. 管理服务</h3><p>安装成功后，您可以使用 <code>brook-sev</code> 的内置命令或 <code>systemctl</code> 来管理服务：</p><p><strong>使用 <code>brook-sev</code> (推荐):</strong></p><pre><code class="language-bash">sudo brook-sev start
sudo brook-sev stop
sudo brook-sev restart
</code></pre><p><strong>使用 <code>systemctl</code>:</strong></p><pre><code class="language-bash">sudo systemctl start brook-server
sudo systemctl stop brook-server
sudo systemctl restart brook-server
sudo systemctl status brook-server
</code></pre><h3>3. 查看日志</h3><p>通过 <code>systemd</code> 运行时，日志由 <code>journald</code> 统一管理：</p><pre><code class="language-bash"># 查看实时日志
sudo journalctl -u brook-server -f

# 查看最后 100 行日志
sudo journalctl -u brook-server -n 100
</code></pre><h3>4. 卸载服务</h3><p>如果您不再需要开机自启，可以执行以下命令来卸载服务：</p><pre><code class="language-bash">sudo brook-sev uninstall
</code></pre><hr><h2>💻 客户端自启动 (Client)</h2><p>客户端的配置过程与服务端完全相同，只需将命令中的 <code>brook-sev</code> 替换为 <code>brook-cli</code> 即可：</p><pre><code class="language-bash"># 安装客户端服务
sudo brook-cli install

# 启动客户端服务
sudo brook-cli start
</code></pre><hr><h2>🍎 macOS (launchd)</h2><p>对于 macOS 用户，建议使用 <code>launchd</code> 进行管理。</p><h3>1. 创建 Plist 文件</h3><p>创建并编辑 <code>~/Library/LaunchAgents/cc.gbrook.server.plist</code>：</p><pre><code class="language-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;
&lt;plist version=&quot;1.0&quot;&gt;
&lt;dict&gt;
  &lt;key&gt;Label&lt;/key&gt;
  &lt;string&gt;cc.gbrook.server&lt;/string&gt;
  &lt;key&gt;ProgramArguments&lt;/key&gt;
  &lt;array&gt;
    &lt;string&gt;/usr/local/bin/brook-sev&lt;/string&gt;
    &lt;string&gt;-c&lt;/string&gt;
    &lt;string&gt;/usr/local/etc/brook/server.json&lt;/string&gt;
  &lt;/array&gt;
  &lt;key&gt;RunAtLoad&lt;/key&gt;
  &lt;true/&gt;
  &lt;key&gt;KeepAlive&lt;/key&gt;
  &lt;true/&gt;
&lt;/dict&gt;
&lt;/plist&gt;
</code></pre><h3>2. 加载服务</h3><pre><code class="language-bash">launchctl load ~/Library/LaunchAgents/cc.gbrook.server.plist
</code></pre><div class="custom-container info"><span class="custom-container-title">提示</span><p>确保 Plist 文件中指定的程序路径和配置文件路径是正确的。</p></div>`,34)])]))}};export{p as default};
