function loadScript(t,e){const o=document.head,n=document.createElement("script");n.type="text/javascript",n.src=t,n.onreadystatechange=e,n.onload=e,o.appendChild(n)}function luckyPost(){let t="undefined"==typeof version?"v3.0":version,e="undefined"==typeof key?console.error("Ghost integration API key is missing. Please refer to documentation at https://milkythemes.com/plugins/lucky-post"):key;const o=`${window.location.protocol}//${window.location.hostname}`,n=new GhostContentAPI({url:o,key:e,version:t}),s=[],r=document.getElementsByClassName("btn-random"),l=`[href="${o}/#rdm-post/"]`,c=document.querySelectorAll(l);function i(t){return t[Math.floor(Math.random()*t.length)]}n.posts.browse({limit:15}).then(t=>{t.forEach(t=>{s.push(t.slug)})}).then(()=>{console.log(`Random post: ${o}/${i(s)}`);for(let t=0;t<r.length;t++)r[t].href=`${o}/${i(s)}`;for(let t=0;t<c.length;t++)c[t].href=`${o}/${i(s)}`})}loadScript("https://unpkg.com/@tryghost/content-api@latest/umd/content-api.min.js",luckyPost);