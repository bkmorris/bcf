Router.route('/', function(){

	this.layout('layout');
	this.render('home');

});

Router.route('/about', function(){
	this.layout('layout');
	this.render('about');
});

Router.route('/contact', function(){
	this.layout('layout');
	this.render('contact');
});

Router.route('/products', function(){
	this.layout('layout');
	this.render('products');
});

Router.route('/customerservice', function(){
	this.layout('layout');
	this.render('customerservice');
});

Router.route('/exchange', function(){
	this.layout('layout');
	this.render('exchange');
});

Router.route('/markets', function(){
	this.layout('layout');
	this.render('markets');
});

Router.route('/business', function(){
	this.layout('layout');
	this.render('business');
});