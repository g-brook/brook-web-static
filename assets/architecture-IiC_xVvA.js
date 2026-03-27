import{k as n,b as o,q as r}from"./index-CZ0jUvGp.js";const i={class:"prose prose-sm m-auto"},d={__name:"architecture",setup(s,{expose:t}){return t({frontmatter:{}}),(l,e)=>(n(),o("div",i,[...e[0]||(e[0]=[r(`<h1>Architecture</h1><p>Brook follows a <strong>server-client architecture</strong> designed for simplicity, security, and performance.</p><h2>System Overview</h2><pre><code>┌─────────────────────────────────────────────────────────┐
│                    External Network                       │
│                                                          │
│  ┌──────────────┐          ┌──────────────────────────┐  │
│  │ External User│◄────────►│     Brook Server          │  │
│  │ (Browser,    │  HTTP/   │  ┌──────────────────────┐│  │
│  │  SSH, etc.)  │  TCP/UDP │  │ Web Management Panel ││  │
│  └──────────────┘          │  │   (Port 8000)        ││  │
│                            │  └──────────────────────┘│  │
│                            │  Server Port: 8909        │  │
│                            │  Tunnel Port: 8919        │  │
│                            └────────────┬─────────────┘  │
└─────────────────────────────────────────┼────────────────┘
                                          │ Encrypted Tunnel
┌─────────────────────────────────────────┼────────────────┐
│                  Internal Network        │                 │
│                                          ▼                │
│  ┌──────────────┐          ┌──────────────────────────┐  │
│  │ Local Service│◄────────►│     Brook Client          │  │
│  │ (Port 8080)  │          │  ┌──────────────────────┐│  │
│  └──────────────┘          │  │ Tunnel Manager       ││  │
│                            │  │ (Port 8919)          ││  │
│                            │  └──────────────────────┘│  │
│                            └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
</code></pre><h2>Components</h2><h3>Brook Server (<code>brook-sev</code>)</h3><p>The server component runs on a publicly accessible machine and provides:</p><ul><li><strong>Connection Endpoint</strong>: Accepts client connections on <code>serverPort</code> (default: 8909)</li><li><strong>Tunnel Relay</strong>: Forwards tunnel traffic on <code>tunnelPort</code> (default: 8919)</li><li><strong>Web Management Panel</strong>: HTTP admin interface on <code>webPort</code> (default: 8000)</li><li><strong>Token Authentication</strong>: Validates client connections using shared tokens</li></ul><h3>Brook Client (<code>brook-cli</code>)</h3><p>The client component runs on machines within the internal network:</p><ul><li><strong>Server Connection</strong>: Maintains a persistent connection to the Brook server</li><li><strong>Tunnel Management</strong>: Creates and manages local-to-remote port mappings</li><li><strong>Auto-Reconnect</strong>: Automatically re-establishes connections on failure</li></ul><h3>Web Management Panel</h3><p>The built-in web interface provides:</p><ul><li><strong>Dashboard</strong>: Real-time connection status and statistics</li><li><strong>Tunnel Configuration</strong>: Create, edit, and delete tunnels</li><li><strong>User Management</strong>: Admin account setup and token generation</li><li><strong>Log Viewer</strong>: Real-time log streaming</li></ul><h2>Connection Flow</h2><ol><li><strong>Client connects</strong> to server on <code>serverPort</code> using the authentication token</li><li><strong>Server validates</strong> the token and establishes a control channel</li><li><strong>Tunnel registration</strong>: Client registers desired port mappings with the server</li><li><strong>Traffic forwarding</strong>: When external traffic arrives at the server’s tunnel port, it’s forwarded through the control channel to the client, which then connects to the local service</li></ol><h2>Security Model</h2><p>Brook uses <strong>token-based authentication</strong> to secure connections:</p><ul><li>Tokens are generated through the Web management panel</li><li>All tunnel traffic passes through the authenticated control channel</li><li>Tokens can be regenerated to revoke access</li></ul><div class="custom-container warning"><span class="custom-container-title">Production Security</span><p>For production deployments, consider:</p><ul><li>Running Brook behind a reverse proxy with TLS</li><li>Using firewall rules to restrict access to management ports</li><li>Regularly rotating authentication tokens</li></ul></div><h2>Performance Characteristics</h2><p>Brook is written in Go and leverages goroutines for concurrent connection handling:</p><table><thead><tr><th>Metric</th><th>Typical Value</th></tr></thead><tbody><tr><td><strong>Memory Usage</strong></td><td>~10-30 MB</td></tr><tr><td><strong>CPU Usage</strong></td><td>&lt; 1% at idle</td></tr><tr><td><strong>Concurrent Tunnels</strong></td><td>1000+</td></tr><tr><td><strong>Throughput</strong></td><td>Limited by network bandwidth</td></tr><tr><td><strong>Latency Overhead</strong></td><td>&lt; 1ms (same datacenter)</td></tr></tbody></table>`,23)])]))}};export{d as default};
