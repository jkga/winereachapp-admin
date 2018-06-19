export default {
  name: 'app-style',
  data: function(){
    return {
      style: ''
    }
  },
  created: function () {
    this.$slots.default.forEach((val, index) => {
      this.style += val.text
    }) 
  },
  mounted: function() {
    // create <style/>
    const styl = document.createElement('style')
    const txtNode = document.createTextNode(this.style)
    // replace current node
    styl.append(txtNode)
    this.$el.replaceWith(styl)
  },
  template:'<span><!-- please see styling in head section--></span>'
}