import{k as o,b as l,q as n}from"./index-CZ0jUvGp.js";const d={class:"prose prose-sm m-auto"},i={__name:"server",setup(s,{expose:e}){return e({frontmatter:{}}),(a,t)=>(o(),l("div",d,[...t[0]||(t[0]=[n(`<h1>服务端配置 (Server Configuration)</h1><p>服务端通过 <code>server.json</code> 文件进行配置。本页详细介绍了所有可用配置项及其含义。</p><hr><h2>📄 完整配置示例</h2><pre><code class="language-json">{
  &quot;enableWeb&quot;: true,
  &quot;webPort&quot;: 8000,
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><hr><h2>🛠️ 配置项说明</h2><h3>核心选项 (Core Options)</h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>enableWeb</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">是否启用 Web 管理面板</td></tr><tr><td style="text-align:left;"><code>webPort</code></td><td style="text-align:left;">integer</td><td style="text-align:left;"><code>8000</code></td><td style="text-align:left;">Web 管理面板的访问端口</td></tr><tr><td style="text-align:left;"><code>serverPort</code></td><td style="text-align:left;">integer</td><td style="text-align:left;"><code>8909</code></td><td style="text-align:left;">客户端连接端口</td></tr><tr><td style="text-align:left;"><code>tunnelPort</code></td><td style="text-align:left;">integer</td><td style="text-align:left;"><code>8919</code></td><td style="text-align:left;">隧道流量传输端口,默认是serverPort+10</td></tr></tbody></table><h3>日志选项 (Logger Options)</h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>logLevel</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;info&quot;</code></td><td style="text-align:left;">日志详细程度：<code>error</code>, <code>warn</code>, <code>info</code>, <code>debug</code></td></tr><tr><td style="text-align:left;"><code>logPath</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;./&quot;</code></td><td style="text-align:left;">日志文件存储目录</td></tr><tr><td style="text-align:left;"><code>outs</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;file&quot;</code></td><td style="text-align:left;">输出目标：<code>file</code> (文件), <code>stdout</code> (控制台),示例:<code>file,stdout</code>多个使用逗号分隔</td></tr></tbody></table><hr><h2>📦 最小配置示例</h2><p>对于快速上手，仅需以下字段即可启动：</p><pre><code class="language-json">{
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;&quot;
}
</code></pre><hr><h2>💡 端口配置建议</h2><div class="custom-container info"><span class="custom-container-title">端口选择</span><ul><li><strong>webPort</strong>: 建议使用 8000 或 1024 以上的端口。避免使用系统常用端口。</li><li><strong>serverPort</strong>: 客户端连接的端口。必须在防火墙中开放，确保外网可访问。</li><li><strong>tunnelPort</strong>: 隧道流量传输的端口。同样需要在防火墙中开放。</li></ul></div><div class="custom-container warning"><span class="custom-container-title">端口冲突</span><p>如果您看到 <code>address already in use</code> 错误，请检查是否有其他进程占用了该端口：</p><pre><code class="language-bash">sudo lsof -i :8909
# 或者
sudo netstat -tlnp | grep 8909
</code></pre></div><hr><h2>🐚 环境变量 (Environment Variables)</h2><p>您可以使用环境变量覆盖配置文件中的值：</p><pre><code class="language-bash">BROOK_SERVER_PORT=9090 ./brook-sev -c ./server.json
BROOK_WEB_PORT=9000 ./brook-sev -c ./server.json
</code></pre><hr><h2>👯 运行多个实例</h2><p>要在同一台机器上运行多个 Brook 服务端实例，请为每个实例准备不同的配置文件，并确保端口不冲突：</p><pre><code class="language-bash"># 实例 1
./brook-sev -c ./server-1.json

# 实例 2 (使用不同的端口)
./brook-sev -c ./server-2.json
</code></pre>`,27)])]))}};export{i as default};
