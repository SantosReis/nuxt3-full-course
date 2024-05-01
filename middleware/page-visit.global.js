export default defineNuxtRouteMiddleware(() => {
  console.log("working globally");
  const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;

  console.log("pageVisitCount", pageVisitCount.value);
});
