<template>
    <div id="app">
         <router-view/>
    </div>  
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
html,body,#app{
    width: 100%;
    height: 100%;
    font-size: .14rem;
}
html{
    font-size: calc(100/375*100vw)
}

@import url('/fonts/fonts/iconfont.css')
</style>
