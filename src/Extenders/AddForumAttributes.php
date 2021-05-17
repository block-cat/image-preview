<?php

/*
 * Throw this class are added the nesesary
 * permisions for extension
 */

namespace BlockCat\ImagePreview\Extenders;

use Flarum\Api\Serializer\ForumSerializer;

class AddForumAttributes
{
    public function __invoke(ForumSerializer $serializer)
    {
        $attributes['block-cat-image-preview.imgWidth'] = 0;
        $attributes['block-cat-image-preview.imgHeight'] = 0;
        
        return $attributes;
    }
}
