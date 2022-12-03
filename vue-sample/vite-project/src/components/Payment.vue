<script setup lang="ts">
import { ref, reactive, computed, toRefs, watch } from "vue";

const itemName2 = 'Chair';

const item1 = reactive({
    name: 'Desk',
    price: 40000
})

const price2 = 20000

const url1 = 'https://www.amazon.co.jp/amazonprime?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0'

const buy = (itemName: string) => {
    alert('Are you sure to buy?' + itemName + '?')
}

const input = (event: any) => {
    item1.name = event.target.value
}

const inputPrice = (event: any) => {
    item1.price = event.target.value
}

const clear = () => {
    item1.name = ''
    item1.price = 0
}

const budget = 50000

// const priceLavel = computed(() => {
//     if (item1.price > budget) {
//         return 'too expensive!'
//     } else if (item1.price > budget * 2) {
//         return 'toooo expesive'
//     } else {
//         return item1.price
//     }
// })

const priceLavel = ref<string>(item1.price + ' yen')
const { price } = toRefs(item1)
watch(price, () => {

})


</script>

<template>
    <div class="container">
        <h1>Price</h1>
        <input v-model="item1.name" />
        <input v-model="item1.price" />
        <!-- <input v-on:input="input" v-bind:value="item1.name"/> -->
        <!-- <input v-on:input="inputPrice"  v-bind:value="item1.price"/> -->
        <button v-on:click="clear">Clear</button>
        <div class="payment">
            <label>{{ item1.name }}</label>
            <label>{{ priceLavel }} yen</label>
            <a v-bind:href="url1">bought at...</a>
            <button v-on:click="buy(itemName2)">BUY</button>
        </div>
        <div class="payment">
            <label>{{ itemName2 }}</label>
            <label>{{ price2 }} yen</label>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 400px;
    background-color: aliceblue;
    margin-bottom: 8px;
}
label {
    font-size: 20px;
}
</style>
