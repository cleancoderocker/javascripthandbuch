(function () {
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("tests"));
})();