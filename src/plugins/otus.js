import UserName from './UserName';

export const apiService = {};

const otusPython = {
  install(app, options) {
    // <p v-capitalize>vasya</p>  --> <p>Vasya Pupkin</p>
    app.directive('capitalize', { // v-capitalize
      mounted: (el) => {
        if (el.children.length > 0) return;
        const name = el.innerText;
        const names = name.split(' ');
        const newName = names.map((text) => text[0].toUpperCase() + text.slice(1, text.length)).join(' ');
        el.innerText = newName;
      },
    });

    app.component('UserName', UserName);

    console.log('otusPython initalised');
  },
};

export default otusPython;
