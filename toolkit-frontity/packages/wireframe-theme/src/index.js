import Root from "./components"

const workshopHandler = {
  name: "workshop-tool",
  priority: 10,
  pattern: "/workshop-tool/",
  func: ({ state }) => {
    state.source.data['/workshop-tool/'].isWorkshopTool = true;    
  }
}

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
      init: ({ libraries }) => {
        libraries.source.handlers.push(workshopHandler);
      },
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
