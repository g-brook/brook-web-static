import{k as o,b as n,q as d}from"./index-CZ0jUvGp.js";const r={class:"prose prose-sm m-auto"},l={__name:"debug",setup(i,{expose:e}){return e({frontmatter:{}}),(c,t)=>(o(),n("div",r,[...t[0]||(t[0]=[d(`<h1>Debug Mode</h1><p>Enable debug mode to get detailed diagnostic information when troubleshooting connection issues.</p><h2>Enabling Debug Mode</h2><p>Set <code>logLevel</code> to <code>&quot;debug&quot;</code> in your configuration file:</p><pre><code class="language-json">{
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;debug&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><h2>Log Levels</h2><table><thead><tr><th>Level</th><th>Description</th></tr></thead><tbody><tr><td><code>error</code></td><td>Only critical errors</td></tr><tr><td><code>warn</code></td><td>Warnings and errors</td></tr><tr><td><code>info</code></td><td>General information (default)</td></tr><tr><td><code>debug</code></td><td>Detailed diagnostic information</td></tr></tbody></table><h2>Log Output Options</h2><p>The <code>outs</code> field controls where logs are written:</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;file&quot;</code></td><td>Write to log file in <code>logPath</code></td></tr><tr><td><code>&quot;stdout&quot;</code></td><td>Write to standard output</td></tr><tr><td><code>&quot;both&quot;</code></td><td>Write to both file and stdout</td></tr></tbody></table><h2>Reading Debug Logs</h2><pre><code class="language-bash"># Follow the log file in real-time
tail -f ./brook-sev.log

# Filter for specific events
grep &quot;TUNNEL&quot; ./brook-sev.log
grep &quot;ERROR&quot; ./brook-sev.log
grep &quot;connection&quot; ./brook-sev.log
</code></pre><h2>Common Debug Scenarios</h2><h3>Connection Refused</h3><pre><code>[DEBUG] Attempting connection to 192.168.1.100:8909
[ERROR] Connection refused: dial tcp 192.168.1.100:8909: connect: connection refused
</code></pre><p><strong>Solution</strong>: Check that the server is running and the port is accessible.</p><h3>Authentication Failed</h3><pre><code>[DEBUG] Sending authentication token
[ERROR] Authentication failed: invalid token
</code></pre><p><strong>Solution</strong>: Verify the token in client.json matches the token generated in the server’s Web panel.</p><h3>Port Already in Use</h3><pre><code>[ERROR] Failed to bind port 8909: address already in use
</code></pre><p><strong>Solution</strong>: Find and stop the conflicting process:</p><pre><code class="language-bash">sudo lsof -i :8909
sudo kill -9 &lt;PID&gt;
</code></pre>`,23)])]))}};export{l as default};
