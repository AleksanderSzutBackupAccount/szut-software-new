<template>
    <div class="app-navigation" >
        <div ref="indicator" class="app-navigation__indicator"/>
        <nav class="app-navigation__nav" @mouseleave="mouseLeaveOnNav">
            <template
                v-for="item in navigationItems"
                :key="item"
            >
                <router-link
                    class="app-navigation__item"
                    :to="{ name: item }"
                    @mouseenter="mouseEnterOnNavItem"
                >
                    {{ $t(`views.${item}.nav-title`) }}
                </router-link>
            </template>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";

const navigationItems = reactive([
    "home",
    "contact",
    "services",
    "technologies",
    "about-us",
]);

const indicator = ref(null);

const mouseLeaveOnNav = (e: Event) => {
  const activeNavItem =  e.target.querySelector('.router-link-active');

    moveIndicatorToCurrentElement(activeNavItem);
};
const mouseEnterOnNavItem= (e: Event) => {
    moveIndicatorToCurrentElement(e.target)
};

const moveIndicatorToCurrentElement = (target) => {
    const left = target.getBoundingClientRect().x;
    const width = target.getBoundingClientRect().width
    const top = target.getBoundingClientRect().bottom

    indicator.value.style.left = left+"px";
    indicator.value.style.width = width+"px";
    indicator.value.style.top = top+"px";

    console.log()
};


</script>

<style lang="scss" scoped>
.app-navigation {
    height: 100px;
    margin: -20px;
    display: flex;
    align-items: stretch;
    &__nav {
        display: flex;
    }

    &__item {
        text-decoration: none;
        color: #fc4445;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    &__indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fc4445;
    }
}
</style>
