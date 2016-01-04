<nav class="main-nav" data-showhide-content="sh-main-nav" id="main-nav">
    <ul class="main-nav__list">
        {% for level1 in mainNav %}
            <li class="main-nav__item">
                <a class="main-nav__link" href="{{ level1.url }}">{{ level1.text }}</a>
            </li>
            {% if level1.secondaryNav %}
                <ul class="sub-nav__list">
                {% for level2 in level1.secondaryNav %}
                    <li class="sub-nav__item">
                        <a class="sub-nav__link" href="{{ level2.url }}">{{ level2.text }}</a>
                    </li>
                {% endfor %}
                </ul>
            {% endif %}
        {% endfor %}
    </ul>
</nav>