<!doctype html>
<!--[if (IE 8)&!(IEMobile)]>
<html class="no-js is-ie8 lt-ie9 lt-ie10" lang="en">
<![endif]-->
<!--[if IE 9]>
    <html class="no-js is-ie9 lt-ie10" lang="en">
<![endif]-->
<!--[if gt IE 9]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<title>{% block pageTitle %}{% endblock %}{{ global.pageTitleFragment }}</title>
{% include "../partials/global/meta.swig" %}
{% include "../partials/global/css-files.swig" %}
</head>
<body>

{% include "../partials/global/header.swig" %}

{% block content %}
{% endblock %}

{% include "../partials/global/footer.swig" %}

{% include "../partials/global/js-files.swig" %}
</body>
</html>