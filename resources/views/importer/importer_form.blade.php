@extends('backoffice')

@section('page_title', 'XML Importer')

@section('page_content')
<form action="{{ route('import') }}" method="post" enctype="multipart/form-data"@if($errors->any()) class="was-validated"@endif>
    @csrf

    <div class="custom-file mb-3">
        <input type="file" name="xml_file" class="custom-file-input" id="xml_file" required>
        <label class="custom-file-label" for="xml_file">Choose XML file...</label>
        @error('xml_file')
        <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <button class="btn btn-primary"><i class="fa fa-download"></i> Upload & Import</button>
</form>
@endsection

@section('footer_assets')
<script>
    $('input[type=file]').change(e => $(e.target).next().html(e.target.files[0].name))
</script>
@endsection