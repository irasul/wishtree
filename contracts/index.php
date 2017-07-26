<html>
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>WishTree Cinemas | Contracts</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<script src="../js/initNg.js"></script>
	<script src="../js/auth.js"></script>
	<script src="../js/logo.js"></script>

	<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
	<link href="https://fonts.googleapis.com/css?family=Sacramento" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Tangerine|Arizonia|Fredericka+the+Great|Roboto:100|Roboto+Slab:100|Slabo+27px" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Arizonia' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' href='../css/wt.css'/>
	<link rel='stylesheet' href='../css/auth.css'/>
</head>
	<body ng-app="app">
		<div class="row clearfix">
			<div id="left-panel" ng-controller='authCtrl' class="text-center">
				<div class="clearfix" id='input-wrapper'>
					<input type="text" id="username" class="form-control" placeholder="user name" ng-model='username'>
					<input type="password" id="password" class="form-control"  placeholder="password" ng-model='password'>
					<a name="submit" class="btn btn-success btn-lg" submit-button>Let's Go!</a>
				</div>
			</div>
		</div>
		<div id="right-panel">
			<div class='row'>
				<p style='text-align:center'>
					<img src='..\img\logo\\wishtree-lrg-2.png'/> <br>
					<h1 class="text-center">WishTree Cinemas <br>
					CONTRACTS</h1>
				</p>
			</div>
		</div>
	</body>
</html>
