$(document).ready(function() {

    $('#stores').DataTable({
        "ajax": '/api/locations/store',
        "columns": [
            {
                "render": function (data, type, json, meta) {
                    return '<img src="' + json.images['logo'] + '" width="70px" height="auto">';
                }
            },
            { "data": "name" },
            { "data": "local" },
            { "data": "short_url" },
            { "data": "category" },
            { "data": "status" },
            {
                "render": function (data, type, json, meta) {
                    return '<div><a href="/locales/editar/' + json.local + '" class="btn btn-info btn-sm btn-circle" style="margin-right: 8px"><i class="fa fa-pencil" ></i></a><a target="_blank" href="https://towncenter.com.pa/tiendas/' + json.short_url + '" class="btn btn-primary btn-sm btn-circle"><i class="fa fa-eye" /></a></div>';
                }
            }
        ]
    });

    $('#restaurants').DataTable({
        "ajax": '/api/locations/restaurant',
        "columns": [
            {
                "render": function (data, type, json, meta) {
                    return '<img src="' + json.images['logo'] + '" width="70px" height="auto">';
                }
            },
            { "data": "name" },
            { "data": "local" },
            { "data": "short_url" },
            { "data": "category" },
            { "data": "status" },
            {
                "render": function (data, type, json, meta) {
                    return '<div><a href="/locales/editar/' + json.local + '" class="btn btn-info btn-sm btn-circle" style="margin-right: 8px"><i class="fa fa-pencil" ></i></a><a target="_blank" href="https://towncenter.com.pa/restaurantes/' + json.short_url + '" class="btn btn-primary btn-sm btn-circle"><i class="fa fa-eye" /></a></div>';
                }
            }
        ]
    });

    $('#small').DataTable({
        "ajax": '/api/home/web/small',
        "columns": [
            {
                "render": function (data, type, json, meta) {
                    return meta['row'] + 1;
                }
            },
            {
                "render": function (data, type, json, meta) {
                    return '';
                }
            },
            { "data": "date" },
            { "data": "url" },
            {
                "render": function (data, type, json, meta) {
                    return '<div><a href="/home/secundario/editar/' + json.date + '" class="btn btn-info btn-xs" style="margin-right: 8px"><i class="fa fa-pencil" ></i></a><a target="_blank" href="https://towncenter.com.pa/restaurantes/" class="btn btn-primary btn-xs"><i class="fa fa-eye" /></a></div>';
                }
            }
        ]
    });

    $('#big').DataTable({
        "ajax": '/api/home/web/big',
        "columns": [
            {
                "render": function (data, type, json, meta) {
                    return meta['row'] + 1;
                }
            },
            {
                "render": function (data, type, json, meta) {
                    return '';
                }
            },
            { "data": "date" },
            { "data": "url" },
            {
                "render": function (data, type, json, meta) {
                    return '<div><a href="/home/principal/editar/' + json.date + '" class="btn btn-info btn-xs" style="margin-right: 8px"><i class="fa fa-pencil" ></i></a><a target="_blank" href="https://towncenter.com.pa/restaurantes/" class="btn btn-primary btn-xs"><i class="fa fa-eye" /></a></div>';
                }
            }
        ]
    });
});