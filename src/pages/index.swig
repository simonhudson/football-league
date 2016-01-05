{% extends '../templates/default.swig' %}

{% block pageTitle %}{{ pageTitle }}{% endblock %}

    {% block content %}
    <h1 class="hidden">{{ heading }}</h1>
    <div class="banner">
        <div class="banner__img">
        </div>
        <div class="grid__wrap">
            <div class="grid__span--18">
                <div class="banner__content">
                    <h2 class="hidden">Latest news</h2>
                </div>
            </div>
        </div>
    </div>
    {% endblock %}