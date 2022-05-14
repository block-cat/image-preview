# BkC Image Preview

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/image-preview.svg)](https://packagist.org/packages/block-cat/image-preview)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitatea de previzualizare a imaginilor încărcate în articole sau comentarii. Previzualizarea este accesată în editor, direct când este scris articolul sau comentariul. În zona de previzualizare, imaginea poate fi mărită sau micșorată dacă este necesar de observat unele elemente din aceasta.

**Previzualizarea imaginilor este accesibilă doar în modul de `ecran complet` al editorului!**

Implicit, în Flarum, imaginile încărcate în editor arată sub formă de link, în felul următor:

![](https://i.imgur.com/39MwnTN.png)

Pentru a putea vizualiza ce imagine a fost încărcată, trebuie ca extensia dată să fie activată în panoul de administrare. Și, atunci când se scrie ceva în editor, trebuie de selactat modul `ecran complet`.

![](https://i.imgur.com/c2UXb0A.png)

În modul `ecran complet`, pe partea dreaptă va fi amplasată zona pentru previzualizarea a imaginilor incărcate în editor.

![](https://i.imgur.com/r4hrOmr.png)

De asemenea, în zona de previzualizare, imaginea curentă poate fi mărită sau micșorată prin scroll la mouse sau utilizând butoanele din josul zonei.

![](https://i.imgur.com/BxAQT7R.png)

Dacă în articol sunt înserate mai multe imagini, acestea pot fi selectate prin săgeți sau prin selectarea imaginii din subsolul zonei de previzualizare.

![](https://i.imgur.com/ElXyltI.png)

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/image-preview *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/image-preview
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/image-preview
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/image-preview)
- [Changelog](CHANGELOG.md)