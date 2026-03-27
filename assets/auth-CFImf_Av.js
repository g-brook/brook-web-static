import{k as e,b as n,q as s}from"./index-CZ0jUvGp.js";const u={class:"prose prose-sm m-auto"},i={__name:"auth",setup(a,{expose:t}){return t({frontmatter:{}}),(c,o)=>(e(),n("div",u,[...o[0]||(o[0]=[s(`<h1>Authentication API</h1><h2>Login</h2><p>Authenticate with admin credentials to receive a session token.</p><p><strong>Endpoint:</strong> <code>POST /api/auth/login</code></p><p><strong>Request:</strong></p><pre><code class="language-json">{
  &quot;username&quot;: &quot;admin&quot;,
  &quot;password&quot;: &quot;your-password&quot;
}
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;code&quot;: 0,
  &quot;message&quot;: &quot;success&quot;,
  &quot;data&quot;: {
    &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&quot;,
    &quot;expiresAt&quot;: &quot;2025-12-31T23:59:59Z&quot;
  }
}
</code></pre><h2>Using the Token</h2><p>Include the token in the <code>Authorization</code> header for all subsequent requests:</p><pre><code class="language-bash">curl -H &quot;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&quot; \\
     http://localhost:8000/api/tunnels
</code></pre><h2>Logout</h2><p><strong>Endpoint:</strong> <code>POST /api/auth/logout</code></p><pre><code class="language-bash">curl -X POST \\
     -H &quot;Authorization: Bearer your-token&quot; \\
     http://localhost:8000/api/auth/logout
</code></pre>`,14)])]))}};export{i as default};
