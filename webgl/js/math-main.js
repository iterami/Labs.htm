'use strict';

function repo_init(){
    core_repo_init({
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousedown': {
          'todo': webgl_camera_handle,
        },
        'mousemove': {
          'preventDefault': true,
          'todo': webgl_camera_handle,
        },
      },
      'title': 'Labs.htm',
    });
    webgl_settings_init();
}
