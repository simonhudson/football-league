<footer>
    <div class="social-media">
        <ul class="social-media__list">
            {% for item in socialMedia %}
                <li class="social-media__item">
                    <a class="social-media__link" href="{{ item.url }}">{{ item.cta }}</a>
                </li>
            {% endfor %}
        </ul>
    </div>
</footer>