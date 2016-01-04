<nav>
    <ul>
        {% for item in mainNav %}
            <li>
                <a href="{{ item.url }}">{{ item.text }}</a>
            </li>
        {% endfor %}
    </ul>
</nav>