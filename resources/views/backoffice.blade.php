@extends('layouts.app')

@section('main_js_file', asset('js/back.js'))

@section('body')
    @include('layouts.header')
    <div class="container mt-5">
        <h1>@yield('page_title')</h1>
        @include('layouts.messages')
        @yield('page_content')
    </div>
    @include('layouts.footer')
@endsection