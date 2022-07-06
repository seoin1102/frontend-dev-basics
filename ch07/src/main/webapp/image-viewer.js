var imageViewer = {
	init: function(){
		$(this._init.bind(this));
	},
	_init: function(){
		$("#btn-change").click(this._changeImage.bind(this))
		$(".image-viewer img").dblclick(this._showImageName);
		
		// 첫번째 이미지 선택
		this._changeImage();
	},
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