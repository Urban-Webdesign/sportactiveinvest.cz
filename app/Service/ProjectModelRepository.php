<?php

namespace App\Service;

use K2D\Core\Models\ConfigurationModel;
use K2D\Core\Models\LogModel;
use K2D\Core\Service\ModelRepository;
use K2D\File\Model\FileModel;
use K2D\News\Models\NewModel;

/**
 * @property-read NewModel $new
 * @property-read FileModel $file
 */
class ProjectModelRepository extends ModelRepository
{

}
