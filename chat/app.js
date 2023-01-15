// Future plan, let's keep it in loop as of now.

const express = require("express");
const app = express();

app.post("/hello_world", (req, res) => {
  res.send([
    { message: "Please select the related option" },
    {
      message: "",
      metadata: {
        contentType: "300",
        templateId: "6",
        payload: [
          {
            title: "Pricing",
            message: "Pricing",
          },
          {
            title: "Feature",
            message: "Feature",
          },
        ],
      },
    },
  ]);
});

app.listen(8001, () => {
  console.log("listening at http://localhost:8000");
});
