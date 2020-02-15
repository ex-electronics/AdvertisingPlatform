<header class="header">
	<div class="wrapper">
		<a class="header__logo-link" href="{{route('index')}}">
			<img class="header__logo-image" src="img/logo.svg" width="114" height="23" alt="vk-price">
		</a>
		<nav class="nav">
			<ul class="nav__list">
				@if(\Auth::check())
					<li class="nav__item">
						<a class="nav__link" href="{{route('autoposting')}}">Автопостинг</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="{{route('moderation')}}">Модерация</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="{{route('groups')}}">Мои площадки
							<span class="nav__link-note">12</span>
						</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="{{route('users')}}">Пользователи</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="{{route('payments')}}">Платежные данные</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="{{route('ads')}}">Мои рекламные объявления</a>
					</li>
					<li class="nav__item">
						<a class="nav__link" href="/vk/logout">Выйти</a>
					</li>
				@else
					<li class="nav__item">
						<a class="nav__link" href="/vk/auth">Войти</a>
					</li>
				@endif
			</ul>
		</nav>
	</div>
</header>
<header class="sub-header">
	<div class="wrapper">
		<h4 class="sub-header__title">Платежные данные</h4>
		@if(\Auth::check())
			<p class="sub-header__intro">Добро пожаловать, {{\Auth::user()->name}}</p>
			@if(\Auth::user()->pymented_at !== null)
				<span class="sub-header__active-date">
						активен до <output>{{date('y-m-d', strtotime(\Auth::user()->pymented_at))}}</output>
				</span>
			@endif
			<a class="btn btn--dots" type="button" href="{{route('settings')}}">
				<span class="visually-hidden">Меню</span>
			</a>
		@endif
	</div>
</header>