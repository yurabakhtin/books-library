@extends('layouts.app')

@section('page_title', 'Books list')

@section('main_js_file', asset('js/app.js'))

@section('body')
    <div id="app"></div>
@endsection

@section('head_assets')
    <script>
        window.site_config = @json($site_config)
    </script>
@endsection