import{k as e,b as n,q as s}from"./index-CZ0jUvGp.js";const a={class:"prose prose-sm m-auto"},l={__name:"status",setup(r,{expose:o}){return o({frontmatter:{}}),(p,t)=>(e(),n("div",a,[...t[0]||(t[0]=[s(`<h1>Status API</h1><h2>Get Server Status</h2><p><strong>Endpoint:</strong> <code>GET /api/status</code></p><pre><code class="language-bash">curl -H &quot;Authorization: Bearer your-token&quot; \\
     http://localhost:8000/api/status
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;code&quot;: 0,
  &quot;data&quot;: {
    &quot;version&quot;: &quot;v0.2.2-release&quot;,
    &quot;uptime&quot;: 86400,
    &quot;activeTunnels&quot;: 3,
    &quot;totalConnections&quot;: 1024,
    &quot;bytesTransferred&quot;: 1073741824,
    &quot;serverPort&quot;: 8909,
    &quot;tunnelPort&quot;: 8919
  }
}
</code></pre><h2>Health Check</h2><p>A lightweight endpoint for load balancer health checks (no auth required):</p><p><strong>Endpoint:</strong> <code>GET /api/health</code></p><pre><code class="language-bash">curl http://localhost:8000/api/health
# Response: {&quot;status&quot;: &quot;ok&quot;}
</code></pre>`,10)])]))}};export{l as default};
