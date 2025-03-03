import{_ as i,c as o,o as e,b0 as t}from"./chunks/framework.CF2ItCMi.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/issue.md","filePath":"interview/issue.md"}'),r={name:"interview/issue.md"};function n(a,l,s,u,c,d){return e(),o("div",null,l[0]||(l[0]=[t('<h2 id="vue2-和vue3的区别" tabindex="-1">Vue2 和Vue3的区别 <a class="header-anchor" href="#vue2-和vue3的区别" aria-label="Permalink to &quot;Vue2 和Vue3的区别&quot;">​</a></h2><ol><li>diff算法不同，Vue3 重写了虚拟 <code>Dom</code> 实现,使得加载速度恒快</li><li>Vue3 体积更小，通过 <code>webpack</code> 的 <code>tree-shaking</code> 功能，可以将无用模块“剪辑”，仅打包需要的模块</li><li>组件数据更安全，外部只能访问组件暴露出去的数据</li><li>多根节点，Vue2只能存在一个根节点，需要用一个div来包裹；Vue3 支持多个根节点，也就是 fragment。</li><li>响应式原理，Vue2 响应式原理基础是 Object.defineProperty；Vue3 响应式原理基础是 Proxy。</li></ol><h2 id="vuex和pinia的区别" tabindex="-1">vuex和pinia的区别 <a class="header-anchor" href="#vuex和pinia的区别" aria-label="Permalink to &quot;vuex和pinia的区别&quot;">​</a></h2><ol><li><strong>设计理念和 API</strong>: <ul><li><strong>Vuex</strong>: Vuex 是一个相对成熟的状态管理库，使用了基于 Flux 的架构。它的核心概念包括 <code>state</code>、<code>getters</code>、<code>mutations</code> 和 <code>actions</code>。你需要通过 <code>mutations</code> 来同步更新状态，而 <code>actions</code> 用于处理异步操作。</li><li><strong>Pinia</strong>: Pinia 是 Vue 3 的推荐状态管理库，它的设计更现代化，使用更加简单。Pinia 的 API 更接近于组合式 API，状态更新不需要通过 <code>mutations</code>，直接在 <code>actions</code> 中更新状态即可。Pinia 也支持模块化和热重载。</li></ul></li><li><strong>模块化</strong>: <ul><li><strong>Vuex</strong>: Vuex 支持模块化，但需要手动定义模块和注册。</li><li><strong>Pinia</strong>: Pinia 提供了更自然的模块化支持，每个 store 就像一个模块，通过定义不同的 store 来实现模块化。</li></ul></li><li><strong>开发体验</strong>: <ul><li><strong>Vuex</strong>: Vuex 的 API 较为严格，特别是对于 <code>mutations</code> 的使用，这在某些情况下可能显得繁琐。</li><li><strong>Pinia</strong>: Pinia 提供了更好的开发体验，支持 TypeScript 更加友好，API 设计符合 Vue 3 的组合式 API 风格，使得代码更加简洁和易于维护。</li></ul></li></ol><h2 id="nexttick原理" tabindex="-1">nextTick原理 <a class="header-anchor" href="#nexttick原理" aria-label="Permalink to &quot;nextTick原理&quot;">​</a></h2><p><code>nextTick</code> 是 Vue 框架中一个非常重要的概念，它用于在下一个 DOM 更新周期结束后执行回调函数。这对于在数据变化后立即访问更新后的 DOM 状态尤其有用。其原理主要涉及 JavaScript 的事件循环机制。以下是 <code>nextTick</code> 的工作原理：</p><ol><li><strong>事件循环和微任务</strong>: <ul><li>JavaScript 的事件循环机制分为宏任务（macro task）和微任务（micro task）。微任务通常在当前执行栈中的代码执行完毕后立即执行，而宏任务则是在下一次事件循环时执行。</li><li>常见的微任务包括 <code>Promise.then</code>、<code>MutationObserver</code>，而常见的宏任务包括 <code>setTimeout</code>、<code>setInterval</code>。</li></ul></li><li><strong>Vue 的更新机制</strong>: <ul><li>Vue 在更新组件时，会将所有的数据变更批量推入一个队列中，并在下一个事件循环中执行这些更新。这种批量更新机制可以避免由于数据频繁变化导致的多次 DOM 更新，从而提高性能。</li></ul></li><li><strong>实现 <code>nextTick</code></strong>: <ul><li>Vue 的 <code>nextTick</code> 方法利用了微任务队列来实现。它会在内部维护一个回调队列，并使用 <code>Promise.then</code> 或 <code>MutationObserver</code>（根据浏览器环境选择）将这些回调推入微任务队列。</li><li>当 Vue 处理完所有的 DOM 更新后，<code>nextTick</code> 中的回调才会被执行，这确保了这些回调是在 DOM 更新完成后才被调用。</li></ul></li></ol><p>通过 <code>nextTick</code>，开发者可以确保在数据变化导致的 DOM 更新完成后执行特定的逻辑，从而避免直接访问未更新的 DOM 状态。</p><h2 id="宏任务和微任务" tabindex="-1">宏任务和微任务 <a class="header-anchor" href="#宏任务和微任务" aria-label="Permalink to &quot;宏任务和微任务&quot;">​</a></h2><p>宏任务（Macro Task）和微任务（Micro Task）是 JavaScript 事件循环机制中的两个重要概念，它们定义了在事件循环中任务的执行顺序和优先级。以下是它们的区别：</p><ol><li><strong>定义与执行顺序</strong>: <ul><li><strong>宏任务</strong>: 宏任务是指在事件循环中执行的较大任务单元。每次事件循环的开始都会从宏任务队列中取出一个任务来执行。常见的宏任务包括：<code>setTimeout</code>、<code>setInterval</code>、<code>setImmediate</code>（Node.js 环境）、I/O 操作、UI 渲染等。</li><li><strong>微任务</strong>: 微任务是在当前宏任务执行结束后立即执行的任务，但在下一个宏任务开始之前执行。微任务通常用于需要在当前任务结束后立即执行的操作。常见的微任务包括：<code>Promise.then</code>、<code>MutationObserver</code>、<code>process.nextTick</code>（Node.js 环境）。</li></ul></li><li><strong>优先级</strong>: <ul><li>微任务的优先级高于宏任务。在一个宏任务执行完毕后，所有在此期间产生的微任务会被立即执行，之后才会执行下一个宏任务。这意味着微任务会尽可能快地执行。</li></ul></li><li><strong>执行过程</strong>: <ul><li>当一个 JavaScript 程序开始执行时，首先会进入一个全局的宏任务（通常是主程序代码）。在这个宏任务执行期间，可能会产生多个微任务。</li><li>当前宏任务执行完毕后，事件循环会检查微任务队列，并执行所有微任务。</li><li>当微任务队列清空后，事件循环会继续执行下一个宏任务。</li></ul></li></ol><h2 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-label="Permalink to &quot;事件循环&quot;">​</a></h2><p>在事件循环中，当主线程执行完当前的同步任务后，会检查事件队列中是否有待处理的事件。如果有，主线程会取出事件并执行对应的回调函数。这个循环的过程被称为<strong>事件循环</strong>（Event Loop），它由<strong>主线程</strong>和<strong>任务队列</strong>两部分组成。<strong>主线程</strong>负责执行<code>同步任务</code>，而<code>异步任务</code>则通过<strong>任务队列</strong>进行处理。这种机制保证了异步任务在适当的时机能够插入执行，从而实现了JavaScript的非阻塞异步执行。</p><p>事件循环流程如下：</p><ol><li>主线程读取JavaScript代码，形成相应的堆和执行栈。</li><li>当主线程遇到异步任务时，将其委托给对应的异步进程（如Web API）处理。</li><li>异步任务完成后，将相应的回调函数推入任务队列。</li><li>主线程执行完同步任务后，检查任务队列，如果有任务，则按照<code>先进先出</code>的原则将任务推入主线程执行。</li><li>重复执行以上步骤，形成事件循环。</li><li></li></ol><h2 id="输入url到页面加载过程" tabindex="-1">输入URL到页面加载过程 <a class="header-anchor" href="#输入url到页面加载过程" aria-label="Permalink to &quot;输入URL到页面加载过程&quot;">​</a></h2><p>当你在浏览器中输入一个 URL 并按下回车键后，浏览器会经历一系列步骤来加载并显示页面。这些步骤包括：</p><ol><li><p><strong>DNS 解析</strong>:</p><ul><li>浏览器首先检查本地缓存中是否有该域名的 DNS 记录。</li><li>如果没有缓存，浏览器会向 DNS 服务器请求解析该域名，以获取对应的 IP 地址。</li></ul></li><li><p><strong>建立 TCP 连接</strong>:</p><ul><li>使用获取到的 IP 地址，浏览器与服务器建立一个 TCP 连接。通常使用三次握手来建立连接。</li></ul></li><li><p><strong>发送 HTTP 请求</strong>:</p><ul><li>一旦连接建立，浏览器会构建一个 HTTP 请求并发送给服务器。请求中包含了请求的方法（如 GET、POST）、请求的 URL、请求头等信息。</li></ul></li><li><p><strong>服务器处理请求</strong>:</p><ul><li>服务器接收到请求后，处理请求并生成响应。这可能涉及到查询数据库、执行服务器端脚本等操作。</li></ul></li><li><p><strong>返回 HTTP 响应</strong>:</p><ul><li>服务器将生成的响应通过 HTTP 协议返回给浏览器。响应包括状态码、响应头和响应体（如 HTML 内容）。</li></ul></li><li><p><strong>浏览器接收响应</strong>:</p><ul><li>浏览器接收到响应后，检查响应状态码。如果状态码是 200，说明请求成功，浏览器会开始处理响应体。</li></ul></li><li><p><strong>解析 HTML</strong>:</p><ul><li>浏览器解析 HTML 文档，构建 DOM 树。解析过程中遇到 CSS、JavaScript、图像等资源时，浏览器会发起新的 HTTP 请求来获取这些资源。</li></ul></li><li><p><strong>解析和应用 CSS</strong>:</p><ul><li>浏览器下载并解析 CSS 文件，生成 CSSOM（CSS 对象模型）。CSSOM 与 DOM 结合，生成渲染树。</li></ul></li><li><p><strong>执行 JavaScript</strong>:</p><ul><li>浏览器下载并执行 JavaScript 文件。JavaScript 可能会修改 DOM 或 CSSOM，导致重新渲染。</li></ul></li><li><p><strong>布局和绘制</strong>:</p><ul><li>浏览器根据渲染树计算每个节点的位置和大小（布局），然后将元素绘制到屏幕上。</li></ul></li><li><p><strong>显示页面</strong>:</p><ul><li>最终，用户可以看到页面内容。</li></ul></li><li><p><strong>持续加载</strong>:</p><ul><li>页面可能会继续加载其他资源（如异步 JavaScript、延迟加载的图像等），并不断更新显示。</li></ul></li></ol><p>这些步骤涉及网络、浏览器内核、JavaScript 引擎等多个层面的协作，确保用户能够快速、正确地看到网页内容。</p><h2 id="mvvm开发模式" tabindex="-1">MVVM开发模式 <a class="header-anchor" href="#mvvm开发模式" aria-label="Permalink to &quot;MVVM开发模式&quot;">​</a></h2><p>MVVM分为Model、View、ViewModel三者。</p><p>Model 代表数据模型，数据和业务逻辑都在Model层中定义；</p><p>View 代表UI视图，负责数据的展示；</p><p>ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；</p><p>Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。</p><p>这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 dom。</p><h2 id="vue的key有什么作用" tabindex="-1">Vue的key有什么作用 <a class="header-anchor" href="#vue的key有什么作用" aria-label="Permalink to &quot;Vue的key有什么作用&quot;">​</a></h2><p>key的作用主要是为了高效的更新虚拟DOM。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。</p><h2 id="http和https的区别" tabindex="-1">HTTP和HTTPS的区别 <a class="header-anchor" href="#http和https的区别" aria-label="Permalink to &quot;HTTP和HTTPS的区别&quot;">​</a></h2><p>HTTP（超文本传输协议）和 HTTPS（超文本传输协议安全）都是用于在 Web 浏览器和 Web 服务器之间传输数据的协议。它们之间的主要区别在于安全性。以下是 HTTP 和 HTTPS 的关键区别：</p><ol><li><strong>安全性</strong>: <ul><li><strong>HTTP</strong>: 数据以明文形式传输，这意味着任何在传输路径上的人都可以读取传输的数据。这使得 HTTP 易受中间人攻击、数据窃听和其他安全威胁。</li><li><strong>HTTPS</strong>: 在 HTTP 的基础上增加了 SSL/TLS 加密层，确保数据在传输过程中是加密的。这提供了数据保密性、完整性和真实性，防止数据被窃听或篡改。</li></ul></li><li><strong>端口</strong>: <ul><li><strong>HTTP</strong>: 默认使用端口 80。</li><li><strong>HTTPS</strong>: 默认使用端口 443。</li></ul></li><li><strong>证书</strong>: <ul><li><strong>HTTP</strong>: 不需要任何证书。</li><li><strong>HTTPS</strong>: 需要 SSL/TLS 证书来验证服务器的身份。证书由受信任的证书颁发机构（CA）颁发，确保客户端和服务器之间的通信是安全的。</li></ul></li><li><strong>性能</strong>: <ul><li><strong>HTTP</strong>: 因为没有加密和解密过程，HTTP 通常比 HTTPS 稍微快一些。</li><li><strong>HTTPS</strong>: 加密和解密过程增加了额外的计算开销，但现代硬件和优化技术（如 HTTP/2 和 TLS 1.3）已经显著减少了性能差异。</li></ul></li><li><strong>SEO 和信任</strong>: <ul><li><strong>HTTP</strong>: 搜索引擎（如 Google）可能会降低 HTTP 网站的排名，因为它们不安全。</li><li><strong>HTTPS</strong>: 搜索引擎通常优先考虑 HTTPS 网站，因为它们提供更安全的用户体验。此外，浏览器会在地址栏中显示安全锁图标，增加用户对网站的信任。</li></ul></li><li><strong>数据完整性</strong>: <ul><li><strong>HTTP</strong>: 数据可能在传输过程中被篡改。</li><li><strong>HTTPS</strong>: 通过加密和校验机制，确保数据在传输过程中不会被篡改。</li></ul></li></ol><p>总之，HTTPS 是 HTTP 的安全版本，提供了加密和身份验证功能。在现代 Web 开发中，使用 HTTPS 是标准实践，特别是对于需要保护用户数据的网站。</p><h2 id="三次握手和四次挥手" tabindex="-1">三次握手和四次挥手 <a class="header-anchor" href="#三次握手和四次挥手" aria-label="Permalink to &quot;三次握手和四次挥手&quot;">​</a></h2><p>在计算机网络中，三次握手和四次挥手是 TCP（传输控制协议）用来建立和终止连接的过程。以下是对这两个过程的简要说明：</p><h4 id="三次握手-建立连接" tabindex="-1">三次握手（建立连接） <a class="header-anchor" href="#三次握手-建立连接" aria-label="Permalink to &quot;三次握手（建立连接）&quot;">​</a></h4><p>三次握手用于在客户端和服务器之间建立一个可靠的 TCP 连接。其步骤如下：</p><ol><li>第一次握手（SYN）: <ul><li>客户端向服务器发送一个 SYN（synchronize）报文，表示请求建立连接。这个报文包含一个初始序列号。</li></ul></li><li>第二次握手（SYN-ACK）: <ul><li>服务器收到 SYN 报文后，向客户端发送一个 SYN-ACK 报文，表示同意建立连接，并回复一个自己的初始序列号。</li></ul></li><li>第三次握手（ACK）: <ul><li>客户端收到 SYN-ACK 报文后，向服务器发送一个确认报文 ACK，表示连接已建立。</li></ul></li></ol><p>通过三次握手，双方确认了彼此的接收能力和初始化序列号，确保了连接的可靠性。</p><h4 id="四次挥手-终止连接" tabindex="-1">四次挥手（终止连接） <a class="header-anchor" href="#四次挥手-终止连接" aria-label="Permalink to &quot;四次挥手（终止连接）&quot;">​</a></h4><p>四次挥手用于在客户端和服务器之间安全地终止一个 TCP 连接。其步骤如下：</p><ol><li><strong>第一次挥手（FIN）</strong>: <ul><li>客户端发送一个 FIN（finish）报文，表示它不再发送数据，但仍可以接收数据。</li></ul></li><li><strong>第二次挥手（ACK）</strong>: <ul><li>服务器收到 FIN 报文后，发送一个 ACK 报文，确认已收到客户端的 FIN。此时，服务器可能还有数据要发送给客户端。</li></ul></li><li><strong>第三次挥手（FIN）</strong>: <ul><li>服务器完成数据发送后，发送一个 FIN 报文，表示它也不再需要发送数据。</li></ul></li><li><strong>第四次挥手（ACK）</strong>: <ul><li>客户端收到服务器的 FIN 报文后，发送一个 ACK 报文，确认已收到服务器的 FIN。此时，连接正式关闭。</li></ul></li></ol><p>四次挥手确保了双方都能优雅地完成数据传输并释放资源。</p><p>通过三次握手和四次挥手，TCP 协议提供了可靠的连接管理机制，确保数据的有序、可靠传输。</p>',43)]))}const T=i(r,[["render",n]]);export{p as __pageData,T as default};
