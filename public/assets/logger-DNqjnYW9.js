import{k as o,b as l,q as d}from"./index-CZ0jUvGp.js";const n={class:"prose prose-sm m-auto"},g={__name:"logger",setup(r,{expose:e}){return e({frontmatter:{}}),(c,t)=>(o(),l("div",n,[...t[0]||(t[0]=[d(`<h1>日志配置 (Logger Configuration)</h1><p>Brook 提供了灵活的日志配置，帮助您监控系统状态并调试隧道连接问题。</p><hr><h2>📄 配置参考</h2><pre><code class="language-json">{
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;"><code>logLevel</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;info&quot;</code></td><td style="text-align:left;"><code>error</code>, <code>warn</code>, <code>info</code>, <code>debug</code></td></tr><tr><td style="text-align:left;"><code>logPath</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;./&quot;</code></td><td style="text-align:left;">任何有效的目录路径</td></tr><tr><td style="text-align:left;"><code>outs</code></td><td style="text-align:left;">string</td><td style="text-align:left;"><code>&quot;file&quot;</code></td><td style="text-align:left;"><code>file</code>, <code>stdout</code></td></tr></tbody></table><hr><h2>📊 日志级别说明</h2><ul><li><strong><code>error</code></strong>: 仅记录导致程序无法正常运行的关键错误。</li><li><strong><code>warn</code></strong>: 记录潜在的问题（包含 error 级别的日志）。</li><li><strong><code>info</code></strong>: 记录常规运行信息，<strong>生产环境推荐使用</strong>。</li><li><strong><code>debug</code></strong>: 记录最详细的诊断信息，仅在排查故障时使用。</li></ul><hr><h2>📂 日志文件位置</h2><p>日志文件将根据组件名称写入 <code>logPath</code> 指定的目录：</p><ul><li><strong>服务端</strong>: <code>brook-sev.log</code></li><li><strong>客户端</strong>: <code>brook-cli.log</code></li></ul><hr><h2>🔄 日志轮转 (Log Rotation)</h2><p>Brook 原生不处理日志轮转。在 Linux 系统上，建议使用 <code>logrotate</code> 工具进行管理：</p><pre><code class="language-bash"># /etc/logrotate.d/brook
/opt/brook-sev/*.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
    postrotate
        systemctl restart brook-server
    endscript
}
</code></pre><div class="custom-container info"><span class="custom-container-title">提示</span><p>定期清理旧日志可以防止磁盘空间耗尽，尤其是在开启 <code>debug</code> 级别时。</p></div>`,18)])]))}};export{g as default};
