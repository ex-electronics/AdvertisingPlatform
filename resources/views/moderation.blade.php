@extends('layouts.vkpr')

@section('content')
<div class="wrapper wrapper-content">
    <aside class="aside aside--left">
        <div class="public-big">
            <h3 class="title--m">69 оттенков пошлости</h3>
            <img class="public-big__image" src="img/com-cover-1.jpg" width="220" height="220" alt="69 оттенков пошлости">
            <p class="public-big__delay-posts">
                <output>15</output>
                отложенных записей
            </p>
        </div>
        <div class="aside__communities">
            <span>Сообщества: <output>26</output></span>
            <button class="btn btn--dots" type="button">
                <span class="visually-hidden">Меню</span>
            </button>
        </div>
        <ul class="communities-list">
            <li class="communities-item">
                <img src="img/group-icon-1.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Вконтакте для бизнеса</h5>
                    <span>Будь ВКонтакте со своими клиентами!</span>
                </div>
            </li>
            <li class="communities-item">
                <img src="img/group-icon-4.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Вконтакте для сообществ</h5>
                </div>
            </li>
            <li class="communities-item">
                <img src="img/group-icon-2.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Официальные страницы ВКонтакте</h5>
                </div>
            </li>
            <li class="communities-item">
                <img src="img/group-icon-3.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Social Expert</h5>
                    <span>Вы сами решаете работать с нами или сотрудничать</span>
                </div>
            </li>
            <li class="communities-item">
                <img src="img/group-icon-5.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Оформление группы ВКонтакте.</h5>
                    <span>Креативный дизайн, адаптивная верстка ...</span>
                </div>
            </li>
            <li class="communities-item">
                <img src="img/group-icon-6.png" width="49" height="49" alt="">
                <div class="communities-description">
                    <h5>Godot Engine</h5>
                    <span>2.1.5 RC1 : 3.0.4</span>
                </div>
            </li>
        </ul>

        <div class="aside__chose">
            <p>Вы можете выбрать другое ваше сообщество для создания отложенных публикаций</p>
            <button class="btn btn--regular" type="button">Выбрать сообщество</button>
        </div>
    </aside>

    <main class="main main-autoposting">
        <h6 class="main__title">Создайте отложенные публикации для вашего сообщества</h6>
        <div class="post-container">
            <div class="main__message-container comment-input-container">
                <img src="img/tesla.png" width="41" height="41" alt="tesla">
                <textarea placeholder="Что нового?"></textarea>
                <button class="btn btn--face" type="button"></button>
            </div>

            <div class="main__message-content">
                <ul class="message-content">
                    <li class="cont-lg">
                        <img src="img/post-lg.jpg" width="440" height="287" alt="post-lg">
                        <button class="btn btn--del"><span class="visually-hidden">удалить</span></button>
                    </li>
                    <li class="cont-sm">
                        <img src="img/post-sm-1.jpg" width="107" height="69" alt="post-sm">
                        <button class="btn btn--del"><span class="visually-hidden">удалить</span></button>
                    </li>
                    <li class="cont-sm">
                        <img src="img/post-sm-2.jpg" width="106" height="69" alt="post-sm">
                        <button class="btn btn--del"><span class="visually-hidden">удалить</span></button>
                    </li>
                    <li class="cont-sm cont-sm--vid">
                        <img src="img/post-sm-3.jpg" width="106" height="69" alt="post-sm">
                        <button class="btn btn--del"><span class="visually-hidden">удалить</span></button>
                        <button class="btn btn--video-duration">3:03:33</button>
                    </li>
                    <li class="cont-sm cont-sm--vid">
                        <img src="img/post-sm-4.jpg" width="106" height="69" alt="post-sm">
                        <button class="btn btn--del"><span class="visually-hidden">удалить</span></button>
                        <button class="btn btn--video-duration">3:03:33</button>
                    </li>
                </ul>
                <ul class="audio-list">
                    <li class="audio-item">
                        <button class="btn btn--play" type="button"><span class="visually-hidden">Проигрывание/Пауза</span></button>
                        <div class="audio-container"><h5 class="audio-artist">Randat, Mosta (Rus)</h5>
                            <p class="audio-title"> - Don't
                                Stay</p><span class="audio-duration">5:41</span>
                            <button class="btn btn--cross" type="button"><span class="visually-hidden">удалить</span></button>
                        </div>
                    </li>
                    <li class="audio-item">
                        <button class="btn btn--play" type="button"><span class="visually-hidden">Проигрывание/Пауза</span></button>
                        <div class="audio-container"><h5 class="audio-artist">Randat, Mosta (Rus)</h5>
                            <p class="audio-title"> - Don't
                                Stay</p><span class="audio-duration">5:41</span>
                            <button class="btn btn--cross" type="button"><span class="visually-hidden">удалить</span></button>
                        </div>
                    </li>
                    <li class="audio-item">
                        <button class="btn btn--play" type="button"><span class="visually-hidden">Проигрывание/Пауза</span></button>
                        <div class="audio-container"><h5 class="audio-artist">Randat, Mosta (Rus)</h5>
                            <p class="audio-title"> - Don't
                                Stay</p><span class="audio-duration">5:41</span>
                            <button class="btn btn--cross" type="button"><span class="visually-hidden">удалить</span></button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="publication-time">
                <h6 class="title--xs">Время публикации</h6>
                <div class="publication-time__container">
                    <input class="date-input" type="text" value="03.08.2018" readonly>
                    <button class="btn btn--calendar" type="button">
                        <span class="visually-hidden">Календарь</span>
                    </button>
                    <span class="symbol-1">в</span>
                    <div class="c-dropdown js-dropdown">
                        <input type="hidden" name="time-input-1" id="time-input-1" class="js-dropdown__input time-input">
                        <span class="c-button c-button--dropdown js-dropdown__current">0</span>
                        <ul class="c-dropdown__list">
                            <li class="c-dropdown__item" data-dropdown-value="00">00</li>
                            <li class="c-dropdown__item" data-dropdown-value="01">01</li>
                            <li class="c-dropdown__item" data-dropdown-value="02">02</li>
                            <li class="c-dropdown__item" data-dropdown-value="03">03</li>
                            <li class="c-dropdown__item" data-dropdown-value="04">04</li>
                            <li class="c-dropdown__item" data-dropdown-value="05">05</li>
                            <li class="c-dropdown__item" data-dropdown-value="06">06</li>
                            <li class="c-dropdown__item" data-dropdown-value="07">07</li>
                            <li class="c-dropdown__item" data-dropdown-value="08">08</li>
                            <li class="c-dropdown__item" data-dropdown-value="09">09</li>
                            <li class="c-dropdown__item" data-dropdown-value="10">10</li>
                            <li class="c-dropdown__item" data-dropdown-value="11">11</li>
                            <li class="c-dropdown__item" data-dropdown-value="12">12</li>
                            <li class="c-dropdown__item" data-dropdown-value="13">13</li>
                            <li class="c-dropdown__item" data-dropdown-value="14">14</li>
                            <li class="c-dropdown__item" data-dropdown-value="15">15</li>
                            <li class="c-dropdown__item" data-dropdown-value="16">16</li>
                            <li class="c-dropdown__item" data-dropdown-value="17">17</li>
                            <li class="c-dropdown__item" data-dropdown-value="18">18</li>
                            <li class="c-dropdown__item" data-dropdown-value="19">19</li>
                            <li class="c-dropdown__item" data-dropdown-value="20">20</li>
                            <li class="c-dropdown__item" data-dropdown-value="21">21</li>
                            <li class="c-dropdown__item" data-dropdown-value="22">22</li>
                            <li class="c-dropdown__item" data-dropdown-value="23">23</li>
                        </ul>
                    </div>

                    <b>:</b>

                    <div class="c-dropdown js-dropdown">
                        <input type="hidden" name="time-input-2" id="time-input-2" class="js-dropdown__input time-input">
                        <span class="c-button c-button--dropdown js-dropdown__current">00</span>
                        <ul class="c-dropdown__list">
                            <li class="c-dropdown__item" data-dropdown-value="00">00</li>
                            <li class="c-dropdown__item" data-dropdown-value="01">01</li>
                            <li class="c-dropdown__item" data-dropdown-value="02">02</li>
                            <li class="c-dropdown__item" data-dropdown-value="03">03</li>
                            <li class="c-dropdown__item" data-dropdown-value="04">04</li>
                            <li class="c-dropdown__item" data-dropdown-value="05">05</li>
                            <li class="c-dropdown__item" data-dropdown-value="06">06</li>
                            <li class="c-dropdown__item" data-dropdown-value="07">07</li>
                            <li class="c-dropdown__item" data-dropdown-value="08">08</li>
                            <li class="c-dropdown__item" data-dropdown-value="09">09</li>
                            <li class="c-dropdown__item" data-dropdown-value="10">10</li>
                            <li class="c-dropdown__item" data-dropdown-value="11">11</li>
                            <li class="c-dropdown__item" data-dropdown-value="12">12</li>
                            <li class="c-dropdown__item" data-dropdown-value="13">13</li>
                            <li class="c-dropdown__item" data-dropdown-value="14">14</li>
                            <li class="c-dropdown__item" data-dropdown-value="15">15</li>
                            <li class="c-dropdown__item" data-dropdown-value="16">16</li>
                            <li class="c-dropdown__item" data-dropdown-value="17">17</li>
                            <li class="c-dropdown__item" data-dropdown-value="18">18</li>
                            <li class="c-dropdown__item" data-dropdown-value="19">19</li>
                            <li class="c-dropdown__item" data-dropdown-value="20">20</li>
                            <li class="c-dropdown__item" data-dropdown-value="21">21</li>
                            <li class="c-dropdown__item" data-dropdown-value="22">22</li>
                            <li class="c-dropdown__item" data-dropdown-value="23">23</li>
                            <li class="c-dropdown__item" data-dropdown-value="24">24</li>
                            <li class="c-dropdown__item" data-dropdown-value="25">25</li>
                            <li class="c-dropdown__item" data-dropdown-value="26">26</li>
                            <li class="c-dropdown__item" data-dropdown-value="27">27</li>
                            <li class="c-dropdown__item" data-dropdown-value="28">28</li>
                            <li class="c-dropdown__item" data-dropdown-value="29">29</li>
                            <li class="c-dropdown__item" data-dropdown-value="30">30</li>
                            <li class="c-dropdown__item" data-dropdown-value="31">31</li>
                            <li class="c-dropdown__item" data-dropdown-value="32">32</li>
                            <li class="c-dropdown__item" data-dropdown-value="33">33</li>
                            <li class="c-dropdown__item" data-dropdown-value="34">34</li>
                            <li class="c-dropdown__item" data-dropdown-value="35">35</li>
                            <li class="c-dropdown__item" data-dropdown-value="36">36</li>
                            <li class="c-dropdown__item" data-dropdown-value="37">37</li>
                            <li class="c-dropdown__item" data-dropdown-value="38">38</li>
                            <li class="c-dropdown__item" data-dropdown-value="39">39</li>
                            <li class="c-dropdown__item" data-dropdown-value="40">40</li>
                            <li class="c-dropdown__item" data-dropdown-value="41">41</li>
                            <li class="c-dropdown__item" data-dropdown-value="42">42</li>
                            <li class="c-dropdown__item" data-dropdown-value="43">43</li>
                            <li class="c-dropdown__item" data-dropdown-value="44">44</li>
                            <li class="c-dropdown__item" data-dropdown-value="45">45</li>
                            <li class="c-dropdown__item" data-dropdown-value="46">46</li>
                            <li class="c-dropdown__item" data-dropdown-value="47">47</li>
                            <li class="c-dropdown__item" data-dropdown-value="48">48</li>
                            <li class="c-dropdown__item" data-dropdown-value="49">49</li>
                            <li class="c-dropdown__item" data-dropdown-value="50">50</li>
                            <li class="c-dropdown__item" data-dropdown-value="51">51</li>
                            <li class="c-dropdown__item" data-dropdown-value="52">52</li>
                            <li class="c-dropdown__item" data-dropdown-value="53">53</li>
                            <li class="c-dropdown__item" data-dropdown-value="54">54</li>
                            <li class="c-dropdown__item" data-dropdown-value="55">55</li>
                            <li class="c-dropdown__item" data-dropdown-value="56">56</li>
                            <li class="c-dropdown__item" data-dropdown-value="57">57</li>
                            <li class="c-dropdown__item" data-dropdown-value="58">58</li>
                            <li class="c-dropdown__item" data-dropdown-value="59">59</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

        <div class="add-files-container">
            <ul class="file-list">
                <li class="file-item">
                    <input type="file" name="file-1" id="file-1">
                    <label for="file-1">
                        <img src="img/photo.png" width="17" height="15" alt="">
                    </label>
                </li>
                <li class="file-item">
                    <input type="file" name="file-2" id="file-2">
                    <label for="file-2">
                        <img src="img/video.png" width="17" height="15" alt="">
                    </label>
                </li>
                <li class="file-item">
                    <input type="file" name="file-3" id="file-3">
                    <label for="file-3">
                        <img src="img/music.png" width="13" height="15" alt="">
                    </label>
                </li>
                <li class="file-item">
                    <input type="file" name="file-4" id="file-4">
                    <label for="file-4">
                        <img src="img/file.png" width="11" height="13" alt="">
                    </label>
                </li>
            </ul>
            <button class="btn btn--settings" type="button"><span class="visually-hidden">настройки</span></button>
            <button class="btn btn--regular btn--queue">В очередь</button>
        </div>

    </main>

    <aside class="aside aside--right">
        <div class="aside-right-header">
            <p class="title--m">Календарь постов</p>
            <input class="date-input" type="text" value="03.08.2018" readonly>
            <button class="btn btn--calendar" type="button">
                <span class="visually-hidden">Календарь</span>
            </button>
        </div>

        <div class="deferred">
            <ul class="deferred-list">
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Видео. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item">
                    <img src="img/flw.jpg" width="60" height="60" alt="">
                    <div class="deferred-item-description">
                        <h5>Фото. Lorem ipsum dolor sit amet.</h5>
                        <p>consectetur adipisicing elit.</p>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item deferred-item--file">
                    <img src="img/play.png" width="25" height="25" alt="">
                    <div class="deferred-item-description">
                        <h5>Аудио. Randat, Monsta (Rus)<span> - Don't Stay</span></h5>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item deferred-item--file">
                    <img src="img/doc.png" width="23" height="31" alt="">
                    <div class="deferred-item-description">
                        <h5>Бесплатный курс по развитию памяти.pdf<span> - 450 КБ</span></h5>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
                <li class="deferred-item deferred-item--file">
                    <img src="img/a.png" width="25" height="27" alt="">
                    <div class="deferred-item-description">
                        <h5>Бесплатный курс по дизайну.psd<span> -&nbsp400 МБ</span></h5>
                        <span>Публикация: <output>03.08.2018 в 08:33</output></span>
                    </div>
                </li>
            </ul>
            <div class="notification-aside">
                <p>Создано 8 отложенных записей из 50</p>
            </div>
        </div>
    </aside>
</div>
@endsection
