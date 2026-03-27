import{k as o,b as n,q as r}from"./index-CZ0jUvGp.js";const s={class:"prose prose-sm m-auto"},u={__name:"tunnel-types",setup(l,{expose:e}){return e({frontmatter:{}}),(a,t)=>(o(),n("div",s,[...t[0]||(t[0]=[r(`<h1>Tunnel Types</h1><p>Brook supports multiple tunnel types to accommodate different use cases and protocols.</p><h2>TCP Tunnels</h2><p>TCP tunnels provide a reliable, ordered byte stream connection. Suitable for most application protocols.</p><p><strong>Use cases:</strong></p><ul><li>HTTP/HTTPS web servers</li><li>SSH connections</li><li>Database access (MySQL, PostgreSQL, Redis)</li><li>Any TCP-based service</li></ul><p><strong>Configuration example:</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;tcp&quot;,
  &quot;localPort&quot;: 3306,
  &quot;remotePort&quot;: 13306,
  &quot;name&quot;: &quot;MySQL Tunnel&quot;
}
</code></pre><h2>UDP Tunnels</h2><p>UDP tunnels provide connectionless, low-latency communication. Suitable for real-time applications.</p><p><strong>Use cases:</strong></p><ul><li>DNS queries</li><li>VoIP/video conferencing</li><li>Game servers</li><li>IoT sensor data</li></ul><p><strong>Configuration example:</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;udp&quot;,
  &quot;localPort&quot;: 53,
  &quot;remotePort&quot;: 10053,
  &quot;name&quot;: &quot;DNS Tunnel&quot;
}
</code></pre><h2>HTTP/HTTPS Tunnels</h2><p>HTTP tunnels allow proxying HTTP traffic with optional path-based routing.</p><p><strong>Use cases:</strong></p><ul><li>Exposing local web development servers</li><li>API gateway proxying</li><li>Webhook testing</li></ul><p><strong>Configuration example:</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;http&quot;,
  &quot;localPort&quot;: 8080,
  &quot;remotePort&quot;: 18080,
  &quot;name&quot;: &quot;Web Dev Server&quot;
}
</code></pre><h2>WebSocket Tunnels</h2><p>WebSocket tunnels support the WebSocket protocol for real-time bidirectional communication.</p><p><strong>Use cases:</strong></p><ul><li>Real-time dashboards</li><li>Chat applications</li><li>Live data streaming</li></ul><h2>Protocol Comparison</h2><table><thead><tr><th>Feature</th><th>TCP</th><th>UDP</th><th>HTTP</th><th>WebSocket</th></tr></thead><tbody><tr><td><strong>Reliability</strong></td><td>✅ Guaranteed</td><td>❌ Best-effort</td><td>✅ Guaranteed</td><td>✅ Guaranteed</td></tr><tr><td><strong>Ordering</strong></td><td>✅ Ordered</td><td>❌ Unordered</td><td>✅ Ordered</td><td>✅ Ordered</td></tr><tr><td><strong>Latency</strong></td><td>Medium</td><td>Low</td><td>Medium</td><td>Low</td></tr><tr><td><strong>Use Case</strong></td><td>General</td><td>Real-time</td><td>Web</td><td>Real-time Web</td></tr><tr><td><strong>Connection</strong></td><td>Persistent</td><td>Stateless</td><td>Stateless</td><td>Persistent</td></tr></tbody></table><h2>Choosing the Right Tunnel Type</h2><ul><li><strong>Default choice</strong>: Use <strong>TCP</strong> for most applications</li><li><strong>Low latency needed</strong>: Use <strong>UDP</strong> for gaming, VoIP, or DNS</li><li><strong>Web applications</strong>: Use <strong>HTTP</strong> for better compatibility with proxies</li><li><strong>Real-time web apps</strong>: Use <strong>WebSocket</strong> for bidirectional streaming</li></ul>`,28)])]))}};export{u as default};
