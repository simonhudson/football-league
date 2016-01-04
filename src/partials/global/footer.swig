<footer class="footer--global">
    <div class="social-media">
        <ul class="social-media__list">
            {% for item in socialMedia %}
                <li class="social-media__item">
                    <a class="social-media__link" href="{{ item.url }}">
                        <span class="fa fa-{{ item.icon }} fa-2x"></span>
                        <span class="hidden">{{ item.cta }}</span>
                    </a>
                </li>
            {% endfor %}
        </ul>
    </div>
</footer>