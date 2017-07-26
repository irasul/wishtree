<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta charset="utf-8" name="company" content="WishTree Cinemas"/>
	<meta charset="utf-8" name="description" content="Wedding Photography & Videography Toronto, Brampton, Scarborough, Mississagua, GTA"/>
	<meta charset="utf-8" name="keywords" content="WishTree Cinemas, Wedding, Photography, Videography, Toronto, gta, Mississagua, Scarborough, whitby"/>
	<meta charset="utf-8" name="robot" content="index"/>

	<title>WishTree Cinemas | Toronto | GTA | Wedding Photography & Videography</title>
	<script>!function(e,t,a,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=t.createElement(a),s=t.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","UA-100340149-1","auto"),ga("send","pageview");</script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<script src='../js/initNg.js'></script>
	<script src="../js/wt.js"></script>
	<script src="../js/logo.js"></script>
	<script src="../js/contracts.js"></script>

	<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
	<link rel="stylesheet" href="../lightbox/css/lightbox.css">
	<link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Tangerine|Arizonia|Fredericka+the+Great|Roboto:100|Roboto+Slab:100|Slabo+27px" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Arizonia' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' href='../css/wt.css'/>
	<link rel='stylesheet' href='../css/contracts.css'/>
</head>
<body ng-app='app'>
	<nav class='nav navbar' id='menu'>
		<div class='container'>
			<ul class="nav nav-tabs pull-left">
			  <li class='pull-left'><div id='wt-logo' ></div><li>
			  <li class='pull-left hidden-xs'><h3 id='wt-cName'>WishTree Cinemas</h3><li>	
			  <div class='clearfix' style='padding-top:25px'>
			</ul>
			<ul class="nav nav-tabs pull-right" style='margin-top:25px;' id="main-menu">  
				  <li role="presentation" ><a href='../logout.php'>Logout</a></li>
			</ul>
		</div>
	</nav>
	<div class="container" ng-controller='contractsCtrl'>
		<h3 role="presentation" >
			Download My Contract(s)
		</h3>
		<hr>
		<div ng-repeat='c in userContracts' contract='c' download-contract class='btn btn-default btn-lg btn-contract'>
			<span>{{c.ContractName+' '+c.Type}}</span>
		</div>
		<hr>
		<h3>Enent Details</h3>

		<hr>


	</div>
</body>