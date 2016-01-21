{% extends '../templates/default.swig' %}

{% block pageTitle %}{{ pageTitle }}{% endblock %}

    {% block content %}

    <div class="grid__wrap">
        <div class="grid__span--full">
            <h1>{{ heading }}</h1>
            <div class="js-squad-list">

            </div>
        </div>
    </div>
    {% endblock %}