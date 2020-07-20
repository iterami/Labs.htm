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
      'ui': '<div id=npc></div><div id=npc-talk></div><div id=npc-trade></div>',
    });
    webgl_settings_init();

    webgl_level_load({
      'character': -1,
      'json': {
        'spawn-rotate-x': 25,
        'spawn-translate-y': 5,
        'spawn-translate-z': 10,
        'characters': [
          {
            'id': 'math',
            'entities': [
              {
                'id': 'ground',
                'texture-id': 'grid.png',
                'texture-repeat-x': 100,
                'texture-repeat-y': 100,
                'vertex-colors': [
                  1, 1, 1, 1,
                  1, 1, 1, 1,
                  1, 1, 1, 1,
                  1, 1, 1, 1
                ],
                'vertices': [
                  50, 0, -50, 1,
                  -50, 0, -50, 1,
                  -50, 0, 50, 1,
                  50, 0, 50, 1
                ]
              },
              {
                'id': 'billboard-x',
                'attach-offset-x': -10,
                'attach-offset-y': 5,
                'attach-offset-z': -15,
                'billboard': [
                  'x'
                ],
                'vertex-colors': [
                  1, 0, 0, 1,
                  1, 0, 0, 1,
                  1, 0, 0, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-xy',
                'attach-offset-x': -10,
                'attach-offset-y': 5,
                'attach-offset-z': -25,
                'billboard': [
                  'x',
                  'y'
                ],
                'vertex-colors': [
                  1, 1, 0, 1,
                  1, 1, 0, 1,
                  1, 1, 0, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-xyz',
                'attach-offset-y': 5,
                'attach-offset-z': -35,
                'billboard': [
                  'x',
                  'y',
                  'z'
                ],
                'vertex-colors': [
                  1, 1, 1, 1,
                  1, 1, 1, 1,
                  1, 1, 1, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-xz',
                'attach-offset-y': 5,
                'attach-offset-z': -25,
                'billboard': [
                  'x',
                  'z'
                ],
                'vertex-colors': [
                  1, 0, 1, 1,
                  1, 0, 1, 1,
                  1, 0, 1, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-yz',
                'attach-offset-x': 10,
                'attach-offset-y': 5,
                'attach-offset-z': -25,
                'billboard': [
                  'y',
                  'z'
                ],
                'vertex-colors': [
                  0, 1, 1, 1,
                  0, 1, 1, 1,
                  0, 1, 1, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-y',
                'attach-offset-y': 5,
                'attach-offset-z': -15,
                'billboard': [
                  'y'
                ],
                'vertex-colors': [
                  0, 1, 0, 1,
                  0, 1, 0, 1,
                  0, 1, 0, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
              {
                'id': 'billboard-z',
                'attach-offset-x': 10,
                'attach-offset-y': 5,
                'attach-offset-z': -15,
                'billboard': [
                  'z'
                ],
                'vertex-colors': [
                  0, 0, 1, 1,
                  0, 0, 1, 1,
                  0, 0, 1, 1
                ],
                'vertices': [
                  -5, 0, 0, 1,
                  5, 0, 0, 1,
                  0, 5, 0, 1
                ]
              },
            ],
          },
        ],
      },
    });
    core_escape();
}

function repo_logic(){
}
