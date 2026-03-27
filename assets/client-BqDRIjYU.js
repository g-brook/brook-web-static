import{k as o,b as l,q as n}from"./index-CZ0jUvGp.js";const d={class:"prose prose-sm m-auto"},i={__name:"client",setup(r,{expose:e}){return e({frontmatter:{}}),(a,t)=>(o(),l("div",d,[...t[0]||(t[0]=[n(`<h1>客户端配置 (Client Configuration)</h1><p>客户端通过 <code>client.json</code> 文件进行配置。</p><hr><h2>📄 完整配置示例</h2><pre><code class="language-json">{
  &quot;serverPort&quot;: 8909,
  &quot;serverHost&quot;: &quot;127.0.0.1&quot;,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;your-secure-token-here&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><hr><h2>🛠️ 配置项说明</h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>serverPort</code></td><td style="text-align:left;">string</td><td style="text-align:left;">✅</td><td style="text-align:left;">服务端端口</td></tr><tr><td style="text-align:left;"><code>serverHost</code></td><td style="text-align:left;">string</td><td style="text-align:left;">✅</td><td style="text-align:left;">服务端地址，格式为 <code>IP或域名</code></td></tr><tr><td style="text-align:left;"><code>tunnelPort</code></td><td style="text-align:left;">integer</td><td style="text-align:left;">✅</td><td style="text-align:left;">隧道通信端口，必须与服务端的 <code>tunnelPort</code> 一致,服务器如果没有配置,默认是serverPort+10</td></tr><tr><td style="text-align:left;"><code>token</code></td><td style="text-align:left;">string</td><td style="text-align:left;">✅</td><td style="text-align:left;">身份验证 Token，可从服务端 Web 面板获取</td></tr><tr><td style="text-align:left;"><code>logger.logLevel</code></td><td style="text-align:left;">string</td><td style="text-align:left;">❌</td><td style="text-align:left;">日志级别 (debug, info, warn, error)</td></tr><tr><td style="text-align:left;"><code>logger.logPath</code></td><td style="text-align:left;">string</td><td style="text-align:left;">❌</td><td style="text-align:left;">日志文件存储路径</td></tr><tr><td style="text-align:left;"><code>logger.outs</code></td><td style="text-align:left;">string</td><td style="text-align:left;">❌</td><td style="text-align:left;">日志输出目标 (file, stdout)</td></tr></tbody></table><hr><h2>🌐 连接选项</h2><h3>使用 IP 地址</h3><p>直接指定服务端的公网 IP 和 API 端口：</p><pre><code class="language-json">{
 &quot;serverPort&quot;: 8909,
&quot;serverHost&quot;: &quot;127.0.0.1&quot;,
}
</code></pre><h3>使用域名</h3><p>也可以使用域名，Brook 会在启动时自动解析：</p><pre><code class="language-json">{
 &quot;serverPort&quot;: 8909,
 &quot;serverHost&quot;: &quot;example.gbrook.cc&quot;,
}
</code></pre><div class="custom-container info"><span class="custom-container-title">DNS 解析说明</span><p>当使用域名时，Brook 仅在程序启动时进行一次 DNS 解析。如果您的服务端 IP 发生了变化，请重新启动客户端。</p></div>`,17)])]))}};export{i as default};
