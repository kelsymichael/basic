Vue.component('search-form', {
  template: `
  
  <form>
    <div class="row">
      <div class="offset-by-four four columns">
        <label for="exampleEmailInput">Your email</label>
        <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput">
      </div>
    </div> 
    <div class="row">
      <div class="offset-by-four four columns">
        <label for="exampleRecipientInput">Reason for contacting</label>
        <select class="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
    </div>
    <div class="row">
      <input class="offset-by-five two columns button-primary" type="submit" value="Submit">
    </div>
    <coupon></coupon>
  </form>
  `,
});


Vue.component('coupon', {
  template: `
    <div>
      <input placeholder='enter your coupon code' @blur='onCouponApplied'>
    </div>
`,
  methods: {
    onCouponApplied() {
      this.$emit('applied');
    },
    makeRequest() {
      let url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5";
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
          var response = JSON.parse(xhr.responseText);
          // console.log(response.data[0].bitly_gif_url);
          return response;
        }};
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send();
    }
  }
});



new Vue({
  el: '#app',
  data: {
    couponApplied: false,
  },
  methods: {
    onCouponApplied(){
      this.couponApplied = true;
    }
  }
});