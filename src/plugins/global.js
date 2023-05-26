const globalComponents = {
  install(app) {
    const components = import.meta.globEager('./../components/global/**/*.vue');
    
    Object.entries(components).forEach(([path, component]) => {
      app.component(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
        component.default
      );
    });
  },
};
export default globalComponents;