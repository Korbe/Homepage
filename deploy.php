<?php
namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'https://github.com/Korbe/homepage.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('217.154.67.144')
    ->set('ssh_multiplexing', false)
    ->set('remote_user', 'deployer')
    ->set('deploy_path', '/var/www/korbitsch.at');

// Hooks
task('npm:install', function () {
    cd('{{release_path}}');
    run('npm install');
});

task('npm:build', function () {
    cd('{{release_path}}');
    run('npm run build');
});

task('fpm:restart', function () {
    run('sudo systemctl restart php8.3-fpm');
});

task('nginx:reload', function () {
    run('sudo systemctl reload nginx');
});

task('ssr:restart', function () {
    run('sudo supervisorctl restart inertia-ssr');
});

after('deploy:vendors', 'npm:install');
after('npm:install', 'npm:build');
after('deploy:success', 'fpm:restart');
after('deploy:success', 'nginx:reload');
after('deploy:success', 'ssr:restart');

after('deploy:setup', 'deploy:unlock');
after('deploy:failed', 'deploy:unlock');



