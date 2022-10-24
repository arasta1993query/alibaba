import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/list", () => {
      return {
        list: [
          {
            id: "apple",
            label: "Apple",
          },
          {
            id: "gillette",
            label: "Gillette",
          },
          {
            id: "mastercard",
            label: "Mastercard",
          },
          {
            id: "the-walt-disney-company",
            label: "The Walt Disney Company",
          },
          {
            id: "facebook",
            label: "Facebook",
          },
          {
            id: "louis-vuitton",
            label: "Louis Vuitton",
          },
          {
            id: "samsung",
            label: "Samsung",
          },
          {
            id: "mc-donald",
            label: "McDonald",
          },
        ],
      };
    });
  },
});

export class makeServer {}
