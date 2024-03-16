<template>
  <button
    :class="{ '--expanded': expanded }"
    :aria-expanded="expanded"
    :aria-label="ariaLabel"
    :aria-controls="name"
    class="hamburger-menu"
    type="button"
  >
    <span />
    <span />
    <span />
    <span />
  </button>
</template>

<script setup lang="ts">
interface Props {
  expanded: boolean;
  name: string;
}

const props = defineProps<Props>();

const ariaLabel = computed<string>(() => (props.expanded ? 'close' : 'open') + ` ${props.name}`);
</script>

<style scoped lang="scss">
$menu-width: 39px;
$menu-height: 29px;
$menu-padding-x: 0px;
$menu-padding-y: 0px;
$line-height: 5px;

.hamburger-menu {
  position: relative;
  box-sizing: content-box;
  width: $menu-width;
  height: $menu-height;
  padding: $menu-padding-y $menu-padding-x;
  cursor: pointer;
  background: none;
  border: none;
  transition: 500ms ease-in-out;

  & > span {
    position: absolute;
    left: $menu-padding-x;
    display: block;
    width: calc(100% - $menu-padding-x * 2);
    height: $line-height;
    background-color: $white;
    opacity: 1;
    transition: 250ms ease-in-out;

    &:nth-child(1) {
      top: $menu-padding-y;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: math.div($menu-height - $line-height, 2) + $menu-padding-y;
    }

    &:nth-child(4) {
      top: $menu-height - $line-height + $menu-padding-y;
    }
  }

  &.--expanded {
    & > span {
      &:nth-child(1),
      &:nth-child(4) {
        top: math.div($menu-height - $line-height, 2) + $menu-padding-y;
        left: calc(50% + $menu-padding-x);
        width: 0%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
