<script>
    import "@picocss/pico/css/pico.css"
    import "@fontsource/vt323"
    import Nav from "../components/Nav.svelte";
</script>

<div class="container">
    <Nav></Nav>
    <slot></slot>
</div>

<style>
    :root {
        --font-family: "VT323", monospace;
    }
</style>