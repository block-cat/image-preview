<?php

/*
 * This file is part of block-cat/image-preview.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\ImagePreview;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->mutate(Extenders\AddForumAttributes::class)
];
