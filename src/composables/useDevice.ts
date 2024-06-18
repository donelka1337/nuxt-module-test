export const useDevice = () => {
  const isMobile = ref(false);
  const isTablet = ref(false);

  const checkDevice = () => {
    isMobile.value = window.innerWidth <= 640;
    isTablet.value = window.innerWidth <= 992;
  };

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDevice);
  });

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => window.removeEventListener('resize', checkDevice));
  return { isMobile, isTablet };
};
