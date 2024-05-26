import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const h=JSON.parse('{"title":"yml 脚本","description":"","frontmatter":{},"headers":[],"relativePath":"documents/scripts/yml.md","filePath":"documents/scripts/yml.md","lastUpdated":1699530393000}'),p={name:"documents/scripts/yml.md"},o=l(`<h1 id="yml-脚本" tabindex="-1">yml 脚本 <a class="header-anchor" href="#yml-脚本" aria-label="Permalink to &quot;yml 脚本&quot;">​</a></h1><h2 id="github-actions-自动部署" tabindex="-1">github actions 自动部署 <a class="header-anchor" href="#github-actions-自动部署" aria-label="Permalink to &quot;github actions 自动部署&quot;">​</a></h2><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and Deploy</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build-and-deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout repository</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up Node.js</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to gh-web branch</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">github_token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_dir</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./dist</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gh-web</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">cyan0714/vitepress-blog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and Deploy</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build-and-deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout repository</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up Node.js</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">16</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install dependencies</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to gh-web branch</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_dir</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./dist</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gh-web</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">cyan0714/vitepress-blog</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{h as __pageData,F as default};
