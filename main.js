
var newItemArray = function(array,i) {
	var newArray =[];
	var count;
	for(count=16*(i-1);count<16*i;count++){
		var modifiedArray = array[count];
		newArray.push(modifiedArray);
	}
	return newArray;

}

var reqdArray = newItemArray(items.results,1);
var img;
var title;
var price;
var store;

var getImage = function(object){
	title = object.title;
	img = object.Images[0]["url_170x135"];
	cost = object.price;
	store = object.Shop.shop_name;
	img_url=object.url;
	shop_url=object.Shop.url;
	$(".main-page").append(`<div class ="item"><a href="${img_url}">
							<div style="width:100%; height:180px; background-size: 100% 100%; background-image: url('${img}')"></div></a>
							<div class= "title">${title}</div>
							<div>
								<div class="shop"><a href = "${shop_url}">${store}</a></div>
								<div class="cost">${cost} </div>
							</div>`)
	
}

reqdArray.forEach(getImage);


