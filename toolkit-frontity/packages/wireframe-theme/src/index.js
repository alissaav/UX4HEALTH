import Root from "./components"


export default {
  name: "wireframe-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all([
          // actions.source.fetch("/methodology/usability-test/"),
          // actions.source.fetch("/methodology/methode-interview/")
          actions.source.fetch("/methodology"),
          actions.source.fetch("/page/2")
        ]);
      },
    }
  }
};
