import router from "@sitevision/api/common/router";

router.get("/", (req, res) => {
  const message = "Hello, world!";

  res.agnosticRender("", {
    message,
  });
});
