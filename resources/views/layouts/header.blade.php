<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">
        <a href="{{ route('home') }}" class="text-white">
            <i class="fa fa-book"></i> Books Library
        </a>
    </h5>
    <a href="{{ route('importer') }}" class="btn {{ request()->route()->getName() == 'importer' ? 'btn-light' : 'btn-link text-white' }}">
        <i class="fa fa-download"></i> Importer
    </a>
</div>