# Lucky post

Generate random post links for Ghost. It's easy to set up and get going.

## Installing Lucky Post

1. In your Ghost admin dashboard, navigate to **Settings > Code injections** and in your "Site footer" paste the following code:
```html
<script src="https://unpkg.com/@milky-themes/lucky-post@latest/min/index-min.js"></script>
```

2. Navigate to **Settings > Integrations** and select "Add custom integration"

3. Name your custom integration `Lucky Post` and the description as `Generate random post links for Ghost`

4. Copy your **Content API key**

5. Navigate to **Settings > Code injections** and in your "Site header" insert the following code and replace the placeholder with your **Content API key**:
```html
<script>
    let key = 'replace-text-with-api-key'
</script>
```

**All done!**

## How to use Lucky Post

There are two ways to use Lucky Post and some rules to follow to ensure it works.

### Method 1: href link

Perhaps the simplest method is to link your href (url) to ``https://example.com/rdm-post/``
- https://example.com being your own website URL
- /rdm-post/ being the trigger

Important notes:
- It's important to keep the forward-slash '/' at the beginning and end of 'rdm-post' along with the full url. Otherwise the trigger will not function.
**Correct** usage example:
```html
<a href="https://example.com/rdm-post/">Random Post</a>
```
**Inccorect** usage:
```html
<a href="/rdm-post">Random Post</a>
```

### Method 2: classname

Sometimes we may have elements without a href (url) link anchored. In these instances we can use the classname **btn-random**

E.g.
```html
<button class="btn-random">Get random post</button>
```

### How do I add Lucky Post to my navigation?

Navigate to **Settings > Navigation** and create a new link with your website URL followed by '/rdm-post/'

E.g. `https://example.com/rdm-post/`