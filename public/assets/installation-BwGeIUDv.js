import{k as r,b as o,q as d}from"./index-CZ0jUvGp.js";const a={class:"prose prose-sm m-auto"},l={__name:"installation",setup(n,{expose:e}){return e({frontmatter:{}}),(i,t)=>(r(),o("div",a,[...t[0]||(t[0]=[d(`<h1>Installation</h1><p>Brook provides pre-compiled binaries for Linux, macOS, and Windows. Choose the installation method that works best for you.</p><h2>System Requirements</h2><table><thead><tr><th>Requirement</th><th>Minimum</th></tr></thead><tbody><tr><td><strong>OS</strong></td><td>Linux / macOS / Windows</td></tr><tr><td><strong>Architecture</strong></td><td>x86_64 (amd64), arm64</td></tr><tr><td><strong>Memory</strong></td><td>64 MB RAM</td></tr><tr><td><strong>Disk</strong></td><td>20 MB free space</td></tr><tr><td><strong>Network</strong></td><td>Open ports for server/tunnel</td></tr></tbody></table><h2>Online Installation (Recommended)</h2><p>The fastest way to install Brook on Linux/macOS:</p><pre><code class="language-bash">bash -c &quot;$(curl -fsSL https://www.gbrook.cc/install.sh)&quot;
</code></pre><p>This script automatically detects your platform and downloads the appropriate binary.</p><h2>Manual Installation</h2><h3>Server Binary</h3><p>Download the server binary for your platform:</p><table><thead><tr><th>Platform</th><th>Architecture</th><th>Download</th></tr></thead><tbody><tr><td>🐧 Linux</td><td>x86_64 (amd64)</td><td><code>brook-sev_Linux-x86_64(amd64).tar.gz</code></td></tr><tr><td>🐧 Linux</td><td>arm64</td><td><code>brook-sev_Linux-arm64.tar.gz</code></td></tr><tr><td>🍎 macOS</td><td>ARM64 (Apple M)</td><td><code>brook-sev_macOS-ARM64(Apple-M).tar.gz</code></td></tr><tr><td>🍎 macOS</td><td>Intel</td><td><code>brook-sev_macOS-Intel.tar.gz</code></td></tr><tr><td>🪟 Windows</td><td>x86_64</td><td><code>brook-sev_Windows-x86_64.tar.gz</code></td></tr></tbody></table><h3>Client Binary</h3><table><thead><tr><th>Platform</th><th>Architecture</th><th>Download</th></tr></thead><tbody><tr><td>🐧 Linux</td><td>x86_64 (amd64)</td><td><code>brook-cli_Linux-x86_64(amd64).tar.gz</code></td></tr><tr><td>🐧 Linux</td><td>arm64</td><td><code>brook-cli_Linux-arm64.tar.gz</code></td></tr><tr><td>🍎 macOS</td><td>ARM64 (Apple M)</td><td><code>brook-cli_macOS-ARM64(Apple-M).tar.gz</code></td></tr><tr><td>🍎 macOS</td><td>Intel</td><td><code>brook-cli_macOS-Intel.tar.gz</code></td></tr><tr><td>🪟 Windows</td><td>x86_64</td><td><code>brook-cli_Windows-x86_64.tar.gz</code></td></tr></tbody></table><h3>Extracting the Archive</h3><pre><code class="language-bash"># Create directory and extract
mkdir -p ./brook-sev &amp;&amp; tar -xzf brook-sev_Linux-arm64.tar.gz -C ./brook-sev
cd brook-sev

# Verify extraction
ls -la
# Expected: brook-sev  server.json.example
</code></pre><div class="custom-container warning"><span class="custom-container-title">Extraction Issues</span><p>If extraction fails, verify the file integrity first:</p><pre><code class="language-bash">md5sum brook-sev_Linux-arm64.tar.gz
sha256sum brook-sev_Linux-arm64.tar.gz
</code></pre></div><h2>Build from Source</h2><p>If you prefer to build from source:</p><h3>Prerequisites</h3><ul><li>Go 1.21+</li><li>Node.js 18+ (for frontend build)</li><li>Git</li></ul><h3>Build Steps</h3><p><strong>1. Clone the repository:</strong></p><pre><code class="language-bash">git clone https://github.com/brook/brook.git
cd brook
</code></pre><p><strong>2. Build the frontend (Web UI):</strong></p><pre><code class="language-bash">cd portal/server/
npm install
npm run build
</code></pre><p><strong>3. Build the server binary:</strong></p><pre><code class="language-bash">cd server/
bash gobuild.sh
# Select your target platform and architecture
</code></pre><p><strong>4. Build the client binary:</strong></p><pre><code class="language-bash">cd client/
bash gobuild.sh
</code></pre><p>Output binaries will be in <code>server/dist/</code> and <code>client/dist/</code> respectively.</p><h2>Verify Installation</h2><p>After installation, verify the binary works:</p><pre><code class="language-bash">./brook-sev --version
# Expected: brook-sev v0.2.2-release
</code></pre><h2>Next Steps</h2><ul><li><a href="/guide/quickstart">Quick Start</a> — Configure and run Brook</li><li><a href="/config/server">Server Configuration</a> — Detailed server options</li></ul>`,36)])]))}};export{l as default};
