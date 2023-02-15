<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<section id="article">
    {#each data.items.articles as item }
        <article class="post-container">
            <div class="grid">
                <div>
                    <img src="{item.urlToImage}" alt="{item.title}">
                </div>
                <div>
                    <h1 class="post-title"><a href="{item.url}" target="_blank" rel="noreferrer">{item.title}</a></h1>
                    <p class="post-info">
                        <span>{item.author}</span><br> 
                        <span>{item.publishedAt}</span>
                    </p>
                    <p class="post-desc">{item.description}</p>
                </div>
            </div>
            
        </article>
    {/each}
</section>
<style>
    .post-title{
        font-size: 24px;
        margin-bottom: 10px;
    }

    .post-info{
        margin-bottom: 10px;
        font-weight: bold;
    }

    .post-desc{
        font-size: 20px;
        color: #ccc;
    }
</style>
