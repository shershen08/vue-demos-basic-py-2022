<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{id}}
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- css class -->
    <h3 data-test="cmp-title">{{name}}</h3>

    <!-- <p v-capitalize>vasya</p>
    <p v-capitalize>Vasya</p>
    <p v-capitalize>john smith</p>
    <p v-capitalize><img src="/.."> john smith</p> -->

    Loading: {{isDataLoaded}}

    <p v-bind:id="name"
        v-bind:style="{'fontSize': `${foo}px`}">name >=5 </p>

    <div class="default css-class"
         v-bind:class="{'error': name.length < 5, 'success': isDataLoaded}">

      <br>
      some text and content
      <br>

    <button data-test="change-name-button" v-on:click="chageName">change name</button>
    <button @click="chageName">change name 2</button>

    <input v-model="name"/>

    </div>

    <p>{{foo}}</p>
    <p>{{foo + 45}}</p>
    <p>{{foo.toString()}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import UserName from '@/components/UserName.vue';

export default {
  name: 'HomeView',
  props: ['id'],
  components: {
    // UserName,
  },
  computed: {
    idPlusName() {
      return this.id + this.name;
    },
  },
  methods: {
    chageName() {
      this.name = 'Alex';
      this.loadData();
    },
    loadData() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.isDataLoaded = true;
        });
    },
  },
  data() {
    return {
      foo: 42,
      isDataLoaded: false,
      name: 'Mike',
    };
  },
};
</script>

<style>
  .Mike {
    background-color: aqua;
  }
  .Alex {
    background-color: blueviolet;
  }
  .error {
    background-color: rgb(242, 160, 177);
    border: 1px solid red;
  }
  div, body {
    /* background-color: brown; */
  }
</style>
