<header class="header--global">
    <div class="grid__wrap">
        <div class="grid__span--3 logo__wrap">
            <a href="./">
                <img alt="{{ global.clubName }}" class="logo__img" src="./assets/imgs/club-logo.png" />
            </a>
        </div>
        <div class="grid__span--15 to-edge main-nav__wrap">
            {% include "main-nav.swig" %}
        </div>
        <a class="main-nav__toggle js-showhide-toggle" data-showhide-target="sh-main-nav" href="#">
            <span class="fa fa-bars fa-2x"></span>
            <span class="hidden">Menu</span>
        </a>
    </div>
</header>