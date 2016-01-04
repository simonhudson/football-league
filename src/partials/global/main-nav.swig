<nav>
    <ul>
        {% for level1 in mainNav %}
            <li>
                <a href="{{ level1.url }}">{{ level1.text }}</a>
            </li>
            {% if level1.secondaryNav %}
                <ul>
                {% for level2 in level1.secondaryNav %}
                    <li>
                        <a href="{{ level2.url }}">{{ level2.text }}</a>
                    </li>
                {% endfor %}
                </ul>
            {% endif %}
        {% endfor %}
    </ul>
</nav>