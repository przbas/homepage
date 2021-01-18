<script>
    export let title;
    export let url;
    export let thumbnail;
    export let description;
</script>

<style>
    div {
        max-width: 370px;
        margin: 10px;
        padding: 5px;
        border: 2px solid rgb(192, 190, 172);
        border-radius: 4px;
        box-shadow: 5px 5px 14px 0px rgba(0,0,0,0.5);
        background-color: beige;
    }

    a {
        display: flex;
        text-decoration: none;
        justify-content: center;
    }

    p {
        padding: 5px;
        margin: 0;
    }
    
    img {
        width: 300px;
    }

    .title {
        color: #536;
        text-align: center;
    }

</style>

<div>
    <h3 class="title">{title}</h3>
    <a href="{url}" target="_blank"><img src="{thumbnail}" alt="{title}"></a>
    <p>{description}</p>
</div>