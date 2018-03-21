var initialState = [
	{
		id : 1,
		name : 'Iphone 7 Plus',
		image : 'http://iphonedanang.net/wp-content/uploads/2017/03/iphone-7-plus-red-128gb.png',
		description : 'Sản phẩm do Apple sản xuất',
		price : 500,
		inventory : 10,
		rating : 4
	},
	{
		id : 2,
		name : 'SamSung Galaxy S7',
		image : 'https://www.att.com/catalog/en/skus/Samsung/Galaxy%20S7/overview/302281-PDP-Overview-SSGS7-img1@2x.jpg',
		description : 'Sản phẩm do SamSung sản xuất',
		price : 400,
		inventory : 15,
		rating : 3
	},
	{
		id : 3,
		name : 'Nokia 1220',
		image : 'http://1.bp.blogspot.com/-P5GhXRnz154/UWYNFDD7VhI/AAAAAAAAAXA/xGvlbxAwyP8/s1600/Hard-Reset-Nokia-1220.jpg',
		description : 'Sản phẩm do Nokia sản xuất',
		price : 120,
		inventory : 5,
		rating : 1
	}
];

const products = (state = initialState, action) => {
	switch(action.type){
		default :
			return [...state];
	}
}

export default products;