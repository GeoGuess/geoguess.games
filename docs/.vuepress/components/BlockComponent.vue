<template>
    <div class="block">
        <div class="block__img-container">
            <img :src="$withBase(srcImg)" :alt="altImg"/>
        </div>
        <div>
            <h3>{{title}}</h3>
            <p>
                {{text}}
            </p>
        </div>
    </div>    
</template>
<script lang="js">
export default {
    name: 'BlockComponent',
    props: ["title", "srcImg", "text", "altImg"],
}
</script>
<style lang="css">
.block{   
    display: flex;
    flex-flow: row wrap;
    background: #f7f7f7;
    padding: 2%;
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
}
@media (max-width: 719px){
    .block div{
    
        max-width: 100%;
    }

}

</style>