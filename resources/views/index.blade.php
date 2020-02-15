<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>VK PRICE</title>
		<base href="/">

		<meta name="keywords" content="HTML5 Theme" />
		<meta name="description" content="Espire - Bootstrap 4 Admin Template">
		<meta name="author" content="Theme_Nate">
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="/css/style.css">
		<link rel="stylesheet" href="/css/noty.min.css">
		<link rel="stylesheet" href="/css/fullcalendar.min.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
	</head>
	<body class="page">
		<app-root></app-root>

		@if(isset($errors))
				@foreach($errors as $error)
						<input type="hidden" name="errors[]" value="{{$error}}">
				@endforeach
		@endif

		@if(isset($successes))
				@foreach($successes as $success)
						<input type="hidden" name="successes[]" value="{{$success}}">
				@endforeach
		@endif

		<script type="text/javascript" src="/dist/inline.bundle.js"></script>
		<script type="text/javascript" src="/dist/polyfills.bundle.js"></script>
		<script type="text/javascript" src="/dist/scripts.bundle.js"></script>
		<!-- <script type="text/javascript" src="/dist/styles.bundle.js"></script> -->
		<script type="text/javascript" src="/dist/vendor.bundle.js"></script>
		<script type="text/javascript" src="/dist/main.bundle.js"></script>
	</body>
</html>