import{k as e,b as r,q as d}from"./index-CZ0jUvGp.js";const n={class:"prose prose-sm m-auto"},a={__name:"logger",setup(i,{expose:t}){return t({frontmatter:{}}),(l,o)=>(e(),r("div",n,[...o[0]||(o[0]=[d(`<h1>Logger Configuration</h1><p>Brook provides flexible logging configuration to help you monitor and debug your tunnels.</p><h2>Configuration Reference</h2><pre><code class="language-json">{
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Options</th></tr></thead><tbody><tr><td><code>logLevel</code></td><td>string</td><td><code>&quot;info&quot;</code></td><td><code>error</code>, <code>warn</code>, <code>info</code>, <code>debug</code></td></tr><tr><td><code>logPath</code></td><td>string</td><td><code>&quot;./&quot;</code></td><td>Any valid directory path</td></tr><tr><td><code>outs</code></td><td>string</td><td><code>&quot;file&quot;</code></td><td><code>file</code>, <code>stdout</code>, <code>both</code></td></tr></tbody></table><h2>Log Levels</h2><ul><li><strong><code>error</code></strong>: Only critical errors that require immediate attention</li><li><strong><code>warn</code></strong>: Warnings about potential issues (includes errors)</li><li><strong><code>info</code></strong>: General operational information (recommended for production)</li><li><strong><code>debug</code></strong>: Verbose diagnostic information (use for troubleshooting only)</li></ul><h2>Log File Location</h2><p>Log files are written to <code>logPath</code> with the filename based on the component:</p><ul><li>Server: <code>brook-sev.log</code></li><li>Client: <code>brook-cli.log</code></li></ul><h2>Log Rotation</h2><p>Brook does not handle log rotation natively. Use <code>logrotate</code> on Linux:</p><pre><code class="language-bash"># /etc/logrotate.d/brook
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
</code></pre>`,13)])]))}};export{a as default};
