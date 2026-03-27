import{k as n,b as e,q as u}from"./index-CZ0jUvGp.js";const r={class:"prose prose-sm m-auto"},l={__name:"tunnels",setup(a,{expose:o}){return o({frontmatter:{}}),(q,t)=>(n(),e("div",r,[...t[0]||(t[0]=[u(`<h1>Tunnels API</h1><h2>List Tunnels</h2><p><strong>Endpoint:</strong> <code>GET /api/tunnels</code></p><pre><code class="language-bash">curl -H &quot;Authorization: Bearer your-token&quot; \\
     http://localhost:8000/api/tunnels
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;code&quot;: 0,
  &quot;data&quot;: [
    {
      &quot;id&quot;: &quot;tunnel-001&quot;,
      &quot;name&quot;: &quot;MySQL Tunnel&quot;,
      &quot;type&quot;: &quot;tcp&quot;,
      &quot;localPort&quot;: 3306,
      &quot;remotePort&quot;: 13306,
      &quot;status&quot;: &quot;active&quot;,
      &quot;createdAt&quot;: &quot;2025-01-01T00:00:00Z&quot;
    }
  ]
}
</code></pre><h2>Create Tunnel</h2><p><strong>Endpoint:</strong> <code>POST /api/tunnels</code></p><pre><code class="language-bash">curl -X POST \\
     -H &quot;Authorization: Bearer your-token&quot; \\
     -H &quot;Content-Type: application/json&quot; \\
     -d &#39;{
       &quot;name&quot;: &quot;My Web Server&quot;,
       &quot;type&quot;: &quot;tcp&quot;,
       &quot;localPort&quot;: 8080,
       &quot;remotePort&quot;: 18080
     }&#39; \\
     http://localhost:8000/api/tunnels
</code></pre><h2>Delete Tunnel</h2><p><strong>Endpoint:</strong> <code>DELETE /api/tunnels/:id</code></p><pre><code class="language-bash">curl -X DELETE \\
     -H &quot;Authorization: Bearer your-token&quot; \\
     http://localhost:8000/api/tunnels/tunnel-001
</code></pre>`,12)])]))}};export{l as default};
