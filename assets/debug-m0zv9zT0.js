import{k as o,b as n,q as d}from"./index-CZ0jUvGp.js";const l={class:"prose prose-sm m-auto"},g={__name:"debug",setup(s,{expose:e}){return e({frontmatter:{}}),(c,t)=>(o(),n("div",l,[...t[0]||(t[0]=[d(`<h1>调试模式 (Debug Mode)</h1><p>当遇到连接问题或运行异常时，启用调试模式可以获取详细的诊断信息，帮助您快速定位故障。</p><hr><h2>🛠️ 启用调试模式</h2><p>在配置文件（<code>server.json</code> 或 <code>client.json</code>）中将 <code>logLevel</code> 设置为 <code>&quot;debug&quot;</code>：</p><pre><code class="language-json">{
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;debug&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><hr><h2>📊 日志级别说明</h2><table><thead><tr><th style="text-align:left;">级别</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>error</code></td><td style="text-align:left;">仅记录关键错误</td></tr><tr><td style="text-align:left;"><code>warn</code></td><td style="text-align:left;">记录警告和错误</td></tr><tr><td style="text-align:left;"><code>info</code></td><td style="text-align:left;">记录常规运行信息（默认）</td></tr><tr><td style="text-align:left;"><code>debug</code></td><td style="text-align:left;">记录最详细的诊断信息</td></tr></tbody></table><hr><h2>📂 日志输出选项</h2><p><code>outs</code> 字段控制日志的输出位置：</p><table><thead><tr><th style="text-align:left;">取值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&quot;file&quot;</code></td><td style="text-align:left;">写入 <code>logPath</code> 指定的日志文件</td></tr><tr><td style="text-align:left;"><code>&quot;stdout&quot;</code></td><td style="text-align:left;">输出到标准输出（控制台）</td></tr><tr><td style="text-align:left;"><code>&quot;both&quot;</code></td><td style="text-align:left;">同时写入文件和输出到控制台</td></tr></tbody></table><hr><h2>🔍 阅读调试日志</h2><pre><code class="language-bash"># 实时滚动查看日志文件
tail -f ./brook-sev.log

# 过滤特定关键字
grep &quot;TUNNEL&quot; ./brook-sev.log
grep &quot;ERROR&quot; ./brook-sev.log
grep &quot;connection&quot; ./brook-sev.log
</code></pre><hr><h2>💡 常见调试场景</h2><h3>1. 连接被拒绝 (Connection Refused)</h3><p><strong>日志示例：</strong></p><pre><code class="language-text">[DEBUG] Attempting connection to 192.168.1.100:8909
[ERROR] Connection refused: dial tcp 192.168.1.100:8909: connect: connection refused
</code></pre><p><strong>解决方案：</strong> 检查服务端程序是否正在运行，以及防火墙是否开放了对应端口。</p><h3>2. 身份验证失败 (Authentication Failed)</h3><p><strong>日志示例：</strong></p><pre><code class="language-text">[DEBUG] Sending authentication token
[ERROR] Authentication failed: invalid token
</code></pre><p><strong>解决方案：</strong> 核对 <code>client.json</code> 中的 <code>token</code> 是否与服务端 Web 面板中生成的 Token 完全一致。</p><h3>3. 端口已被占用 (Port Already in Use)</h3><p><strong>日志示例：</strong></p><pre><code class="language-text">[ERROR] Failed to bind port 8909: address already in use
</code></pre><p><strong>解决方案：</strong> 查找并停止占用该端口的进程：</p><pre><code class="language-bash">sudo lsof -i :8909
# 找到 PID 后结束进程
sudo kill -9 &lt;PID&gt;
</code></pre><div class="custom-container info"><span class="custom-container-title">调试建议</span><p>在排查完问题后，建议将 <code>logLevel</code> 改回 <code>info</code>，以节省磁盘空间并提高运行效率。</p></div>`,32)])]))}};export{g as default};
