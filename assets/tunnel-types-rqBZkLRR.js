import{k as l,b as o,q as n}from"./index-CZ0jUvGp.js";const s={class:"prose prose-sm m-auto"},a={__name:"tunnel-types",setup(r,{expose:e}){return e({frontmatter:{}}),(i,t)=>(l(),o("div",s,[...t[0]||(t[0]=[n(`<h1>隧道类型</h1><p>Brook 支持多种隧道类型，以满足不同的使用场景和协议需求。</p><h2>TCP 隧道</h2><p>TCP 隧道提供可靠、有序的字节流连接。适用于大多数应用协议。</p><p><strong>适用场景：</strong></p><ul><li>HTTP/HTTPS Web 服务器</li><li>SSH 远程连接</li><li>数据库访问 (MySQL, PostgreSQL, Redis)</li><li>任何基于 TCP 的服务</li></ul><p><strong>配置示例：</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;tcp&quot;,
  &quot;localPort&quot;: 3306,
  &quot;remotePort&quot;: 13306,
  &quot;name&quot;: &quot;MySQL 隧道&quot;
}
</code></pre><h2>UDP 隧道</h2><p>UDP 隧道提供无连接、低延迟的通信。适用于对实时性要求较高的应用。</p><p><strong>适用场景：</strong></p><ul><li>DNS 查询</li><li>VoIP / 视频会议</li><li>游戏服务器</li><li>IoT 传感器数据</li></ul><p><strong>配置示例：</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;udp&quot;,
  &quot;localPort&quot;: 53,
  &quot;remotePort&quot;: 10053,
  &quot;name&quot;: &quot;DNS 隧道&quot;
}
</code></pre><h2>HTTP/HTTPS 隧道</h2><p>HTTP 隧道允许代理 HTTP 流量，并支持可选的基于路径的路由。</p><p><strong>适用场景：</strong></p><ul><li>暴露本地 Web 开发服务器</li><li>API 网关代理</li><li>Webhook 测试</li></ul><p><strong>配置示例：</strong></p><pre><code class="language-json">{
  &quot;type&quot;: &quot;http&quot;,
  &quot;localPort&quot;: 8080,
  &quot;remotePort&quot;: 18080,
  &quot;name&quot;: &quot;Web 开发服务器&quot;
}
</code></pre><h2>WebSocket 隧道</h2><p>WebSocket 隧道支持 WebSocket 协议，用于实时双向通信。</p><p><strong>适用场景：</strong></p><ul><li>实时仪表盘</li><li>在线聊天应用</li><li>实时数据流推送</li></ul><h2>协议特性对比</h2><table><thead><tr><th style="text-align:left;">特性</th><th style="text-align:left;">TCP</th><th style="text-align:left;">UDP</th><th style="text-align:left;">HTTP</th><th style="text-align:left;">WebSocket</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>可靠性</strong></td><td style="text-align:left;">✅ 保证送达</td><td style="text-align:left;">❌ 尽力而为</td><td style="text-align:left;">✅ 保证送达</td><td style="text-align:left;">✅ 保证送达</td></tr><tr><td style="text-align:left;"><strong>顺序性</strong></td><td style="text-align:left;">✅ 有序</td><td style="text-align:left;">❌ 无序</td><td style="text-align:left;">✅ 有序</td><td style="text-align:left;">✅ 有序</td></tr><tr><td style="text-align:left;"><strong>延迟</strong></td><td style="text-align:left;">中等</td><td style="text-align:left;">低</td><td style="text-align:left;">中等</td><td style="text-align:left;">低</td></tr><tr><td style="text-align:left;"><strong>应用场景</strong></td><td style="text-align:left;">通用型</td><td style="text-align:left;">实时应用</td><td style="text-align:left;">Web 服务</td><td style="text-align:left;">实时 Web</td></tr><tr><td style="text-align:left;"><strong>连接方式</strong></td><td style="text-align:left;">持久连接</td><td style="text-align:left;">无状态</td><td style="text-align:left;">无状态</td><td style="text-align:left;">持久连接</td></tr></tbody></table><h2>如何选择合适的隧道？</h2><ul><li><strong>默认首选</strong>：大多数应用请直接使用 <strong>TCP</strong>。</li><li><strong>追求低延迟</strong>：游戏、VoIP 或 DNS 场景请使用 <strong>UDP</strong>。</li><li><strong>Web 开发</strong>：为了更好的代理兼容性，请使用 <strong>HTTP</strong>。</li><li><strong>实时双向通讯</strong>：需要双向流式传输时请使用 <strong>WebSocket</strong>。</li></ul>`,28)])]))}};export{a as default};
