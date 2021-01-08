<template>
    <button class="button--grey" @click="changeMode">
    {{ btnLabel }}
    </button>
</template>

<script>
    export default {
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    },
     methods: {
        changeMode() {
            this.$colorMode.preference = 
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>