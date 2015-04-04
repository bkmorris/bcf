Router.route('/', function(){

	this.layout('layout');
	this.render('home');

});

Router.route('/products', function(){
	this.layout('layout');
	this.render('products');
});