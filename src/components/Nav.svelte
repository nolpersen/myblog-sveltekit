<script>
    import Icon from '@iconify/svelte';
    import jQuery from 'jquery';

    let search_text = "";
    const jq = jQuery;

    // $: if(search_text == ""){
    //     jq(".post-container").show();
    // }

    // @ts-ignore
    // jq.expr[':'].icontains = function(a, i, m) {
    //     return jq(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    // };

    function showSearchBar(){
        jq("#search-input").toggle("slow").focus();
    }

    function search(){
        if(search_text.length > 3){
            jq(`.post-title:not(:contains(${search_text}))`).parent().parent().parent().hide()
        }
    }
</script>
<nav>
    <ul>
      <li><a href="/"><strong>Home</strong></a></li>
    </ul>
    <ul>
        <li><a href="/about">About</a></li>
        <li>
            <div class="search-form">
                <button id="search-button" on:click={showSearchBar}>
                    <Icon icon="ic:baseline-search"  />
                </button>
                <input type="text" placeholder="Search..." id="search-input" on:keyup={search} bind:value={search_text}>
            </div>
        </li>
      
    </ul>
</nav>

<style>
    #search-input{
        display: none;
    }

    #search-button{
        width: 1em;
        background-color: transparent;
        border: none;
        font-size: 24px;
        margin-right: 1rem;
    }
    .search-form{
        display: flex;
    }

    button:focus {
        --box-shadow: none;
    }
</style>