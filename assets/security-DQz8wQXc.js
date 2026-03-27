import{k as n,b as t,q as l}from"./index-CZ0jUvGp.js";const s={class:"prose prose-sm m-auto"},p={__name:"security",setup(r,{expose:e}){return e({frontmatter:{}}),(a,o)=>(n(),t("div",s,[...o[0]||(o[0]=[l(`<h1>安全指南 (Security)</h1><p>Brook 实施了多项安全措施来保护您的隧道和数据安全。</p><hr><h2>🛡️ 身份验证 (Authentication)</h2><p>Brook 使用 <strong>基于 Token 的身份验证</strong> 来确保客户端与服务端连接的安全。</p><h3>1. Token 生成</h3><p>Token 可以通过 Web 管理面板生成：</p><ol><li>登录管理面板 <code>http://您的服务器IP:8000</code>。</li><li>导航至 <strong>设置 (Settings) → Token</strong>。</li><li>点击 <strong>生成新 Token (Generate New Token)</strong>。</li><li>复制生成的 Token 并将其添加到您的 <code>client.json</code> 配置文件中。</li></ol><h3>2. Token 定期更换</h3><p>为了确保持续的安全，建议定期更换 Token：</p><ol><li>在 Web 面板中生成新的 Token。</li><li>更新所有客户端的 <code>client.json</code> 文件。</li><li>重启客户端服务：<pre><code class="language-bash">sudo systemctl restart brook-client
</code></pre></li></ol><hr><h2>🌐 网络安全 (Network Security)</h2><h3>防火墙配置</h3><p>建议使用防火墙规则限制对 Brook 端口的访问：</p><pre><code class="language-bash"># 仅允许特定 IP 段访问服务端端口
sudo ufw allow from 203.0.113.0/24 to any port 8909

# 限制管理面板仅允许本地访问（或通过反向代理访问）
sudo ufw deny 8000
sudo ufw allow from 127.0.0.1 to any port 8000

# 允许隧道流量端口
sudo ufw allow 8919
</code></pre><h3>使用带 TLS 的反向代理</h3><p>对于生产环境，建议将 Brook 放在 Nginx 之后，并启用 TLS 加密：</p><pre><code class="language-nginx">server {
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
</code></pre><hr><h2>✨ 安全最佳实践</h2><div class="custom-container info"><span class="custom-container-title">安全检查清单</span><ul><li>[ ] 使用强且随机生成的 Token。</li><li>[ ] 限制管理面板仅供信任的 IP 访问。</li><li>[ ] 在生产环境中为管理面板启用 TLS 加密。</li><li>[ ] 定期更换身份验证 Token。</li><li>[ ] 监控访问日志，排查可疑活动。</li><li>[ ] 保持 Brook 处于最新版本。</li></ul></div><hr><h2>📢 报告安全问题</h2><p>如果您发现了安全漏洞，请通过以下方式负责任地报告：</p><ol><li><strong>不要</strong> 在 GitHub 上开启公开的 Issue。</li><li>直接发送邮件至安全团队。</li><li>包含详细的描述和重现步骤。</li><li>在公开披露之前，请给修复工作留出合理的时间。</li></ol>`,26)])]))}};export{p as default};
