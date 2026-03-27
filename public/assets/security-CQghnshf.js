import{k as o,b as n,q as s}from"./index-CZ0jUvGp.js";const r={class:"prose prose-sm m-auto"},p={__name:"security",setup(i,{expose:t}){return t({frontmatter:{}}),(l,e)=>(o(),n("div",r,[...e[0]||(e[0]=[s(`<h1>Security</h1><p>Brook implements several security measures to protect your tunnels and data.</p><h2>Authentication</h2><p>Brook uses <strong>token-based authentication</strong> to secure client-server connections.</p><h3>Token Generation</h3><p>Tokens are generated through the Web management panel:</p><ol><li>Log in to the admin panel at <code>http://your-server:8000</code></li><li>Navigate to <strong>Settings → Token</strong></li><li>Click <strong>Generate New Token</strong></li><li>Copy the token and add it to your <code>client.json</code></li></ol><h3>Token Rotation</h3><p>Regularly rotate tokens to maintain security:</p><pre><code class="language-bash"># Generate a new token in the Web panel
# Update client.json with the new token
# Restart the client service
sudo systemctl restart brook-client
</code></pre><h2>Network Security</h2><h3>Firewall Configuration</h3><p>Restrict access to Brook ports using firewall rules:</p><pre><code class="language-bash"># Allow server port only from specific IPs
sudo ufw allow from 203.0.113.0/24 to any port 8909

# Restrict management panel to localhost
sudo ufw deny 8000
sudo ufw allow from 127.0.0.1 to any port 8000

# Allow tunnel port
sudo ufw allow 8919
</code></pre><h3>Reverse Proxy with TLS</h3><p>For production deployments, run Brook behind nginx with TLS:</p><pre><code class="language-nginx">server {
    listen 443 ssl;
    server_name brook.example.com;

    ssl_certificate /etc/ssl/certs/brook.crt;
    ssl_certificate_key /etc/ssl/private/brook.key;

    location /admin/ {
        proxy_pass http://localhost:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><h2>Best Practices</h2><div class="custom-container info"><span class="custom-container-title">Security Checklist</span><ul><li>[ ] Use strong, randomly generated tokens</li><li>[ ] Restrict management panel access to trusted IPs</li><li>[ ] Enable TLS for the management panel in production</li><li>[ ] Regularly rotate authentication tokens</li><li>[ ] Monitor access logs for suspicious activity</li><li>[ ] Keep Brook updated to the latest version</li></ul></div><h2>Reporting Security Issues</h2><p>If you discover a security vulnerability, please report it responsibly:</p><ol><li>Do <strong>not</strong> open a public GitHub issue</li><li>Email the security team directly</li><li>Include a detailed description and reproduction steps</li><li>Allow reasonable time for a fix before public disclosure</li></ol>`,22)])]))}};export{p as default};
