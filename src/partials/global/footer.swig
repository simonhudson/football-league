<footer class="footer--global">
    <div class="grid__wrap footer__wrap">
        <div class="grid__span--4">
            <address class="footer__address">
                <small>
                    <span class="footer__address-item">Derby County Football Club</span>
                    <span class="footer__address-item">The iPro Stadium</span>
                    <span class="footer__address-item">Pride Park</span>
                    <span class="footer__address-item">Derby</span>
                    <span class="footer__address-item">DE24 8XL</span>
                    <span class="footer__address-item">Tel: 0871 472 1884</span>
                </small>
            </address>
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