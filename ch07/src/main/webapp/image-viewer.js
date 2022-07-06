var imageViewer = {
	init: function(){
		$(this._init.bind(this));
	},
	_init: function(){
		$("#btn-change").click(this._changeImage.bind(this))
		$(".image-viewer img").dblclick(this._showImageName);
		$("#btn-slideshow").click(this._slideShow.bind(this))
		// 첫번째 이미지 선택
		this._changeImage();
	},
	_slideShow: function(){
		/*시작
		  setInterval(...)
		  버튼 텍스트: 시작 -> 중지
		
	 	  중지
		  clearInterval(...)
		  버튼 텍스트: 중지 -> 시작
		*/
		if(this._intervalId){
			/* 슬라이드쇼가 진행 상태 */
			
			//1. 타이머 중지
			
			clearInterval(this._intervalId);
			this._intervalId = null;
			//2. 버튼 텍스트: 중지 -> 시작
			$("#btn-slideshow").text("슬라이드쇼 시작");

			
		} else{
			/* 슬라이드쇼가 중지 상태 */
			
			//1. 타이머 시작
			this._intervalId = setInterval(this._changeImage.bind(this),1000);
			//2. 버튼 텍스트: 시작 -> 중지
			$("#btn-slideshow").text("슬라이드쇼 중지");

		}
			
		
		
		console.log(this._intervalId)
		
	},
	_intervalId: null,
	
	_showImageName: function(){
		alert($(this).attr('alt'));
	},
	
	_changeImage: function(){
		do{
			var index = Math.floor(Math.random()*this._images.length);

		}while($(".image-viewer img").attr('alt') === this._images[index].name);
		var info = this._images[index];
		
		$(".image-viewer img").attr({
			src: 'images/'+info.file,
			alt: info.name
		});
	},
	_images: [{
		name: '이미지01',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '이미지02',
		file: 'Desert.jpg'
	},{
		name: '이미지03',
		file: 'Hydrangeas.jpg'
	},{
		name: '이미지04',
		file: 'Jellyfish.jpg'
	},{
		name: '이미지05',
		file: 'Koala.jpg'
	},{
		name: '이미지06',
		file: 'Lighthouse.jpg'
	},{
		name: '이미지07',
		file: 'Penguins.jpg'
	},{
		name: '이미지08',
		file: 'Tulips.jpg'
	}
	]
}