// DOM Event Model Level0: basic: HTML Element의 Event Attribute에 Event Handler(함수)
// JavaScript Code(DOM API) 로만 작성하기
var tabBox = {
   _liSelected: null,
   init: function() {
      window.onload = this._onWindowLoad.bind(this);
   },
   _onTabClicked: function(){
	   if (tabBox._liSelected != null) {
	      tabBox._liSelected.className = '';
   		}
	   this.className = 'selected';
	   tabBox._liSelected = this;
	},
   _onWindowLoad: function() {
      document.getElementById("tab01").onclick = this.onTabClicked;
      document.getElementById("tab02").onclick = this.onTabClicked;
      document.getElementById("tab03").onclick = this.onTabClicked;
      document.getElementById("tab04").onclick = this.onTabClicked;
      document.getElementById("tab05").onclick = this.onTabClicked;
   
   }
};