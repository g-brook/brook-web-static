import{k as o,b as d,q as r}from"./index-CZ0jUvGp.js";const n={class:"prose prose-sm m-auto"},i={__name:"client",setup(s,{expose:e}){return e({frontmatter:{}}),(a,t)=>(o(),d("div",n,[...t[0]||(t[0]=[r(`<h1>Client Configuration</h1><p>The client is configured via a <code>client.json</code> file.</p><h2>Full Configuration Example</h2><pre><code class="language-json">{
  &quot;serverAddr&quot;: &quot;192.168.1.100:8909&quot;,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;your-secure-token-here&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><h2>Configuration Reference</h2><table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>serverAddr</code></td><td>string</td><td>✅</td><td>Server address in <code>host:port</code> format</td></tr><tr><td><code>tunnelPort</code></td><td>integer</td><td>✅</td><td>Must match server’s <code>tunnelPort</code></td></tr><tr><td><code>token</code></td><td>string</td><td>✅</td><td>Authentication token from server Web panel</td></tr><tr><td><code>logger.logLevel</code></td><td>string</td><td>❌</td><td>Log verbosity level</td></tr><tr><td><code>logger.logPath</code></td><td>string</td><td>❌</td><td>Directory for log files</td></tr><tr><td><code>logger.outs</code></td><td>string</td><td>❌</td><td>Log output target</td></tr></tbody></table><h2>Connection Options</h2><h3>Using IP Address</h3><pre><code class="language-json">{
  &quot;serverAddr&quot;: &quot;203.0.113.10:8909&quot;
}
</code></pre><h3>Using Domain Name</h3><pre><code class="language-json">{
  &quot;serverAddr&quot;: &quot;brook.example.com:8909&quot;
}
</code></pre><div class="custom-container info"><span class="custom-container-title">DNS Resolution</span><p>When using a domain name, Brook resolves it at startup. If DNS changes, restart the client.</p></div>`,12)])]))}};export{i as default};
