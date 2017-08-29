Vue.component('jumbotron', {
  template: `
      <div class="jumbotron container">
        <h1>{{heading}}</h1>
        <p>{{pOneText}}</p>
        <hr>
        <p>{{pTwoText}}</p>
        <p>
          <a class="btn btn-primary btn-lg" v-bind:href="buttonHref" target="_blank" role="button">{{buttonText}}</a>
        </p>
      </div>

  `,
  props: ['heading', 'pOneText', 'pTwoText','buttonHref', 'buttonText'],

})


var mainVm = new Vue({
    el : '#app',
    data : {
      trons: [
        {
          heading: 'Hello, World!',
          pOneText: 'This is the text for the first paragraph',
          pTwoText: 'Text for the second paragraph',
          buttonHref: 'https://www.google.com',
          buttonText: 'Google!',
      },
      {
        heading: 'Hey, Planet Earth!',
        pOneText: 'Wow! This is text!',
        pTwoText: 'This is also text!',
        buttonHref: 'https://getbootstrap.com/docs/4.0/components/jumbotron/',
        buttonText: 'Bootstrap!',
      },
      {
        heading: 'Sup, Universe!',
        pOneText: 'This is not very much text!',
        pTwoText: 'Same here!',
        buttonHref: 'https://vuejs.org',
        buttonText: 'Vue.js!',
      },
    ],
  }
})
