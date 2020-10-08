<template>
    <div id="app">
        <div class="box">
            <div id="cover"></div>
            <Header></Header>
            <Todo></Todo>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from './todo/header.vue';
import Footer from './todo/footer.jsx';
import Todo from './todo/todo.vue';

export default {
    components: {
        Header,
        Footer,
        Todo,
    }
}
</script>

<style lang="stylus" scoped>
#app{
    position relative;
    left 0;
    right 0;
    top 0;
    bottom 0;
    height 100%;
}
.box{
    position absolute;
    left 0;
    top 0;
    right 0;
    bottom 0;
}
#cover{
    position absolute;
    left 0;
    top 0;
    right 0;
    bottom 0;
    // background-color #BDFCC9;
    opacity .3;
    z-index -1;
}
</style>
