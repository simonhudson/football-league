<footer class="footer--global">
    <div class="grid__wrap">
        <div class="grid__span--4">
            <p><address>
                <small>Derby County Football Club<br />
                The iPro Stadium<br />
                Pride Park<br />
                Derby<br />
                DE24 8XL</small>
            </address></p>
            <p><small>Tel: 0871 472 1884</small></p>
        </div>
        <div class="social-media grid__span--4">
            <ul class="social-media__list">
                {% for item in socialMedia %}
                    <li class="social-media__item">
                        <a class="social-media__link" href="{{ item.url }}" target="_blank">
                            <span class="fa fa-{{ item.icon }} fa-2x"></span>
                            <span class="hidden">{{ item.cta }}</span>
                            <span class="hidden"> (opens in a new window)</span>
                        </a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</footer>