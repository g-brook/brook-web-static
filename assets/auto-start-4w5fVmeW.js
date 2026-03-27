import{k as o,b as n,q as r}from"./index-CZ0jUvGp.js";const s={class:"prose prose-sm m-auto"},g={__name:"auto-start",setup(a,{expose:e}){return e({frontmatter:{}}),(c,t)=>(o(),n("div",s,[...t[0]||(t[0]=[r(`<h1>Auto-Start on Linux</h1><p>Configure Brook to automatically start on system boot using systemd.</p><h2>Server Auto-Start</h2><h3>Create systemd Service File</h3><pre><code class="language-bash">sudo nano /etc/systemd/system/brook-server.service
</code></pre><p>Paste the following content:</p><pre><code class="language-ini">[Unit]
Description=Brook Server
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/brook-sev
ExecStart=/opt/brook-sev/brook-sev -c /opt/brook-sev/server.json
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
</code></pre><h3>Enable and Start the Service</h3><pre><code class="language-bash"># Reload systemd daemon
sudo systemctl daemon-reload

# Enable auto-start on boot
sudo systemctl enable brook-server

# Start the service now
sudo systemctl start brook-server

# Check status
sudo systemctl status brook-server
</code></pre><h3>View Logs</h3><pre><code class="language-bash"># Follow live logs
sudo journalctl -u brook-server -f

# View last 100 lines
sudo journalctl -u brook-server -n 100
</code></pre><h2>Client Auto-Start</h2><p>Follow the same process for the client:</p><pre><code class="language-bash">sudo nano /etc/systemd/system/brook-client.service
</code></pre><pre><code class="language-ini">[Unit]
Description=Brook Client
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/brook-cli
ExecStart=/opt/brook-cli/brook-cli -c /opt/brook-cli/client.json
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
</code></pre><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl enable brook-client
sudo systemctl start brook-client
</code></pre><h2>macOS (launchd)</h2><p>For macOS, use launchd instead of systemd:</p><pre><code class="language-xml">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot;
  &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;
&lt;plist version=&quot;1.0&quot;&gt;
&lt;dict&gt;
  &lt;key&gt;Label&lt;/key&gt;
  &lt;string&gt;cc.gbrook.server&lt;/string&gt;
  &lt;key&gt;ProgramArguments&lt;/key&gt;
  &lt;array&gt;
    &lt;string&gt;/usr/local/bin/brook-sev&lt;/string&gt;
    &lt;string&gt;-c&lt;/string&gt;
    &lt;string&gt;/usr/local/etc/brook/server.json&lt;/string&gt;
  &lt;/array&gt;
  &lt;key&gt;RunAtLoad&lt;/key&gt;
  &lt;true/&gt;
  &lt;key&gt;KeepAlive&lt;/key&gt;
  &lt;true/&gt;
&lt;/dict&gt;
&lt;/plist&gt;
</code></pre><p>Save to <code>~/Library/LaunchAgents/cc.gbrook.server.plist</code> and load:</p><pre><code class="language-bash">launchctl load ~/Library/LaunchAgents/cc.gbrook.server.plist
</code></pre>`,21)])]))}};export{g as default};
