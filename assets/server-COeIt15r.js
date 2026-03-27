import{k as o,b as r,q as n}from"./index-CZ0jUvGp.js";const d={class:"prose prose-sm m-auto"},u={__name:"server",setup(s,{expose:e}){return e({frontmatter:{}}),(a,t)=>(o(),r("div",d,[...t[0]||(t[0]=[n(`<h1>Server Configuration</h1><p>The server is configured via a <code>server.json</code> file. Below is the complete reference for all available options.</p><h2>Full Configuration Example</h2><pre><code class="language-json">{
  &quot;enableWeb&quot;: true,
  &quot;webPort&quot;: 8000,
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;your-secure-token-here&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><h2>Configuration Reference</h2><h3>Core Options</h3><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>enableWeb</code></td><td>boolean</td><td><code>true</code></td><td>Enable the Web management panel</td></tr><tr><td><code>webPort</code></td><td>integer</td><td><code>8000</code></td><td>Port for the Web management panel</td></tr><tr><td><code>serverPort</code></td><td>integer</td><td><code>8909</code></td><td>Port for client connections</td></tr><tr><td><code>tunnelPort</code></td><td>integer</td><td><code>8919</code></td><td>Port for tunnel traffic</td></tr><tr><td><code>token</code></td><td>string</td><td><code>&quot;&quot;</code></td><td>Authentication token (leave empty for first run)</td></tr></tbody></table><h3>Logger Options</h3><table><thead><tr><th>Field</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>logLevel</code></td><td>string</td><td><code>&quot;info&quot;</code></td><td>Log verbosity: <code>error</code>, <code>warn</code>, <code>info</code>, <code>debug</code></td></tr><tr><td><code>logPath</code></td><td>string</td><td><code>&quot;./&quot;</code></td><td>Directory path for log files</td></tr><tr><td><code>outs</code></td><td>string</td><td><code>&quot;file&quot;</code></td><td>Output target: <code>file</code>, <code>stdout</code>, <code>both</code></td></tr></tbody></table><h2>Minimal Configuration</h2><p>For a quick start, only these fields are required:</p><pre><code class="language-json">{
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;&quot;
}
</code></pre><h2>Port Configuration Guidelines</h2><div class="custom-container info"><span class="custom-container-title">Port Selection</span><ul><li><strong>webPort</strong>: Use 8000 or any port above 1024. Avoid well-known ports.</li><li><strong>serverPort</strong>: The port clients connect to. Must be accessible from the internet.</li><li><strong>tunnelPort</strong>: The port for tunnel traffic. Must also be accessible from the internet.</li></ul></div><div class="custom-container warning"><span class="custom-container-title">Port Conflicts</span><p>If you see <code>address already in use</code> errors, check for conflicting processes:</p><pre><code class="language-bash">sudo lsof -i :8909
sudo netstat -tlnp | grep 8909
</code></pre></div><h2>Environment Variables</h2><p>You can override configuration values using environment variables:</p><pre><code class="language-bash">BROOK_SERVER_PORT=9090 ./brook-sev -c ./server.json
BROOK_WEB_PORT=9000 ./brook-sev -c ./server.json
</code></pre><h2>Multiple Instances</h2><p>To run multiple Brook server instances on the same machine, use different configuration files with different ports:</p><pre><code class="language-bash"># Instance 1
./brook-sev -c ./server-1.json

# Instance 2 (different ports)
./brook-sev -c ./server-2.json
</code></pre>`,21)])]))}};export{u as default};
