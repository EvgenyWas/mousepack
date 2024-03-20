const GRID = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export default function useDisplay() {
  const width = ref<number>(0);
  const height = ref<number>(0);

  const xs = computed<boolean>(() => width.value < GRID.sm);
  const sm = computed<boolean>(() => width.value >= GRID.sm && width.value < GRID.md);
  const md = computed<boolean>(() => width.value >= GRID.md && width.value < GRID.lg);
  const lg = computed<boolean>(() => width.value >= GRID.lg && width.value < GRID.xl);
  const xl = computed<boolean>(() => width.value >= GRID.xl && width.value < GRID.xxl);
  const xxl = computed<boolean>(() => width.value >= GRID.xxl);

  const mdAndDown = computed<boolean>(() => width.value <= GRID.md);
  const lgAndUp = computed<boolean>(() => width.value >= GRID.lg);

  const onResize = () => {
    const { innerWidth, innerHeight } = window;
    width.value = innerWidth;
    height.value = innerHeight;
  };

  onMounted(() => {
    onResize();
    window.addEventListener('resize', onResize);
  });
  onUnmounted(() => window.removeEventListener('resize', onResize));

  return {
    width,
    height,
    xs,
    sm,
    md,
    mdAndDown,
    lg,
    lgAndUp,
    xl,
    xxl,
  };
}
