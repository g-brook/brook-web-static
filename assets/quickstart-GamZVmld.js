import{k as t,b as n,q as r}from"./index-CZ0jUvGp.js";const s={class:"prose prose-sm m-auto"},c={__name:"quickstart",setup(i,{expose:o}){return o({frontmatter:{}}),(u,e)=>(t(),n("div",s,[...e[0]||(e[0]=[r(`<h1>Quick Start</h1><p>Get Brook up and running in under 5 minutes. This guide covers the minimal setup to establish your first tunnel.</p><h2>Server Setup</h2><h3>Step 1: Extract and Enter Directory</h3><pre><code class="language-bash">mkdir -p ./brook-sev &amp;&amp; tar -xzf brook-sev_Linux-arm64.tar.gz -C ./brook-sev
cd brook-sev
</code></pre><h3>Step 2: Configure server.json</h3><p>Create or edit <code>server.json</code>:</p><pre><code class="language-json">{
  &quot;enableWeb&quot;: true,
  &quot;webPort&quot;: 8000,
  &quot;serverPort&quot;: 8909,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><div class="custom-container info"><span class="custom-container-title">Token Generation</span><p>Leave <code>token</code> empty on first run. You’ll generate it through the Web UI after initial setup.</p></div><h3>Step 3: Start the Server</h3><pre><code class="language-bash">./brook-sev -c ./server.json
</code></pre><p>Expected output:</p><pre><code>[INFO] Brook server v0.2.2 starting...
[INFO] Loading configuration from ./server.json
[INFO] Server started on port 8909
[INFO] Tunnel port 8919 listening
[INFO] Web panel available at http://localhost:8000
</code></pre><h3>Step 4: Access the Management Panel</h3><p>Open your browser and navigate to:</p><pre><code>http://your-server-ip:8000/index
</code></pre><p><strong>First-time setup:</strong></p><ol><li>Set your admin username and password</li><li>Log in with the credentials</li><li>Navigate to <strong>Settings → Token</strong> to generate your authentication token</li><li>Copy the token for client configuration</li></ol><hr><h2>Client Setup</h2><h3>Step 1: Extract and Enter Directory</h3><pre><code class="language-bash">mkdir -p ./brook-cli &amp;&amp; tar -xzf brook-cli_Linux-arm64.tar.gz -C ./brook-cli
cd brook-cli
</code></pre><h3>Step 2: Configure client.json</h3><pre><code class="language-json">{
  &quot;serverAddr&quot;: &quot;your-server-ip:8909&quot;,
  &quot;tunnelPort&quot;: 8919,
  &quot;token&quot;: &quot;your-generated-token&quot;,
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;info&quot;,
    &quot;logPath&quot;: &quot;./&quot;,
    &quot;outs&quot;: &quot;file&quot;
  }
}
</code></pre><h3>Step 3: Start the Client</h3><pre><code class="language-bash">./brook-cli -c ./client.json
</code></pre><p>Expected output:</p><pre><code>[INFO] Brook client v0.2.2 starting...
[INFO] Connected to server: your-server-ip:8909
[INFO] Tunnel established successfully
</code></pre><h3>Step 4: Create a Tunnel</h3><p>In the Web management panel:</p><ol><li>Click <strong>Tunnels → New Tunnel</strong></li><li>Configure the tunnel: <ul><li><strong>Name</strong>: My First Tunnel</li><li><strong>Type</strong>: TCP</li><li><strong>Local Port</strong>: 8080 (port on your local machine)</li><li><strong>Remote Port</strong>: 18080 (port exposed on the server)</li></ul></li><li>Click <strong>Save</strong> to activate the tunnel</li></ol><p>Your local service on port 8080 is now accessible at <code>your-server-ip:18080</code>.</p><hr><h2>Verify the Connection</h2><pre><code class="language-bash"># On the server, check active tunnels
curl http://localhost:8000/api/tunnels

# Test the tunnel
curl http://your-server-ip:18080
</code></pre><h2>Troubleshooting</h2><p>If the connection fails, check:</p><ol><li><strong>Firewall rules</strong>: Ensure ports 8909 and 8919 are open on the server</li><li><strong>Token mismatch</strong>: Verify the token in client.json matches the server</li><li><strong>Log files</strong>: Check <code>./brook-sev.log</code> and <code>./brook-cli.log</code> for errors</li></ol><div class="custom-container info"><span class="custom-container-title">Debug Mode</span><p>Enable debug logging for detailed diagnostics:</p><pre><code class="language-json">{
  &quot;logger&quot;: {
    &quot;logLevel&quot;: &quot;debug&quot;
  }
}
</code></pre></div><h2>Next Steps</h2><ul><li><a href="/guide/tunnel-types">Tunnel Types</a> — Learn about different tunnel configurations</li><li><a href="/config/server">Server Configuration</a> — Full server configuration reference</li><li><a href="/config/client">Client Configuration</a> — Full client configuration reference</li></ul>`,41)])]))}};export{c as default};
