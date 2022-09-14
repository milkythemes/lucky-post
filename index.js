function loadScript(url, callback) {
    const head = document.head;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

function luckyPost() {
    let ghostVersion = typeof version == 'undefined' ? 'v3.0' : version;
    let apiKey =
        typeof key == 'undefined' ?
            console.error('Ghost integration API key is missing. Please refer to documentation at https://milkythemes.com/plugins/lucky-post') : key;

    const pageUrl = `${window.location.protocol}//${window.location.hostname}`;

    const api = new GhostContentAPI({
        url: pageUrl,
        key: apiKey,
        version: ghostVersion
    });

    const postUrl = [];

    const randomBtn = document.getElementsByClassName("btn-random");
    const stringHostUrl = `[href="${pageUrl}/#rdm-post/"]`
    const randomPost = document.querySelectorAll(stringHostUrl);


    api.posts
        .browse({ limit: 15 })
        .then((posts) => {
            posts.forEach((post) => {
                postUrl.push(post.slug)
            });
        })
        .then(() => {
            console.log(`Random post: ${pageUrl}/${randomUrl(postUrl)}`);
            for (let i = 0; i < randomBtn.length; i++) {
                randomBtn[i].href = `${pageUrl}/${randomUrl(postUrl)}`;
            }
            for (let i = 0; i < randomPost.length; i++) {
                randomPost[i].href = `${pageUrl}/${randomUrl(postUrl)}`;
            }
        });

    // The randomUrl function is used to grab a random array from the list 
    function randomUrl(postUrl) {
        return postUrl[Math.floor(Math.random() * postUrl.length)];
    }
}

loadScript('https://unpkg.com/@tryghost/content-api@latest/umd/content-api.min.js', luckyPost);