<template>
    <div class="block"  v-bind:class="{ reverse: !!reverse }">
        <div class="block__img-container">
            <img v-if="srcImg" :src="$withBase(srcImg)" :alt="altImg"/>
        </div>
        <div class="block__content">
            <h3>{{title}}</h3>
            <p class="block__content__text">
                {{text}}
            </p>
        </div>
    </div>    
</template>
<script lang="js">
export default {
    name: 'BlockComponent',
    props: ["title", "srcImg", "text", "altImg", "reverse"],
}
</script>
<style lang="css">
.block{   
    display: flex;
    flex-flow: row wrap;
    background: #eee;
    padding: 2% 4%;
}

.block div{
    max-width: 50%;
    flex: 1 1;
}

.block .block__img-container{
    display: flex;
    flex: 0 1 50%;
}
.block .block__img-container img{
    margin:auto;
    max-width: 85%;
    max-height: 350px;
    -webkit-box-shadow: 6px 6px 28px -4px rgba(0,0,0,0.47);
    -moz-box-shadow: 6px 6px 28px -4px rgba(0,0,0,0.47);
    box-shadow: 6px 6px 28px -4px rgba(0,0,0,0.47);
}

.block .block__content__text{
    white-space: pre-line;
}

.block.reverse{
    flex-direction: row-reverse;
    background: #ffffff;
}

.block.reverse .block__content{
    margin-left: 4%
}
@media (max-width: 719px){
    .block div{
    
        max-width: 100%;
    }

}

</style>