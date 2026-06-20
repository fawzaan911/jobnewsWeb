# بناء ملف Tailwind CSS الثابت من ملفات HTML
# الاستخدام:  .\build.ps1            (بناء مرّة واحدة)
#            .\build.ps1 -Watch     (إعادة بناء تلقائية عند تعديل HTML)
param([switch]$Watch)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

$cli = 'tools\tailwindcss.exe'
if (-not (Test-Path $cli)) {
  Write-Host 'تنزيل Tailwind standalone CLI...' -ForegroundColor Cyan
  New-Item -ItemType Directory -Force -Path tools | Out-Null
  $ProgressPreference = 'SilentlyContinue'
  Invoke-WebRequest -Uri 'https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.16/tailwindcss-windows-x64.exe' -OutFile $cli
}

$args = @('-c','tailwind.config.js','-i','src\input.css','-o','assets\tailwind.css','--minify')
if ($Watch) { $args += '--watch' }

& $cli @args
